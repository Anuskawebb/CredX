import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';
import { BarChart3, Vault, DollarSign, CreditCard, History } from 'lucide-react';

const GlassNavbar: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/borrow', label: 'Borrow', icon: Vault },
    { path: '/repay', label: 'Repay', icon: DollarSign },
    { path: '/card', label: 'Card', icon: CreditCard },
    { path: '/history', label: 'History', icon: History },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-white"
            >
              CredX
            </motion.div>
          </Link>

          {!isLanding && (
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link key={path} to={path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      location.pathname === path
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="flex items-center">
            <div className="[&>div]:rounded-lg [&>div]:backdrop-blur-md [&>div]:border-blue-500/30 [&>div]:bg-blue-500/20 [&>div]:hover:bg-blue-500/30 [&>div]:transition-all [&>div]:duration-300 [&>div]:hover:shadow-lg [&>div]:hover:shadow-blue-500/25">
              <ConnectButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GlassNavbar;