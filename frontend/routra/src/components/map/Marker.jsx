import { useState } from 'react';
import { markerIcons } from '../../data/mockData';

export default function Marker({ marker }) {
  const [open, setOpen] = useState(false);
  const icon = markerIcons[marker.type];

  return (
    <div
      className="absolute"
      style={{ left: `${marker.x}%`, top: `${marker.y}%`, transform: 'translate(-50%, -50%)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="relative flex items-center justify-center w-9 h-9 rounded-full shadow-lg border-2 border-white active:scale-95 transition-transform duration-100"
        style={{ backgroundColor: icon.color }}
        aria-label={marker.name}
      >
        <span className="text-base">{icon.emoji}</span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-white"
          style={{ backgroundColor: icon.color, boxShadow: '0 0 0 1px white' }}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div
            className="absolute z-20 bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-3 min-w-[180px] max-w-[220px] border border-stone-100"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">{icon.emoji}</span>
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{icon.label}</span>
            </div>
            <p className="font-bold text-stone-800 text-sm">{marker.name}</p>
            <p className="text-stone-500 text-xs mt-0.5 leading-snug">{marker.description}</p>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderTop: '6px solid white' }}
            />
          </div>
        </>
      )}
    </div>
  );
}
