import { Users, Star } from 'lucide-react';

export default function HomestayCard({ homestay, onBook, style }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm animate-slide-up" style={{ background: 'white', ...style }}>
      <div className="relative h-40 overflow-hidden">
        <img src={homestay.image} alt={homestay.name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 px-2 py-1 rounded-lg text-xs font-bold" style={{ background: 'var(--green-deep)', color: 'white' }}>
          ${homestay.price}/night
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h4 className="font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{homestay.name}</h4>
          <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--sand-dark)' }}>
            <Star size={11} fill="currentColor" /> 4.8
          </div>
        </div>
        <p className="text-xs mb-1" style={{ color: 'var(--text-light)' }}>{homestay.location}</p>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-mid)' }}>{homestay.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {homestay.amenities.map(a => (
            <span key={a} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'var(--green-pale)', color: 'var(--green-deep)' }}>
              {a}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-light)' }}>
            <Users size={12} /> Up to {homestay.capacity} guests
          </span>
          <button
            onClick={() => onBook(homestay)}
            className="px-4 py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
            style={{ background: 'var(--green-deep)', color: 'white' }}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );
}
