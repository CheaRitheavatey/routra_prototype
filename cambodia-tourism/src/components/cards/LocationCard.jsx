import { MapPin } from 'lucide-react';

export default function LocationCard({ location, onViewMap, style }) {
  return (
    <div
      className="rounded-2xl overflow-hidden shadow-sm animate-slide-up"
      style={{ background: 'white', ...style }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover"
          style={{ transition: 'transform 0.3s ease' }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
        <div className="absolute bottom-3 left-3 flex items-center gap-1">
          <MapPin size={13} color="white" />
          <span className="text-xs text-white font-medium">{location.region}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-base mb-1" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}>
          {location.name}
        </h3>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-light)' }}>
          {location.description}
        </p>
        <button
          onClick={() => onViewMap(location)}
          className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
          style={{ background: 'var(--green-deep)', color: 'white' }}
        >
          View Map
        </button>
      </div>
    </div>
  );
}
