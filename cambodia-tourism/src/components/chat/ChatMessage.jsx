import { useApp } from '../../context/AppContext';

function formatTime(date) {
  return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatMessage({ message }) {
  const { updateBookingStatus } = useApp();

  if (message.type === 'system') {
    return (
      <div className="flex justify-center my-2">
        <span className="text-xs px-3 py-1 rounded-full" style={{ background: 'var(--beige-dark)', color: 'var(--text-light)' }}>
          {message.text}
        </span>
      </div>
    );
  }

  if (message.type === 'booking') {
    const { details, bookingType, responded, response } = message;
    const isGuide = bookingType === 'guide';

    return (
      <div className="flex justify-start mb-3 animate-slide-up px-2">
        <div className="max-w-[85%]">
          <div className="rounded-2xl rounded-tl-sm overflow-hidden" style={{ background: 'white', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            {/* Header */}
            <div className="px-3 pt-3 pb-2 border-b" style={{ borderColor: 'var(--beige-dark)' }}>
              <div className="flex items-center gap-2">
                <span className="text-sm">{isGuide ? '🧑‍🏫' : bookingType === 'homestay' ? '🏡' : '🎯'}</span>
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--green-deep)' }}>
                  New {bookingType} Request
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="px-3 py-2 text-xs space-y-1" style={{ color: 'var(--text-mid)' }}>
              <Row label="Item" value={details.itemName} />
              <Row label="Location" value={details.locationName} />
              {details.date && <Row label="Date" value={details.date} />}
              {details.checkIn && <Row label="Check-in" value={details.checkIn} />}
              {details.checkOut && <Row label="Check-out" value={details.checkOut} />}
              {details.people && <Row label="People" value={details.people} />}
              {details.guests && <Row label="Guests" value={details.guests} />}
              {details.notes && <Row label="Notes" value={details.notes} />}
            </div>

            {/* Actions for guide bookings */}
            {isGuide && !responded && (
              <div className="px-3 pb-3 pt-1 flex gap-2">
                <button
                  onClick={() => updateBookingStatus(message.bookingId, 'declined')}
                  className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95"
                  style={{ background: '#fde8e8', color: '#c0392b' }}
                >
                  Decline
                </button>
                <button
                  onClick={() => updateBookingStatus(message.bookingId, 'accepted')}
                  className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all active:scale-95"
                  style={{ background: 'var(--green-deep)', color: 'white' }}
                >
                  Accept ✓
                </button>
              </div>
            )}

            {/* Response badge */}
            {responded && (
              <div className="px-3 pb-3 pt-1">
                <div
                  className="w-full py-2 rounded-xl text-xs font-semibold text-center animate-fade-in"
                  style={{
                    background: response === 'accepted' ? 'var(--green-pale)' : '#fde8e8',
                    color: response === 'accepted' ? 'var(--green-deep)' : '#c0392b',
                  }}
                >
                  {response === 'accepted' ? '✅ Accepted' : '❌ Declined'}
                </div>
              </div>
            )}

            {/* Non-guide confirmed badge */}
            {!isGuide && (
              <div className="px-3 pb-3 pt-1">
                <div className="w-full py-2 rounded-xl text-xs font-semibold text-center" style={{ background: 'var(--green-pale)', color: 'var(--green-deep)' }}>
                  ✅ Auto-confirmed
                </div>
              </div>
            )}
          </div>
          <span className="text-xs mt-1 block pl-1" style={{ color: 'var(--text-light)' }}>
            {formatTime(message.timestamp)}
          </span>
        </div>
      </div>
    );
  }

  return null;
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-2">
      <span style={{ color: 'var(--text-light)', minWidth: 60 }}>{label}</span>
      <span className="font-medium text-right" style={{ color: 'var(--text-dark)' }}>{value}</span>
    </div>
  );
}
