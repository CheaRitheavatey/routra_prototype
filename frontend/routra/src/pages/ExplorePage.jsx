import { useState } from 'react';
import { locations, activities, guides, homestays } from '../data/mockData';
import ActivityCard from '../components/cards/ActivityCard';
import GuideCard from '../components/cards/GuideCard';
import HomestayCard from '../components/cards/HomestayCard';
import BookingModal from '../components/booking/BookingModal';
import { useApp } from '../context/AppContext';
import toast from 'react-hot-toast';

export default function ExplorePage() {
  const [tab, setTab] = useState('activities');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { addBooking } = useApp();

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  const handleActivityBook = (activity) => {
    // Find the locationId for this activity
    const locationId = Object.keys(activities).find(key =>
      activities[key].some(a => a.id === activity.id)
    );
    setSelectedItem({ ...activity, type: 'activity', locationId });
    setIsModalOpen(true);
  };

  const handleGuideBook = (guide) => {
    // Find the locationId for this guide
    const locationId = Object.keys(guides).find(key =>
      guides[key].some(g => g.id === guide.id)
    );
    setSelectedItem({ ...guide, type: 'guide', locationId });
    setIsModalOpen(true);
  };

  const handleHomestayBook = (homestay) => {
    setSelectedItem({ ...homestay, type: 'homestay' });
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (formData) => {
    const location = locations.find(l => l.id === selectedItem.locationId);

    if (selectedItem.type === 'activity') {
      addBooking({
        bookingType: 'activity',
        activityName: selectedItem.name,
        locationName: location?.name || 'Unknown Location',
        ...formData
      });
    } else if (selectedItem.type === 'guide') {
      addBooking({
        bookingType: 'guide',
        guideName: selectedItem.name,
        locationName: location?.name || 'Unknown Location',
        ...formData
      });
    } else if (selectedItem.type === 'homestay') {
      addBooking({
        bookingType: 'homestay',
        homestayName: selectedItem.name,
        ...formData
      });
    }
    setIsModalOpen(false);
    setSelectedItem(null);
    toast.success('Booking request sent!');
  };

  const renderContent = () => {
    if (tab === 'activities') {
      return (
        <div className="space-y-6">
          {Object.entries(activities).map(([locationId, locationActivities]) => {
            const location = locations.find(l => l.id === locationId);
            if (!location) return null;

            return (
              <div key={locationId} className="space-y-4">
                <div className="flex items-center gap-3 px-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <h2 className="font-bold text-lg text-stone-800">{location.name}</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 px-4">
                  {locationActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onBook={() => handleActivityBook(activity)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (tab === 'guides') {
      return (
        <div className="space-y-6">
          {Object.entries(guides).map(([locationId, locationGuides]) => {
            const location = locations.find(l => l.id === locationId);
            if (!location) return null;

            return (
              <div key={locationId} className="space-y-4">
                <div className="flex items-center gap-3 px-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <h2 className="font-bold text-lg text-stone-800">{location.name}</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 px-4">
                  {locationGuides.map((guide) => (
                    <GuideCard
                      key={guide.id}
                      guide={guide}
                      onBook={() => handleGuideBook(guide)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (tab === 'homestays') {
      return (
        <div className="space-y-6">
          {locations.map((location) => {
            const locationHomestays = homestays.filter(h => h.locationId === location.id);
            if (locationHomestays.length === 0) return null;

            return (
              <div key={location.id} className="space-y-4">
                <div className="flex items-center gap-3 px-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: location.color }}
                  />
                  <h2 className="font-bold text-lg text-stone-800">{location.name}</h2>
                </div>
                <div className="grid grid-cols-1 gap-4 px-4">
                  {locationHomestays.map((homestay) => (
                    <HomestayCard
                      key={homestay.id}
                      homestay={homestay}
                      onBook={() => handleHomestayBook(homestay)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <div className="sticky top-0 bg-white border-b border-stone-100 z-10">
        <div className="px-4 py-4">
          <h1 className="font-bold text-xl text-stone-800 mb-4">Explore</h1>
          <div className="flex gap-2">
            {['activities', 'guides', 'homestays'].map((tabName) => (
              <button
                key={tabName}
                onClick={() => handleTabChange(tabName)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  tab === tabName
                    ? 'bg-[#447c89]/15 text-[#447c89]'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="py-4">
        {renderContent()}
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedItem}
        onSubmit={handleBookingSubmit}
      />
    </div>
  );
}
