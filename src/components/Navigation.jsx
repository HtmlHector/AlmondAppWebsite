import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const navLinks = [
    { name: 'Top rated', href: '#top-rated' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // You can add search logic here
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Logo and nav links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">🫒</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Olive</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 transition-all duration-200 text-sm font-semibold hover:scale-105"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Center section: Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search products..."
                  className="w-full px-4 py-2.5 pl-10 pr-4 text-gray-700 bg-gray-50/80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 focus:bg-white focus:shadow-lg transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </form>
          </div>

          {/* Right section: Sign in/Sign up buttons */}
          <div className="flex items-center space-x-4">
            <Link to="/get-started" className="hidden md:block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-xl hover:scale-105 transform transition-all duration-200">
              Get Started
            </Link>
            <Link to="/signup" className="hidden md:block border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:border-green-500 hover:bg-green-50 hover:text-green-600 transition-all duration-200">
              Sign In
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:border-green-500 focus:bg-white transition-colors"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link to="/get-started" className="block w-full text-center px-3 py-2 text-base font-medium bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:shadow-lg transition-all">
              Get Started
            </Link>
            <Link to="/signup" className="block w-full text-center px-3 py-2 text-base font-medium border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
