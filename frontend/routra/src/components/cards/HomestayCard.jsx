import { Star, Users } from 'lucide-react';

export default function HomestayCard({ homestay, onBook }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 active:scale-[0.98] transition-transform duration-150">
      <div className="relative h-44 overflow-hidden">
        <img
          src={homestay.image}
          alt={homestay.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm">
          <Star size={13} className="text-amber-500 fill-amber-500" />
          <span className="text-stone-800 text-xs font-bold">{homestay.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h4 className="font-bold text-stone-800 text-base">{homestay.name}</h4>
            <p className="text-stone-500 text-xs mt-0.5">Hosted by {homestay.host}</p>
          </div>
          <div className="text-right flex-shrink-0">
            <span className="text-green-700 font-bold text-lg">${homestay.pricePerNight}</span>
            <p className="text-stone-400 text-xs">/ night</p>
          </div>
        </div>
        <p className="text-stone-500 text-sm mt-2 leading-relaxed line-clamp-2">{homestay.description}</p>
        <div className="flex items-center gap-1 mt-2">
          <Users size={13} className="text-stone-400" />
          <span className="text-stone-400 text-xs">Up to {homestay.maxGuests} guests</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {homestay.amenities.map((a) => (
            <span key={a} className="bg-stone-100 text-stone-600 text-xs px-2 py-0.5 rounded-full">{a}</span>
          ))}
        </div>
        <button
          onClick={() => onBook(homestay)}
          className="mt-3 w-full bg-[#c3a85b] hover:bg-[#b39951] active:bg-[#a38a47] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
        >
          Book Stay
        </button>
      </div>
    </div>
  );
}
