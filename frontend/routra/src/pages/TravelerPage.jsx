import { useState } from 'react';
import { locations } from '../data/mockData';
import LocationCard from '../components/cards/LocationCard';
import { useApp } from '../context/AppContext';
import ProgressStatus from '../components/booking/ProgressStatus';
import { MapPin } from 'lucide-react';

export default function TravelerPage() {
  const { bookings } = useApp();
  const guideBookings = bookings.filter(b => b.bookingType === 'guide');

  return (
    <div className="min-h-screen bg-stone-50 pb-24">
      <div className="sticky top-0 bg-white border-b border-stone-100 z-10 px-4 py-4">
        <h1 className="font-bold text-xl text-stone-800">Explore Cambodian Villages</h1>
        <p className="text-xs text-stone-500 mt-0.5">Discover authentic experiences with local communities</p>
      </div>

      <div className="px-4 py-5">
        {guideBookings.length > 0 && (
          <div className="mb-6">
            <h2 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
              <span>📍 Your Bookings</span>
            </h2>
            <div className="space-y-2">
              {guideBookings.map((booking) => (
                <ProgressStatus
                  key={booking.id}
                  status={booking.status}
                  guideName={booking.guideName}
                  location={booking.locationName}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-green-700" />
            <h2 className="font-bold text-stone-800">Popular Destinations</h2>
          </div>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </div>
    </div>
  );
}
