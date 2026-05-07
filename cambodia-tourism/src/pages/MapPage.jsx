import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MapView from '../components/map/MapView';

export default function MapPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const location = state?.location;

  if (!location) {
    navigate('/');
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--beige)' }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-12 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="p-2 rounded-full transition-all active:scale-90"
          style={{ background: 'var(--beige-dark)' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h2 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>{location.name}</h2>
          <p className="text-xs" style={{ color: 'var(--text-light)' }}>{location.region}</p>
        </div>
      </div>

      <div className="px-4">
        <MapView location={location} />
      </div>

      {/* Info */}
      <div className="px-4 mt-4">
        <div className="rounded-2xl p-4" style={{ background: 'white' }}>
          <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>About this area</h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-mid)' }}>{location.description}</p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {location.markers.map(m => (
              <div key={m.id} className="p-2 rounded-xl" style={{ background: 'var(--beige)' }}>
                <p className="text-xs font-medium" style={{ color: 'var(--text-dark)' }}>{m.name}</p>
                <p className="text-xs" style={{ color: 'var(--text-light)' }}>{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
