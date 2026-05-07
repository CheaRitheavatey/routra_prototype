import { homestays, locations } from '../data/mockData';
import HomestayCard from '../components/cards/HomestayCard';

export default function HomestaysPage() {
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
                <HomestayCard key={homestay.id} homestay={homestay} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}