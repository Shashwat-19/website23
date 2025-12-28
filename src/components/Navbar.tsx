import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Home, List } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-full px-8 py-3 pointer-events-auto border border-white/50 flex items-center gap-8">
        <NavItem to="/" icon={<Home size={20} />} label="Home" />
        <NavItem to="/reasons" icon={<Heart size={20} />} label="Reasons" />
        <NavItem to="/bucket-list" icon={<List size={20} />} label="Bucket List" />
      </div>
    </motion.nav>
  );
};

const NavItem = ({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 text-sm font-bold transition-colors duration-300 ${
        isActive ? 'text-kawaii-pink' : 'text-gray-400 hover:text-kawaii-text'
      }`
    }
  >
    {({ isActive }) => (
      <>
        <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
            {icon}
        </div>
        <span className="hidden md:inline">{label}</span>
      </>
    )}
  </NavLink>
);

export default Navbar;
