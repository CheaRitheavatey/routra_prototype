import { useApp } from '../context/AppContext';
import ChatWindow from '../components/chat/ChatWindow';
import { MessageCircle } from 'lucide-react';

export default function LocalChat() {
  const { chatMessages } = useApp();
  const pending = chatMessages.filter(m => m.type === 'booking' && m.bookingType === 'guide' && !m.responded).length;

  return (
    <div
      className="flex flex-col"
      style={{
        height: '100vh',
        background: '#e5ddd5',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8b89a' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 pt-12 pb-4"
        style={{ background: 'var(--green-deep)' }}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'var(--green-light)' }}
        >
          <span className="text-lg">🏡</span>
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-white text-sm">Local Host Dashboard</h2>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {pending > 0 ? `${pending} request${pending > 1 ? 's' : ''} pending` : 'All caught up'}
          </p>
        </div>
        <div className="relative">
          <MessageCircle size={22} color="rgba(255,255,255,0.8)" />
          {pending > 0 && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center font-bold"
              style={{ background: '#e74c3c', color: 'white', fontSize: 10 }}
            >
              {pending}
            </span>
          )}
        </div>
      </div>

      {/* Info banner */}
      {pending > 0 && (
        <div className="mx-3 mt-3 px-3 py-2 rounded-xl text-xs font-medium animate-fade-in" style={{ background: 'rgba(45,90,39,0.12)', color: 'var(--green-deep)' }}>
          📬 You have guide requests to respond to. Tap Accept or Decline below each booking.
        </div>
      )}

      {/* Chat window */}
      <ChatWindow />

      {/* Input bar (decorative) */}
      <div
        className="px-3 py-3 flex items-center gap-2"
        style={{ background: 'var(--beige)', borderTop: '1px solid var(--beige-dark)' }}
      >
        <div
          className="flex-1 px-4 py-2.5 rounded-full text-sm"
          style={{ background: 'white', color: 'var(--text-light)' }}
        >
          Booking requests appear above…
        </div>
      </div>
    </div>
  );
}
