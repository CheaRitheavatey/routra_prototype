import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center px-6"
      style={{
        background: 'linear-gradient(160deg, #2d5a27 0%, #4a7c42 60%, #7ab573 100%)',
      }}
    >
      {/* Logo */}
      <div className="text-center mb-12 animate-slide-up">
        <div className="text-6xl mb-4">🇰🇭</div>
        <h1
          className="text-4xl font-bold text-white mb-2"
          style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}
        >
          Srok Khmer
        </h1>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Connecting travelers with rural Cambodia
        </p>
      </div>

      {/* Role Cards */}
      <div className="w-full max-w-sm flex flex-col gap-4">
        <button
          onClick={() => navigate('/traveler')}
          className="w-full p-5 rounded-2xl text-left transition-all active:scale-95 animate-slide-up stagger-1"
          style={{ background: 'white', boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
        >
          <div className="text-3xl mb-2">🌏</div>
          <h2 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif', color: 'var(--text-dark)' }}>
            I'm a Traveler
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-light)' }}>
            Discover communities, book guides, activities & homestays
          </p>
        </button>

        <button
          onClick={() => navigate('/local-chat')}
          className="w-full p-5 rounded-2xl text-left transition-all active:scale-95 animate-slide-up stagger-2"
          style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <div className="text-3xl mb-2">🏡</div>
          <h2 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display, serif', color: 'white' }}>
            I'm a Local Host
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            View booking requests and manage your guests
          </p>
        </button>
      </div>

      <p className="text-xs mt-8 animate-slide-up stagger-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
        A prototype connecting communities · Made with ❤️
      </p>
    </div>
  );
}
