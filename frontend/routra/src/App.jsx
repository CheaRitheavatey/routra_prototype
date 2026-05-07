import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import BottomNav from './components/ui/BottomNav';
import Toast from './components/ui/Toast';
import TravelerPage from './pages/TravelerPage';
import MapPage from './pages/MapPage';
import ExplorePage from './pages/ExplorePage';
import ProfilePage from './pages/ProfilePage';
import LocalChatPage from './pages/LocalChatPage';

function AppLayout() {
  return (
    <div className="flex flex-col w-full max-w-[430px] min-h-screen bg-stone-50 mx-auto shadow-xl">
      <Routes>
        <Route path="/" element={<TravelerPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/map/:locationId" element={<MapPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/chat" element={<LocalChatPage />} />
        <Route path="/local" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
