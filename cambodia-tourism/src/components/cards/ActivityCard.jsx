import { Clock, DollarSign } from 'lucide-react';

export default function ActivityCard({ activity, onBook, style }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm animate-slide-up" style={{ background: 'white', ...style }}>
      <img src={activity.image} alt={activity.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h4 className="font-bold text-sm mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{activity.name}</h4>
        <p className="text-xs mb-3 leading-relaxed" style={{ color: 'var(--text-light)' }}>{activity.description}</p>
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--green-mid)' }}>
            <DollarSign size={12} /> ${activity.price}/person
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-light)' }}>
            <Clock size={12} /> {activity.duration}
          </span>
        </div>
        <button
          onClick={() => onBook(activity)}
          className="w-full py-2 rounded-xl text-sm font-semibold transition-all active:scale-95"
          style={{ background: 'var(--sand)', color: 'white' }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
