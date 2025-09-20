import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center group-hover:bg-primary-dark transition-all duration-300">
              <Icon icon="mdi:shopping" className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-text-primary">MarketApp</span>
              <p className="text-xs text-text-secondary -mt-1">Taze Ürünler</p>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Ürün, kategori veya marka ara..."
                className="w-full px-6 py-3 pl-12 pr-4 text-text-primary bg-grey-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Icon icon="mdi:magnify" className="h-6 w-6 text-grey-400" />
              </div>
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <div className="bg-primary hover:bg-primary-dark text-white p-2 rounded-xl transition-all duration-300">
                  <Icon icon="mdi:magnify" className="h-5 w-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Navigation with Icons */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className="flex items-center space-x-2 px-4 py-2 rounded-2xl text-text-primary hover:bg-grey-50 hover:text-primary transition-all duration-300 group"
            >
              <Icon icon="mdi:home" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Ana Sayfa</span>
            </Link>
            
            <Link 
              to="/cart" 
              className="flex items-center space-x-2 px-4 py-2 rounded-2xl text-text-primary hover:bg-grey-50 hover:text-primary transition-all duration-300 group relative"
            >
              <Icon icon="mdi:cart" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Sepet</span>
              <div className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-xs">
                3
              </div>
            </Link>
            
            <Link 
              to="/profile" 
              className="flex items-center space-x-2 px-4 py-2 rounded-2xl text-text-primary hover:bg-grey-50 hover:text-primary transition-all duration-300 group"
            >
              <Icon icon="mdi:account" className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Profil</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-primary focus:outline-none focus:text-primary"
            >
              <Icon 
                icon={isMenuOpen ? "mdi:close" : "mdi:menu"} 
                className="h-6 w-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-6 pb-8 space-y-4 bg-grey-50 rounded-2xl shadow-xl mx-2 mt-2">
              {/* Mobile Search */}
              <div className="mb-6 px-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ürün ara..."
                    className="w-full px-6 py-4 pl-14 pr-4 text-lg text-text-primary bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 shadow"
                  />
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Icon icon="mdi:magnify" className="h-7 w-7 text-grey-400" />
                  </div>
                </div>
              </div>
              
              <Link
                to="/"
                className="flex items-center space-x-4 px-6 py-5 text-text-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-2xl text-xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon="mdi:home" className="w-8 h-8" />
                <span className="font-semibold text-lg md:text-xl">Ana Sayfa</span>
              </Link>
              
              <Link
                to="/cart"
                className="flex items-center space-x-4 px-6 py-5 text-text-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-2xl text-xl font-semibold relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon="mdi:cart" className="w-8 h-8" />
                <span className="font-semibold text-lg md:text-xl">Sepet</span>
                <div className="ml-auto bg-primary text-white text-sm rounded-full w-7 h-7 flex items-center justify-center font-bold shadow">
                  3
                </div>
              </Link>
              
              <Link
                to="/profile"
                className="flex items-center space-x-4 px-6 py-5 text-text-primary hover:bg-white hover:text-primary transition-all duration-300 rounded-2xl text-xl font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon icon="mdi:account" className="w-8 h-8" />
                <span className="font-semibold text-lg md:text-xl">Profil</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;