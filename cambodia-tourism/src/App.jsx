import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import ToastContainer from './components/ui/ToastContainer';
import Home from './pages/Home';
import Traveler from './pages/Traveler';
import MapPage from './pages/MapPage';
import LocalChat from './pages/LocalChat';

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="app-container">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traveler" element={<Traveler />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/local-chat" element={<LocalChat />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
