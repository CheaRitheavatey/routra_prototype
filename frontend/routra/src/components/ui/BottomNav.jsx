import { NavLink } from 'react-router-dom';
import { Map, Compass, User } from 'lucide-react';

export default function BottomNav() {
  const navItems = [
    { to: '/map', icon: Map, label: 'Map' },
    { to: '/explore', icon: Compass, label: 'Explore' },
    { to: '/local', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-stone-200 z-40 pb-safe">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-6 py-1.5 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#447c89]'
                  : 'text-stone-400 hover:text-stone-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-1.5 rounded-xl transition-all duration-200 ${isActive ? 'bg-[#447c89]/10' : ''}`}>
                  <Icon size={22} strokeWidth={isActive ? 2.2 : 1.8} />
                </div>
                <span className="text-[11px] font-medium">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
