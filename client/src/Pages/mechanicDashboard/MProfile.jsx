import React, { useState } from 'react';
import { Bell, Settings, User, Briefcase, PlusCircle, CheckSquare, Menu, X } from 'lucide-react';

const AutoCareProfile = ({ size = 'default' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Size-specific classes
  const sizeClasses = {
    sm: {
      sidebar: 'w-48',
      logo: 'w-16 h-16',
      navIcon: 'w-4 h-4',
      navText: 'text-sm',
      navPadding: 'p-2',
      header: 'h-32',
      headerText: 'text-xl',
      profilePic: 'w-24 h-24',
      profileIcon: 'w-12 h-12',
      inputPadding: 'p-1.5',
      fontSize: 'text-sm',
      labelSize: 'text-xs',
      buttonPadding: 'px-4 py-1.5',
      spacing: 'gap-4',
      sectionPadding: 'p-4'
    },
    default: {
      sidebar: 'w-64',
      logo: 'w-24 h-24',
      navIcon: 'w-6 h-6',
      navText: 'text-base',
      navPadding: 'p-3',
      header: 'h-48',
      headerText: 'text-2xl',
      profilePic: 'w-32 h-32',
      profileIcon: 'w-16 h-16',
      inputPadding: 'p-2',
      fontSize: 'text-base',
      labelSize: 'text-sm',
      buttonPadding: 'px-6 py-2',
      spacing: 'gap-6',
      sectionPadding: 'p-6'
    }
  };

  const s = sizeClasses[size];

  const Sidebar = ({ className = '' }) => (
    <div className={`bg-blue-900 text-white p-4 ${className}`}>
      {/* Logo */}
      <div className="mb-6">
        <img 
          src="/api/placeholder/120/120" 
          alt="AutoCare Logo" 
          className={`mx-auto rounded-full bg-white p-2 ${s.logo}`}
        />
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-3">
        <button className={`flex items-center w-full ${s.navPadding} rounded-lg bg-blue-800/40 hover:bg-blue-800/60 transition-colors ${s.fontSize}`}>
          <Briefcase className={`${s.navIcon} mr-3`} />
          <span>Work</span>
        </button>

        <button className={`flex items-center w-full ${s.navPadding} rounded-lg hover:bg-blue-800/40 transition-colors ${s.fontSize}`}>
          <PlusCircle className={`${s.navIcon} mr-3`} />
          <span>Add work</span>
        </button>

        <button className={`flex items-center w-full ${s.navPadding} rounded-lg hover:bg-blue-800/40 transition-colors ${s.fontSize}`}>
          <CheckSquare className={`${s.navIcon} mr-3`} />
          <span>Assign work</span>
        </button>

        <button className={`flex items-center w-full ${s.navPadding} rounded-lg hover:bg-blue-800/40 transition-colors ${s.fontSize}`}>
          <Bell className={`${s.navIcon} mr-3`} />
          <span>Notification</span>
        </button>

        <button className={`flex items-center w-full ${s.navPadding} rounded-lg hover:bg-blue-800/40 transition-colors ${s.fontSize}`}>
          <Settings className={`${s.navIcon} mr-3`} />
          <span>Setting</span>
        </button>

        <button className={`flex items-center w-full ${s.navPadding} rounded-lg hover:bg-blue-800/40 transition-colors ${s.fontSize}`}>
          <User className={`${s.navIcon} mr-3`} />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className={`hidden md:block ${s.sidebar}`}>
        <Sidebar />
      </div>

      {/* Mobile Menu Button and Overlay */}
      <div className="md:hidden">
        {/* Hamburger Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-900 text-white"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Sidebar */}
            <div className="fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out">
              <Sidebar />
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className={`bg-gradient-to-r from-blue-400 to-blue-600 ${s.header}`}>
          <h1 className={`${s.headerText} font-bold text-white ${s.sectionPadding} md:ml-0 ml-16`}>Profile</h1>
        </header>

        {/* Profile Content */}
        <div className="max-w-4xl mx-auto -mt-24 px-4">
          <div className={`bg-white rounded-lg shadow-lg ${s.sectionPadding}`}>
            {/* Profile Picture */}
            <div className="flex justify-center mb-6">
              <div className={`${s.profilePic} bg-gray-200 rounded-full flex items-center justify-center`}>
                <User className={`${s.profileIcon} text-gray-400`} />
              </div>
            </div>

            {/* Form */}
            <form className={`grid grid-cols-1 md:grid-cols-2 ${s.spacing}`}>
              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>FULL NAME</label>
                <input
                  type="text"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>VEHICLE MODEL & YEAR</label>
                <input
                  type="text"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>PHONE NUMBER</label>
                <input
                  type="tel"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>LICENSE PLATE NUMBER</label>
                <input
                  type="text"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>EMAIL</label>
                <input
                  type="email"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="space-y-2">
                <label className={`block font-bold text-gray-700 ${s.labelSize}`}>ADDRESS</label>
                <input
                  type="text"
                  className={`w-full border rounded focus:ring-2 focus:ring-blue-500 outline-none ${s.inputPadding} ${s.fontSize}`}
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className={`bg-red-600 text-white rounded hover:bg-red-700 transition-colors ${s.buttonPadding} ${s.fontSize}`}
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MProfile;
