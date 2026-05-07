import { useApp } from '../../context/AppContext';

export default function ChatMessage({ msg, onRespond }) {
  const { updateBookingStatus } = useApp();

  if (msg.type === 'system') {
    return (
      <div className="px-4 py-8 flex justify-center">
        <div className="text-center text-stone-500 text-xs bg-stone-100/50 px-3 py-1.5 rounded-full">
          {msg.text}
        </div>
      </div>
    );
  }

  if (msg.type === 'booking') {
    return (
      <div className="px-4 py-3 flex justify-end">
        <div className="bg-green-100 border border-green-200 rounded-2xl px-4 py-3 max-w-xs">
          <div className="text-sm text-stone-800 whitespace-pre-line leading-relaxed">{msg.text}</div>

          {msg.bookingType === 'guide' && msg.status === 'pending' && (
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => updateBookingStatus(msg.bookingId, 'accepted')}
                className="flex-1 bg-[#447c89] hover:bg-[#3a6b76] text-white text-xs font-bold py-2 px-2 rounded-lg transition-colors"
              >
                Accept
              </button>
              <button
                onClick={() => updateBookingStatus(msg.bookingId, 'declined')}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 px-2 rounded-lg transition-colors"
              >
                Decline
              </button>
            </div>
          )}

          {msg.status === 'accepted' && (
            <div className="mt-2 text-xs bg-[#447c89]/15 text-[#447c89] px-2 py-1 rounded-lg font-medium">
              ✓ Accepted
            </div>
          )}

          {msg.status === 'declined' && (
            <div className="mt-2 text-xs bg-red-200/50 text-red-700 px-2 py-1 rounded-lg font-medium">
              ✕ Declined
            </div>
          )}

          <span className="text-xs text-stone-500 mt-2 block">
            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </span>
        </div>
      </div>
    );
  }

  return null;
}
