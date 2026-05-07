import { Clock, DollarSign } from 'lucide-react';

export default function ActivityCard({ activity, onBook }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 active:scale-[0.98] transition-transform duration-150">
      <div className="h-36 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h4 className="font-bold text-stone-800 text-base">{activity.name}</h4>
        <p className="text-stone-500 text-sm mt-1 leading-relaxed line-clamp-2">{activity.description}</p>
        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1 text-stone-500 text-xs">
            <Clock size={13} />
            <span>{activity.duration}</span>
          </div>
          <div className="flex items-center gap-1 text-green-700 text-sm font-bold">
            <span>${activity.price}</span>
            <span className="text-stone-400 font-normal text-xs">/ person</span>
          </div>
        </div>
        <button
          onClick={() => onBook(activity)}
          className="mt-3 w-full bg-[#c3a85b] hover:bg-[#b39951] active:bg-[#a38a47] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors duration-150"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
