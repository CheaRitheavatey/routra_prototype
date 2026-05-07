import Marker from './Marker';
import { markerIcons } from '../../data/mockData';

export default function MapView({ location }) {
  const mapImage = location.image
    ? location.image.startsWith('http')
      ? location.image
      : `/${location.image.replace(/^\//, '')}`
    : '/map1.png';

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-md" style={{ aspectRatio: '4/3' }}>
      <img
        src={mapImage}
        alt={`Map of ${location.name}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-green-900/10" />

      {location.markers.map((marker) => (
        <Marker key={marker.id} marker={marker} />
      ))}

      <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl p-2.5 shadow-sm">
        <p className="text-xs font-semibold text-stone-600 mb-1.5">Legend</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {Object.entries(markerIcons).map(([key, { emoji, label }]) => (
            <div key={key} className="flex items-center gap-1">
              <span className="text-xs">{emoji}</span>
              <span className="text-xs text-stone-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
