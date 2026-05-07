import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { locations, activities, guides, homestays } from '../data/mockData';
import LocationCard from '../components/cards/LocationCard';
import ActivityCard from '../components/cards/ActivityCard';
import GuideCard from '../components/cards/GuideCard';
import HomestayCard from '../components/cards/HomestayCard';
import BookingModal from '../components/booking/BookingModal';

const TABS = ['Activities', 'Guides', 'Homestays'];

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState('Activities');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bookingItem, setBookingItem] = useState(null);

  const handleBook = (item, type) => setBookingItem({ item, type });

  return (
    <div className="flex flex-col pb-24" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <div className="px-4 pt-12 pb-3">
        <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Explore</h1>
        <p className="text-sm" style={{ color: 'var(--text-light)' }}>Discover authentic Cambodian experiences</p>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-1 p-1 rounded-xl" style={{ background: 'var(--beige-dark)' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => { setActiveTab(tab); setSelectedLocation(null); }}
              className="flex-1 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: activeTab === tab ? 'white' : 'transparent',
                color: activeTab === tab ? 'var(--green-deep)' : 'var(--text-light)',
                boxShadow: activeTab === tab ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 flex-1">
        {activeTab === 'Homestays' ? (
          <HomestaysList onBook={(item) => handleBook(item, 'homestay')} />
        ) : selectedLocation ? (
          <LocationDetail
            location={selectedLocation}
            tab={activeTab}
            onBack={() => setSelectedLocation(null)}
            onBook={handleBook}
          />
        ) : (
          <LocationGrid onSelect={setSelectedLocation} />
        )}
      </div>

      {/* Booking Modal */}
      {bookingItem && (
        <BookingModal
          item={bookingItem.item}
          type={bookingItem.type}
          locationName={bookingItem.item.location || selectedLocation?.name || ''}
          onClose={() => setBookingItem(null)}
        />
      )}
    </div>
  );
}

function LocationGrid({ onSelect }) {
  return (
    <div className="flex flex-col gap-4">
      {locations.map((loc, i) => (
        <div key={loc.id} className={`stagger-${Math.min(i + 1, 5)}`}>
          <LocationCard
            location={loc}
            onViewMap={onSelect}
          />
          <button
            onClick={() => onSelect(loc)}
            className="w-full mt-2 py-2 rounded-xl text-sm font-medium transition-all active:scale-95"
            style={{ background: 'var(--green-pale)', color: 'var(--green-deep)' }}
          >
            View Experiences →
          </button>
        </div>
      ))}
    </div>
  );
}

function LocationDetail({ location, tab, onBack, onBook }) {
  const items = tab === 'Activities'
    ? (activities[location.id] || [])
    : (guides[location.id] || []);

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1 mb-4 text-sm font-medium"
        style={{ color: 'var(--green-deep)' }}
      >
        <ChevronLeft size={18} /> Back to locations
      </button>

      <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl" style={{ background: 'white' }}>
        <img src={location.image} alt={location.name} className="w-14 h-14 rounded-xl object-cover" />
        <div>
          <h3 className="font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{location.name}</h3>
          <p className="text-xs" style={{ color: 'var(--text-light)' }}>{location.region}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {items.length === 0 ? (
          <p className="text-center py-8 text-sm" style={{ color: 'var(--text-light)' }}>No {tab.toLowerCase()} available here yet.</p>
        ) : tab === 'Activities' ? (
          items.map((item, i) => (
            <div key={item.id} className={`stagger-${Math.min(i + 1, 5)}`}>
              <ActivityCard activity={item} onBook={(a) => onBook(a, 'activity')} />
            </div>
          ))
        ) : (
          items.map((item, i) => (
            <div key={item.id} className={`stagger-${Math.min(i + 1, 5)}`}>
              <GuideCard guide={item} locationName={location.name} onBook={(g) => onBook(g, 'guide')} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function HomestaysList({ onBook }) {
  return (
    <div className="flex flex-col gap-4">
      {homestays.map((h, i) => (
        <div key={h.id} className={`stagger-${Math.min(i + 1, 5)}`}>
          <HomestayCard homestay={h} onBook={onBook} />
        </div>
      ))}
    </div>
  );
}
