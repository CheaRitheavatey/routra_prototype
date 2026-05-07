import { useState } from 'react';
import { X } from 'lucide-react';

const markerEmoji = { restaurant: '🍽️', homestay: '🏡', toilet: '🚻', business: '🛍️' };
const markerColor = {
  restaurant: '#c0392b',
  homestay: '#2d5a27',
  toilet: '#4a7c42',
  business: '#c9a96e',
};

function Marker({ marker, onClick }) {
  return (
    <button
      onClick={() => onClick(marker)}
      className="absolute flex flex-col items-center transition-transform active:scale-110"
      style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg text-base"
        style={{ background: markerColor[marker.type], border: '2px solid white' }}
      >
        {markerEmoji[marker.type]}
      </div>
    </button>
  );
}

export default function MapView({ location }) {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden" style={{ height: 340 }}>
      {/* Stylized map background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 30%, #81c784 60%, #66bb6a 100%)',
      }}>
        {/* Roads */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <path d="M 0 180 Q 200 160 400 180" stroke="white" strokeWidth="4" fill="none" opacity="0.7" />
          <path d="M 200 0 Q 210 170 220 340" stroke="white" strokeWidth="3" fill="none" opacity="0.5" />
          <path d="M 0 280 Q 150 260 300 280 L 400 270" stroke="#e8d9c4" strokeWidth="2" fill="none" opacity="0.6" />
          <circle cx="200" cy="170" r="30" fill="rgba(255,255,255,0.2)" />
          <circle cx="320" cy="120" r="20" fill="rgba(255,255,255,0.15)" />
          <rect x="50" y="80" width="60" height="40" rx="4" fill="rgba(255,255,255,0.2)" />
          <rect x="280" y="200" width="50" height="35" rx="4" fill="rgba(255,255,255,0.2)" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 64, color: 'var(--green-deep)', fontWeight: 700 }}>
            {location.name.split(' ')[0]}
          </span>
        </div>
      </div>

      {/* Location name overlay */}
      <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl text-xs font-semibold" style={{ background: 'rgba(0,0,0,0.6)', color: 'white' }}>
        📍 {location.name}
      </div>

      {/* Markers */}
      {location.markers.map(marker => (
        <Marker key={marker.id} marker={marker} onClick={setActiveMarker} />
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 rounded-xl p-2 text-xs" style={{ background: 'rgba(255,255,255,0.9)' }}>
        {Object.entries(markerEmoji).map(([type, emoji]) => (
          <div key={type} className="flex items-center gap-1 mb-0.5 last:mb-0">
            <span>{emoji}</span>
            <span style={{ color: 'var(--text-mid)', textTransform: 'capitalize' }}>{type}</span>
          </div>
        ))}
      </div>

      {/* Info Popup */}
      {activeMarker && (
        <div
          className="absolute bottom-4 left-4 right-4 rounded-xl p-3 shadow-lg animate-bounce-in"
          style={{ background: 'white' }}
        >
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm">{markerEmoji[activeMarker.type]}</span>
                <span className="font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{activeMarker.name}</span>
              </div>
              <p className="text-xs" style={{ color: 'var(--text-light)' }}>{activeMarker.description}</p>
            </div>
            <button onClick={() => setActiveMarker(null)} className="p-1">
              <X size={16} color="var(--text-light)" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
