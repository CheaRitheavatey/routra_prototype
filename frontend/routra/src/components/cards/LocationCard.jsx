import { useNavigate } from 'react-router-dom';
import { MapPin, ChevronRight } from 'lucide-react';

export default function LocationCard({ location }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 active:scale-[0.98] transition-transform duration-150">
      <div className="relative h-44 overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-bold text-lg leading-tight">{location.name}</h3>
          <div className="flex items-center gap-1 mt-0.5">
            <MapPin size={12} className="text-white/80" />
            <span className="text-white/80 text-xs">{location.region}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">{location.description}</p>
        <button
          onClick={() => navigate(`/map/${location.id}`)}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-[#447c89] hover:bg-[#3a6b76] active:bg-[#33636d] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
        >
          View Map
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
