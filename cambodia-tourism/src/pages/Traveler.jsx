import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Compass } from 'lucide-react';
import { locations } from '../data/mockData';
import LocationCard from '../components/cards/LocationCard';
import ExplorePage from './ExplorePage';

export default function Traveler() {
  const [activeTab, setActiveTab] = useState('map');
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen" style={{ background: 'var(--beige)' }}>
      {activeTab === 'map' ? (
        <MapTab onViewMap={(loc) => navigate('/map', { state: { location: loc } })} />
      ) : (
        <ExplorePage />
      )}

      {/* Bottom Nav */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full flex border-t"
        style={{
          maxWidth: 420,
          background: 'rgba(245,237,224,0.95)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--beige-dark)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {[
          { id: 'map', label: 'Map', Icon: Map },
          { id: 'explore', label: 'Explore', Icon: Compass },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className="flex-1 flex flex-col items-center py-3 gap-1 transition-all"
            style={{ color: activeTab === id ? 'var(--green-deep)' : 'var(--text-light)' }}
          >
            <Icon size={22} strokeWidth={activeTab === id ? 2.5 : 1.8} />
            <span className="text-xs font-semibold">{label}</span>
            {activeTab === id && (
              <div className="absolute bottom-0 w-10 h-0.5 rounded-full" style={{ background: 'var(--green-deep)' }} />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}

function MapTab({ onViewMap }) {
  return (
    <div className="flex flex-col pb-24">
      {/* Header */}
      <div
        className="px-4 pt-12 pb-6"
        style={{
          background: 'linear-gradient(160deg, #2d5a27 0%, #4a7c42 100%)',
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Discover Cambodia
        </p>
        <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Local Communities
        </h1>
        <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>
          5 authentic destinations waiting
        </p>
      </div>

      <div className="px-4 pt-4 flex flex-col gap-4">
        {locations.map((loc, i) => (
          <div key={loc.id} className={`stagger-${Math.min(i + 1, 5)}`}>
            <LocationCard location={loc} onViewMap={onViewMap} />
          </div>
        ))}
      </div>
    </div>
  );
}
