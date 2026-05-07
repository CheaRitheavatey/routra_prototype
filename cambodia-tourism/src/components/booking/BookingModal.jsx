import { useState } from 'react';
import { X, Calendar, Users, Clock, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function BookingModal({ item, type, locationName, onClose }) {
  const { addBooking } = useApp();
  const [form, setForm] = useState({
    date: '',
    time: '09:00',
    people: 1,
    notes: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 900));
    addBooking({
      type,
      itemId: item.id,
      itemName: item.name,
      locationName,
      price: item.price,
      ...form,
    });
    setSubmitting(false);
    onClose();
  };

  const isHomestay = type === 'homestay';
  const canSubmit = isHomestay
    ? form.checkIn && form.checkOut
    : form.date;

  return (
    <div className="fixed inset-0 z-50 flex items-end" style={{ background: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
      <div
        className="w-full animate-slide-up rounded-t-3xl p-5 pb-8"
        style={{ background: 'var(--beige)', maxHeight: '85vh', overflowY: 'auto', maxWidth: 420, margin: '0 auto' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              {isHomestay ? 'Book Homestay' : type === 'guide' ? 'Request Guide' : 'Book Activity'}
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-light)' }}>{item.name}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full" style={{ background: 'var(--beige-dark)' }}>
            <X size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {isHomestay ? (
            <>
              <Field icon={<Calendar size={16} />} label="Check-in Date">
                <input type="date" className="w-full text-sm outline-none bg-transparent" value={form.checkIn} onChange={e => setForm(p => ({ ...p, checkIn: e.target.value }))} />
              </Field>
              <Field icon={<Calendar size={16} />} label="Check-out Date">
                <input type="date" className="w-full text-sm outline-none bg-transparent" value={form.checkOut} onChange={e => setForm(p => ({ ...p, checkOut: e.target.value }))} />
              </Field>
              <Field icon={<Users size={16} />} label="Guests">
                <div className="flex items-center gap-3">
                  <button onClick={() => setForm(p => ({ ...p, guests: Math.max(1, p.guests - 1) }))} className="w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--beige-dark)' }}>−</button>
                  <span className="font-semibold w-4 text-center">{form.guests}</span>
                  <button onClick={() => setForm(p => ({ ...p, guests: Math.min(item.capacity || 6, p.guests + 1) }))} className="w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--green-pale)', color: 'var(--green-deep)' }}>+</button>
                </div>
              </Field>
            </>
          ) : (
            <>
              <Field icon={<Calendar size={16} />} label="Date">
                <input type="date" className="w-full text-sm outline-none bg-transparent" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} />
              </Field>
              <Field icon={<Clock size={16} />} label="Time">
                <input type="time" className="w-full text-sm outline-none bg-transparent" value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} />
              </Field>
              <Field icon={<Users size={16} />} label="People">
                <div className="flex items-center gap-3">
                  <button onClick={() => setForm(p => ({ ...p, people: Math.max(1, p.people - 1) }))} className="w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--beige-dark)' }}>−</button>
                  <span className="font-semibold w-4 text-center">{form.people}</span>
                  <button onClick={() => setForm(p => ({ ...p, people: p.people + 1 }))} className="w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold" style={{ background: 'var(--green-pale)', color: 'var(--green-deep)' }}>+</button>
                </div>
              </Field>
              <Field icon={<FileText size={16} />} label="Notes (optional)">
                <textarea
                  className="w-full text-sm outline-none bg-transparent resize-none"
                  rows={2}
                  placeholder="Any special requests?"
                  value={form.notes}
                  onChange={e => setForm(p => ({ ...p, notes: e.target.value }))}
                />
              </Field>
            </>
          )}
        </div>

        {/* Price summary */}
        {!isHomestay && (
          <div className="mt-4 p-3 rounded-xl flex justify-between items-center" style={{ background: 'var(--green-pale)' }}>
            <span className="text-sm" style={{ color: 'var(--green-deep)' }}>Estimated total</span>
            <span className="font-bold" style={{ color: 'var(--green-deep)' }}>${(item.price * form.people).toFixed(0)}</span>
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={!canSubmit || submitting}
          className="w-full mt-4 py-3.5 rounded-2xl font-semibold text-sm transition-all active:scale-95 disabled:opacity-50"
          style={{ background: 'var(--green-deep)', color: 'white' }}
        >
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending…
            </span>
          ) : type === 'guide' ? 'Send Request' : 'Confirm Booking'}
        </button>
      </div>
    </div>
  );
}

function Field({ icon, label, children }) {
  return (
    <div className="p-3 rounded-xl" style={{ background: 'white' }}>
      <div className="flex items-center gap-2 mb-1.5" style={{ color: 'var(--text-light)' }}>
        {icon}
        <span className="text-xs font-medium uppercase tracking-wide">{label}</span>
      </div>
      {children}
    </div>
  );
}
