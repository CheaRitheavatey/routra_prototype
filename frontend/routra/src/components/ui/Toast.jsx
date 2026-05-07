import { Toaster } from 'react-hot-toast';

export default function Toast() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#1c1917',
          color: '#fafaf9',
          borderRadius: '12px',
          fontSize: '14px',
          maxWidth: '340px',
        },
        success: {
          iconTheme: { primary: '#4ade80', secondary: '#1c1917' },
        },
        error: {
          iconTheme: { primary: '#f87171', secondary: '#1c1917' },
        },
      }}
    />
  );
}
