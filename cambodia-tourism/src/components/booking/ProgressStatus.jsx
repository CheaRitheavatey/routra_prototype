import { useApp } from '../../context/AppContext';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

export default function ProgressStatus({ bookingId }) {
  const { bookings } = useApp();
  const booking = bookings.find(b => b.id === bookingId);
  if (!booking) return null;

  const status = booking.status;

  const steps = [
    { key: 'pending', label: 'Request Sent', icon: '📤' },
    { key: 'accepted', label: 'Confirmed', icon: '✅' },
  ];

  const currentIdx = status === 'accepted' ? 1 : status === 'declined' ? -1 : 0;

  if (status === 'declined') {
    return (
      <div className="mt-3 p-3 rounded-xl flex items-center gap-2 animate-fade-in" style={{ background: '#fde8e8' }}>
        <XCircle size={18} color="#c0392b" />
        <span className="text-sm font-medium" style={{ color: '#c0392b' }}>Guide is unavailable for this date</span>
      </div>
    );
  }

  return (
    <div className="mt-3 p-3 rounded-xl animate-fade-in" style={{ background: 'var(--green-pale)' }}>
      <p className="text-xs font-semibold mb-2" style={{ color: 'var(--green-deep)' }}>
        {status === 'accepted' ? '🎉 Guide confirmed your booking!' : '⏳ Waiting for guide confirmation…'}
      </p>

      {/* Progress bar */}
      <div className="relative h-2 rounded-full mb-3" style={{ background: 'var(--beige-dark)' }}>
        <div
          className="progress-fill h-2 rounded-full"
          style={{
            width: status === 'accepted' ? '100%' : '45%',
            background: 'var(--green-deep)',
          }}
        />
        {status === 'pending' && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              animation: 'shimmer 1.5s infinite',
              backgroundSize: '200px 100%',
            }}
          />
        )}
      </div>

      {/* Steps */}
      <div className="flex justify-between">
        {steps.map((step, i) => (
          <div key={step.key} className="flex flex-col items-center gap-1" style={{ opacity: i <= currentIdx ? 1 : 0.4 }}>
            <span className="text-base">{step.icon}</span>
            <span className="text-xs font-medium" style={{ color: 'var(--green-deep)' }}>{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
