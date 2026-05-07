import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { locations } from '../data/mockData';
import LocationCard from '../components/cards/LocationCard';
import MapView from '../components/map/MapView';

export default function MapPage() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const location = locationId ? locations.find((l) => l.id === locationId) : null;

  if (locationId && !location) {
    return (
      <div className="min-h-screen bg-stone-50 pb-24">
        <div className="px-4 py-10 text-center text-stone-500">
          <p>Location not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <header className="discover-header">
        <div className="header-watermark"></div>
        <div className="brand-row">
          <h1 className="brand-name">
            <img src="/logo.png" alt="ROUTRA" className="brand-logo" />
          </h1>
          <button id="notif-btn" className="icon-btn map-icon-btn" aria-label="Notifications">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <span className="notif-dot"></span>
          </button>
        </div>
        <div className="search-bar" id="discover-search">
          <svg width="18" height="18" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="7"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="text" placeholder="Search routes..." aria-label="Search routes" />
        </div>
      </header>

      {location ? (
        <>
          <div className="px-4 pt-5 pb-4">
            <MapView location={location} />
          </div>

          <div className="px-4 py-4 space-y-2">
            <h2 className="font-bold text-stone-800">About This Region</h2>
            <p className="text-sm leading-relaxed text-stone-600">{location.description}</p>
          </div>

          <div className="px-4 py-4 border-t border-stone-200">
            <h3 className="font-bold text-stone-800 mb-3">Points of Interest</h3>
            <div className="space-y-2">
              {location.markers.map((m) => (
                <div key={m.id} className="bg-white p-3 rounded-xl border border-stone-100">
                  <p className="text-sm font-semibold text-stone-800">{m.name}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="px-4 py-5 space-y-4">
          <p className="text-sm text-stone-500">Pick a destination to view its map and points of interest.</p>
          <div className="space-y-4">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
