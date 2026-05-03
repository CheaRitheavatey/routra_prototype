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
  const mapAreas = {
    angkor: { image: 'map_angkor_borei.png', label: 'Angkor Borei' },
    choam:  { image: 'map_choam_ksant.png', label: 'Choam Ksant' },
    preah:  { image: 'map_preah_rumkel.png', label: 'Preah Rumkel' },
  };

  const drySeasonMarkers = [
    { x: 30, y: 40, type: 'bathroom', label: 'Public Restroom', emoji: '🚿' },
    { x: 50, y: 55, type: 'food',     label: 'Nom Banh Chok Stand', emoji: '🍜' },
    { x: 60, y: 35, type: 'rest',     label: 'Shaded Rest Area', emoji: '🛖' },
    { x: 45, y: 70, type: 'waste',    label: 'Recycling Station', emoji: '♻️' },
    { x: 70, y: 45, type: 'food',     label: 'Local Khmer Kitchen', emoji: '🍜' },
    { x: 80, y: 60, type: 'rest',     label: 'Scenic Viewpoint', emoji: '🛖' },
    { x: 40, y: 20, type: 'bathroom', label: 'Eco-Toilet Station', emoji: '🚿' },
    { x: 55, y: 45, type: 'you',      label: 'You are here', emoji: '📍' },
  ];

  const wetSeasonMarkers = [
    { x: 30, y: 40, type: 'bathroom', label: 'Covered Restroom', emoji: '🚿' },
    { x: 50, y: 55, type: 'craft',    label: 'Indoor Pottery Class', emoji: '🏺' },
    { x: 60, y: 35, type: 'craft',    label: 'Lotus Weaving Workshop', emoji: '🧶' },
    { x: 70, y: 45, type: 'food',     label: 'Covered Market Kitchen', emoji: '🍜' },
    { x: 45, y: 70, type: 'flood',    label: 'Flooded — Avoid', emoji: '⚠️' },
    { x: 80, y: 60, type: 'flood',    label: 'Flooded Trail Closure', emoji: '⚠️' },
    { x: 40, y: 20, type: 'rest',     label: 'Elevated Shelter', emoji: '🛖' },
    { x: 55, y: 45, type: 'you',      label: 'You are here', emoji: '📍' },
  ];

  const gallery = document.getElementById('map-gallery');
  const detail  = document.getElementById('map-detail');
  const backBtn = document.getElementById('map-back-btn');
  const areaLabel = document.getElementById('map-area-label');
  const cartoonMapImage = document.getElementById('cartoon-map-image');
  const mapPinsContainer = document.getElementById('map-pins-container');

  function addMarkers(markerData) {
    if (!mapPinsContainer) return;
    mapPinsContainer.innerHTML = '';
    
    markerData.forEach(m => {
      const pin = document.createElement('div');
      pin.className = `custom-marker marker-${m.type}`;
      pin.style.left = `${m.x}%`;
      pin.style.top = `${m.y}%`;
      pin.style.position = 'absolute';
      pin.innerHTML = `${m.emoji}`;
      
      const popup = document.createElement('div');
      popup.className = 'custom-popup';
      popup.innerHTML = `<strong>${m.label}</strong><br><span style="color:#6a8f96">${m.type === 'flood' ? 'Area inaccessible' : 'Available for travelers'}</span>`;
      pin.appendChild(popup);
      
      pin.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.custom-popup').forEach(p => p.classList.remove('show'));
        popup.classList.add('show');
      });

      mapPinsContainer.appendChild(pin);
    });
  }

  // Click outside to close popups
  document.addEventListener('click', () => {
    document.querySelectorAll('.custom-popup').forEach(p => p.classList.remove('show'));
  });

  function openMapDetail(areaKey) {
    const area = mapAreas[areaKey] || mapAreas.angkor;
    gallery.style.display = 'none';
    detail.classList.remove('hidden-view');
    areaLabel.textContent = area.label;
    
    if (cartoonMapImage) {
      cartoonMapImage.src = area.image;
    }
    
    addMarkers(drySeasonMarkers);
  }

  // Gallery card buttons
  document.querySelectorAll('.map-view-btn').forEach(btn => {
    btn.addEventListener('click', () => openMapDetail(btn.dataset.map));
  });

  // Back to gallery
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      detail.classList.add('hidden-view');
      gallery.style.display = '';
    });
  }

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
