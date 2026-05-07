import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('bookings');
    return saved ? JSON.parse(saved).map(booking => ({
      ...booking,
      createdAt: new Date(booking.createdAt)
    })) : [];
  });
  const [chatMessages, setChatMessages] = useState(() => {
    const saved = localStorage.getItem('chatMessages');
    return saved ? JSON.parse(saved).map(msg => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    })) : [];
  });

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = useCallback((booking) => {
    const newBooking = {
      ...booking,
      id: `booking-${Date.now()}`,
      status: 'pending',
      createdAt: new Date(),
    };

    setBookings((prev) => [...prev, newBooking]);

    const chatMsg = {
      id: `msg-${Date.now()}`,
      type: 'booking',
      bookingId: newBooking.id,
      bookingType: booking.bookingType,
      text: formatBookingMessage(booking),
      timestamp: new Date(),
      status: 'pending',
    };

    setChatMessages((prev) => [...prev, chatMsg]);

    return newBooking.id;
  }, []);

  const updateBookingStatus = useCallback((bookingId, status) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === bookingId ? { ...b, status } : b))
    );
    setChatMessages((prev) =>
      prev.map((m) =>
        m.bookingId === bookingId ? { ...m, status } : m
      )
    );
  }, []);

  const sendChatMessage = useCallback((text) => {
    setChatMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        type: 'user',
        text,
        timestamp: new Date(),
      },
    ]);
  }, []);

  return (
    <AppContext.Provider value={{ bookings, chatMessages, addBooking, updateBookingStatus, sendChatMessage }}>
      {children}
    </AppContext.Provider>
  );
}

function formatBookingMessage(booking) {
  if (booking.bookingType === 'guide') {
    return `New Guide Booking Request\n📍 ${booking.locationName}\n🧑‍🏫 Guide: ${booking.guideName}\n📅 Date: ${booking.date}\n👥 People: ${booking.people}${booking.notes ? `\n📝 ${booking.notes}` : ''}`;
  }
  if (booking.bookingType === 'activity') {
    return `New Activity Booking Request\n📍 ${booking.locationName}\n🎯 Activity: ${booking.activityName}\n📅 Date: ${booking.date} at ${booking.time}\n👥 People: ${booking.people}${booking.notes ? `\n📝 ${booking.notes}` : ''}`;
  }
  if (booking.bookingType === 'homestay') {
    return `New Homestay Booking Request\n🏡 ${booking.homestayName}\n📅 Check-in: ${booking.checkIn}\n📅 Check-out: ${booking.checkOut}\n👥 Guests: ${booking.guests}`;
  }
  return 'New Booking Request';
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
