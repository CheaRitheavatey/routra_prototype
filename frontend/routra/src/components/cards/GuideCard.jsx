import { Star, Globe } from 'lucide-react';

export default function GuideCard({ guide, onBook }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 active:scale-[0.98] transition-transform duration-150">
      <div className="flex gap-3">
        <img
          src={guide.image}
          alt={guide.name}
          className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="font-bold text-stone-800 text-base">{guide.name}</h4>
              <p className="text-stone-500 text-xs mt-0.5">{guide.speciality}</p>
            </div>
            <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-1 rounded-lg flex-shrink-0">
              <Star size={12} className="text-amber-500 fill-amber-500" />
              <span className="text-amber-700 text-xs font-bold">{guide.rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <Globe size={11} className="text-stone-400" />
            <span className="text-stone-400 text-xs">{guide.languages.join(' · ')}</span>
          </div>
        </div>
      </div>
      <p className="text-stone-500 text-sm mt-3 leading-relaxed line-clamp-2">{guide.bio}</p>
      <div className="flex items-center justify-between mt-3">
        <div>
          <span className="text-green-700 font-bold text-base">${guide.price}</span>
          <span className="text-stone-400 text-xs"> / day</span>
          <span className="text-stone-400 text-xs ml-2">({guide.reviews} reviews)</span>
        </div>
        <button
          onClick={() => onBook(guide)}
          className="bg-[#447c89] hover:bg-[#3a6b76] active:bg-[#33636d] text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors duration-150"
        >
          Book Guide
        </button>
      </div>
    </div>
  );
}
