import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Users, FileText } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, onSubmit, title, bookingType, children }) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    date: today,
    time: '09:00',
    people: 2,
    checkIn: today,
    checkOut: '',
    guests: 2,
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setForm(prev => ({
        ...prev,
        date: today,
        checkIn: today,
        checkOut: tomorrow.toISOString().split('T')[0],
      }));
    }
  }, [isOpen, today]);

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    onSubmit(form);
    setSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  const isHomestay = bookingType === 'homestay';

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[430px] bg-white rounded-t-3xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white rounded-t-3xl px-5 pt-5 pb-4 border-b border-stone-100 z-10">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-stone-800 text-lg">Book Now</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-stone-100 text-stone-500 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          {children && <div className="mt-2">{children}</div>}
        </div>

        <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
          {isHomestay ? (
            <>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                  <Calendar size={15} className="text-green-700" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={form.checkIn}
                  onChange={e => set('checkIn', e.target.value)}
                  required
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                  <Calendar size={15} className="text-green-700" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  min={form.checkIn}
                  value={form.checkOut}
                  onChange={e => set('checkOut', e.target.value)}
                  required
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                  <Users size={15} className="text-green-700" />
                  Number of Guests
                </label>
                <select
                  value={form.guests}
                  onChange={e => set('guests', Number(e.target.value))}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 bg-white"
                >
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                  <Calendar size={15} className="text-green-700" />
                  Date
                </label>
                <input
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={e => set('date', e.target.value)}
                  required
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500"
                />
              </div>
              {bookingType !== 'guide' && (
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                    <Clock size={15} className="text-[#447c89]" />
                    Preferred Time
                  </label>
                  <select
                    value={form.time}
                    onChange={e => set('time', e.target.value)}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#447c89]/30 focus:border-[#447c89] bg-white"
                  >
                    {['07:00','08:00','09:00','10:00','13:00','14:00','15:00','16:00'].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              )}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
                  <Users size={15} className="text-green-700" />
                  Number of People
                </label>
                <select
                  value={form.people}
                  onChange={e => set('people', Number(e.target.value))}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 bg-white"
                >
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>)}
                </select>
              </div>
            </>
          )}

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-stone-700 mb-2">
              <FileText size={15} className="text-[#447c89]" />
              Notes (optional)
            </label>
            <textarea
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
              placeholder="Any special requests or questions..."
              rows={3}
              className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#447c89]/30 focus:border-[#447c89] resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-[#447c89] hover:bg-[#3a6b76] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all duration-150 flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                Sending Request...
              </>
            ) : (
              'Confirm Booking Request'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
