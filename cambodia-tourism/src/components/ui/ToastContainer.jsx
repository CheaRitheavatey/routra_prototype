import { useApp } from '../../context/AppContext';

export default function ToastContainer() {
  const { toasts } = useApp();
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col gap-2 pointer-events-none" style={{ maxWidth: 360 }}>
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="animate-bounce-in px-4 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-2"
          style={{
            background: toast.type === 'success' ? '#2d5a27' : toast.type === 'info' ? '#4a7c42' : '#c0392b',
            color: 'white',
            minWidth: 240,
          }}
        >
          <span>{toast.type === 'success' ? '✓' : toast.type === 'info' ? '⏳' : '!'}</span>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
