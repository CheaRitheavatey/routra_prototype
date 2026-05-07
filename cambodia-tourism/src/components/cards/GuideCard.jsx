import { Star } from 'lucide-react';
import ProgressStatus from '../booking/ProgressStatus';
import { useApp } from '../../context/AppContext';

export default function GuideCard({ guide, locationName, onBook, style }) {
  const { bookings } = useApp();
  const guideBooking = bookings.find(b => b.type === 'guide' && b.itemId === guide.id);

  return (
    <div className="rounded-2xl overflow-hidden shadow-sm animate-slide-up" style={{ background: 'white', ...style }}>
      <div className="p-4 flex gap-3">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
          style={{ border: '2px solid var(--green-pale)' }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{guide.name}</h4>
            <div className="flex items-center gap-1 text-xs" style={{ color: 'var(--sand-dark)' }}>
              <Star size={11} fill="currentColor" /> {guide.rating}
            </div>
          </div>
          <p className="text-xs mb-1" style={{ color: 'var(--green-mid)' }}>{guide.specialty}</p>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-light)' }}>{guide.bio}</p>
        </div>
      </div>
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold" style={{ color: 'var(--green-deep)' }}>${guide.price}/day</span>
        </div>

        {guideBooking ? (
          <ProgressStatus bookingId={guideBooking.id} />
        ) : (
          <button
            onClick={() => onBook(guide)}
            className="w-full py-2.5 rounded-xl text-sm font-semibold transition-all active:scale-95"
            style={{ background: 'var(--green-deep)', color: 'white' }}
          >
            Request Guide
          </button>
        )}
      </div>
    </div>
  );
}
