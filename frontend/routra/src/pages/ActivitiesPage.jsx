import { Link } from 'react-router-dom';
import { activities, locations } from '../data/mockData';
import ActivityCard from '../components/cards/ActivityCard';

export default function ActivitiesPage() {
  const allActivities = Object.values(activities).flat();

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
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}