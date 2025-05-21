import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Menu, Globe, Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would be managed by your auth system

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'health', label: 'Health' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'sports', label: 'Sports' },
    { value: 'culture', label: 'Culture' },
    { value: 'business', label: 'Business' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200 py-4">
          <div className="container mx-auto px-4 flex items-center gap-4">
            {/* Left section */}
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Place</span>
                <span className="text-2xl font-bold text-slate-800">2</span>
              </Link>
              
              <Link to="/" className="p-2 rounded-md hover:bg-slate-50 transition-colors">
                <Home size={24} className="text-slate-700" />
              </Link>
              
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Menu size={24} className="text-slate-700" />
              </button>
              
              <button
                onClick={() => setIsPlacesSidebarOpen(true)}
                className="p-2 rounded-md hover:bg-slate-50 transition-colors"
              >
                <Globe size={24} className="text-slate-700" />
              </button>
            </div>

            {/* Search section */}
            <div className="flex-1 flex gap-4 max-w-2xl">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                <input
                  type="text"
                  placeholder={`Search in ${selectedCategory === 'all' ? 'all categories' : selectedCategory}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right section */}
            <div>
              {isLoggedIn ? (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Profile
                </button>
              ) : (
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Sign Up / Login
                </button>
              )}
            </div>
          </div>
        </div>
        
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <PlacesSidebar
          isOpen={isPlacesSidebarOpen}
          onClose={() => setIsPlacesSidebarOpen(false)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/health" element={<HealthPage />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 px-6 flex items-center justify-between text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Globe size={18} />
            <span>Place2 © 2025</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;