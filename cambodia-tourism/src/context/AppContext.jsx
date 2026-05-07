import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [bookings, setBookings] = useState([]);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 'welcome',
      type: 'system',
      text: 'Welcome! New booking requests will appear here.',
      timestamp: new Date(),
    }
  ]);
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const addBooking = useCallback((booking) => {
    const newBooking = {
      ...booking,
      id: `booking-${Date.now()}`,
      status: booking.type === 'guide' ? 'pending' : 'confirmed',
      createdAt: new Date(),
    };
    setBookings(prev => [...prev, newBooking]);

    // Send chat message to Local
    const chatMsg = {
      id: `msg-${Date.now()}`,
      type: 'booking',
      bookingId: newBooking.id,
      bookingType: newBooking.type,
      travelerName: 'Traveler',
      details: newBooking,
      timestamp: new Date(),
      responded: false,
    };
    setChatMessages(prev => [...prev, chatMsg]);

    if (newBooking.type === 'guide') {
      addToast('Guide request sent! Waiting for confirmation…', 'info');
    } else {
      addToast('Booking confirmed! 🎉', 'success');
    }

    return newBooking.id;
  }, [addToast]);

  const updateBookingStatus = useCallback((bookingId, status) => {
    setBookings(prev =>
      prev.map(b => b.id === bookingId ? { ...b, status } : b)
    );
    setChatMessages(prev =>
      prev.map(m => m.bookingId === bookingId ? { ...m, responded: true, response: status } : m)
    );
  }, []);

  return (
    <AppContext.Provider value={{
      bookings,
      chatMessages,
      toasts,
      addBooking,
      updateBookingStatus,
      addToast,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
