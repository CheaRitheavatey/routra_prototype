/* ========================================================
   ROUTRA — App Logic
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- TAB NAVIGATION ---------- */
  const navBtns  = document.querySelectorAll('.nav-btn');
  const tabViews = document.querySelectorAll('.tab-view');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tabViews.forEach(v => v.classList.remove('active'));
      document.getElementById(`tab-${target}`).classList.add('active');
    });
  });

  /* ---------- FILTER PILL BUTTONS ---------- */
  const pillBtns = document.querySelectorAll('.pill');
  pillBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pillBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ---------- ALERT BANNER DISMISS ---------- */
  const alertClose = document.querySelector('.alert-close');
  if (alertClose) {
    alertClose.addEventListener('click', () => {
      alertClose.closest('.alert-banner').classList.add('dismissed');
    });
  }

  /* ---------- EXPERIENCE SUB-TABS ---------- */
  const expTabs   = document.querySelectorAll('.exp-tab');
  const expPanels = document.querySelectorAll('.exp-panel');

  expTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      expTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      expPanels.forEach(p => p.classList.remove('active'));
      document.getElementById(`exp-${tab.dataset.exp}`).classList.add('active');
    });
  });

  /* ---------- MAP (Gallery + Detail) ---------- */
  let map, markersLayer;

  const mapAreas = {
    angkor:     { center: [11.002, 104.945], zoom: 15, label: 'Angkor Borei' },
    prektotal:  { center: [13.188, 103.729], zoom: 14, label: 'Prek Toal' },
    kampot:     { center: [10.594, 104.161], zoom: 14, label: 'Kampot Riverside' },
  };

  const drySeasonMarkers = [
    { lat: 11.0020, lng: 104.9420, type: 'bathroom', label: 'Public Restroom', emoji: '🚿' },
    { lat: 10.9980, lng: 104.9500, type: 'food',     label: 'Nom Banh Chok Stand', emoji: '🍜' },
    { lat: 11.0060, lng: 104.9380, type: 'rest',     label: 'Shaded Rest Area', emoji: '🛖' },
    { lat: 10.9950, lng: 104.9460, type: 'waste',    label: 'Recycling Station', emoji: '♻️' },
    { lat: 11.0040, lng: 104.9530, type: 'food',     label: 'Local Khmer Kitchen', emoji: '🍜' },
    { lat: 11.0080, lng: 104.9450, type: 'rest',     label: 'Angkor Borei Viewpoint', emoji: '🛖' },
    { lat: 10.9990, lng: 104.9360, type: 'bathroom', label: 'Eco-Toilet Station', emoji: '🚿' },
  ];

  const wetSeasonMarkers = [
    { lat: 11.0020, lng: 104.9420, type: 'bathroom', label: 'Covered Restroom', emoji: '🚿' },
    { lat: 10.9980, lng: 104.9500, type: 'craft',    label: 'Indoor Pottery Class', emoji: '🏺' },
    { lat: 11.0060, lng: 104.9380, type: 'craft',    label: 'Lotus Weaving Workshop', emoji: '🧶' },
    { lat: 11.0040, lng: 104.9530, type: 'food',     label: 'Covered Market Kitchen', emoji: '🍜' },
    { lat: 10.9950, lng: 104.9460, type: 'flood',    label: 'Flooded — Avoid', emoji: '⚠️' },
    { lat: 11.0080, lng: 104.9450, type: 'flood',    label: 'Flooded Trail Closure', emoji: '⚠️' },
    { lat: 10.9990, lng: 104.9360, type: 'rest',     label: 'Elevated Shelter', emoji: '🛖' },
  ];

  function createMarkerIcon(marker) {
    return L.divIcon({
      className: '',
      html: `<div class="custom-marker marker-${marker.type}">${marker.emoji}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18],
      popupAnchor: [0, -22],
    });
  }

  function addMarkers(markerData) {
    if (markersLayer) markersLayer.clearLayers();
    markersLayer = L.layerGroup();

    markerData.forEach(m => {
      const marker = L.marker([m.lat, m.lng], { icon: createMarkerIcon(m) });
      marker.bindPopup(`<strong>${m.label}</strong><br><span style="color:#6a8f96">${m.type === 'flood' ? 'Area inaccessible due to flooding' : 'Available for travelers'}</span>`);
      markersLayer.addLayer(marker);
    });

    markersLayer.addTo(map);
  }

  let mapInitialized = false;
  const gallery = document.getElementById('map-gallery');
  const detail  = document.getElementById('map-detail');
  const backBtn = document.getElementById('map-back-btn');
  const areaLabel = document.getElementById('map-area-label');

  function openMapDetail(areaKey) {
    const area = mapAreas[areaKey] || mapAreas.angkor;
    gallery.style.display = 'none';
    detail.classList.remove('hidden-view');
    areaLabel.textContent = area.label;

    if (!mapInitialized) {
      map = L.map('leaflet-map', {
        center: area.center,
        zoom: area.zoom,
        zoomControl: true,
        attributionControl: false,
      });
      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
      }).addTo(map);
      mapInitialized = true;
    } else {
      map.setView(area.center, area.zoom);
    }

    addMarkers(drySeasonMarkers);
    setTimeout(() => map.invalidateSize(), 150);
  }

  // Gallery card buttons
  document.querySelectorAll('.map-view-btn').forEach(btn => {
    btn.addEventListener('click', () => openMapDetail(btn.dataset.map));
  });

  // Back to gallery
  backBtn.addEventListener('click', () => {
    detail.classList.add('hidden-view');
    gallery.style.display = '';
  });

  /* ---------- SEASON FILTER POPUP ---------- */
  const filterBtn   = document.getElementById('filter-season-btn');
  const seasonPopup = document.getElementById('season-popup');
  const closePopup  = document.getElementById('season-popup-close');
  const backdrop    = seasonPopup.querySelector('.season-popup-backdrop');
  const seasonBtns  = document.querySelectorAll('.season-option');
  const seasonInfo  = document.getElementById('season-info');
  const seasonLabelIcon = document.getElementById('season-label-icon');

  filterBtn.addEventListener('click', () => seasonPopup.classList.remove('hidden'));
  closePopup.addEventListener('click', () => seasonPopup.classList.add('hidden'));
  backdrop.addEventListener('click', () => seasonPopup.classList.add('hidden'));

  seasonBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      seasonBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const season = btn.dataset.season;

      if (season === 'dry') {
        addMarkers(drySeasonMarkers);
        if (seasonLabelIcon) seasonLabelIcon.textContent = '☀️';
        seasonInfo.innerHTML = `
          <div class="season-info-card"><span class="info-dot green"></span><span>All trails open — full access</span></div>
          <div class="season-info-card"><span class="info-dot green"></span><span>7 infrastructure points active</span></div>
        `;
      } else {
        addMarkers(wetSeasonMarkers);
        if (seasonLabelIcon) seasonLabelIcon.textContent = '🌧️';
        seasonInfo.innerHTML = `
          <div class="season-info-card"><span class="info-dot red"></span><span>2 trails flooded — rerouted</span></div>
          <div class="season-info-card"><span class="info-dot amber"></span><span>Indoor craft classes available</span></div>
          <div class="season-info-card"><span class="info-dot green"></span><span>5 infrastructure points active</span></div>
        `;
      }
    });
  });

  /* ---------- SOS BUTTON ---------- */
  const sosBtn = document.getElementById('sos-btn');
  sosBtn.addEventListener('click', () => {
    if (confirm('This will connect you to local emergency services.\n\nProceed with SOS call?')) {
      alert('📞 Connecting to Cambodia Emergency Line: 119\n\nYour GPS coordinates have been shared with local authorities.');
    }
  });

  /* ---------- DOWNLOAD BUTTON ---------- */
  const downloadBtns = document.querySelectorAll('.download-btn');
  downloadBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.textContent = 'Downloading...';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = '✓ Downloaded';
        btn.style.color = '#4ADE80';
        btn.style.background = 'rgba(74,222,128,.12)';
        const card = btn.closest('.offline-card');
        if (card) card.classList.remove('pending');
        const info = btn.closest('.offline-info');
        if (info) {
          const p = info.querySelector('p');
          if (p) p.textContent = 'Maps downloaded · 11.4 MB';
        }
      }, 1800);
    });
  });

});
