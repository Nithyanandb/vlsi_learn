import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Home, BookOpen, Calculator, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import DynamicBackground from './DynamicBackground';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

interface NavItem {
  name: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: Array<{
    name: string;
    href: string;
  }>;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hoverHideTimer = useRef<number | null>(null);
  const mouseNearTop = useRef(false);
  const cursorTimer = useRef<number | null>(null);
  const dropdownCloseTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      const scrollingDown = currentY > lastScrollY.current;
      const shouldForceShow = isMenuOpen || !!activeDropdown || mouseNearTop.current || currentY < 20;

      if (shouldForceShow) {
        setIsHeaderVisible(true);
      } else if (currentY > 100) {
        setIsHeaderVisible(!scrollingDown);
      }

      lastScrollY.current = currentY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseNearTop.current = e.clientY < 80;
      if (mouseNearTop.current) setIsHeaderVisible(true);

      // Cursor auto-hide logic
      if (cursorTimer.current) window.clearTimeout(cursorTimer.current);
      document.body.classList.remove('cursor-none');
      cursorTimer.current = window.setTimeout(() => {
        document.body.classList.add('cursor-none');
      }, 1200);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (cursorTimer.current) window.clearTimeout(cursorTimer.current);
      if (hoverHideTimer.current) window.clearTimeout(hoverHideTimer.current);
      if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current);
      document.body.classList.remove('cursor-none');
    };
  }, [isMenuOpen, activeDropdown]);

  const handleHeaderEnter = () => {
    if (hoverHideTimer.current) {
      window.clearTimeout(hoverHideTimer.current);
      hoverHideTimer.current = null;
    }
    setIsHeaderVisible(true);
  };

  const handleHeaderLeave = () => {
    if (hoverHideTimer.current) window.clearTimeout(hoverHideTimer.current);
    if (window.scrollY > 100 && !isMenuOpen && !activeDropdown && !mouseNearTop.current) {
      hoverHideTimer.current = window.setTimeout(() => setIsHeaderVisible(false), 800);
    }
  };

  const openDropdown = (name: string) => {
    if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current);
    setActiveDropdown(name);
    setIsHeaderVisible(true);
  };

  const scheduleCloseDropdown = () => {
    if (dropdownCloseTimer.current) window.clearTimeout(dropdownCloseTimer.current);
    dropdownCloseTimer.current = window.setTimeout(() => setActiveDropdown(null), 200);
  };

  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
  }, [title, description]);

  const navigation: NavItem[] = [
    { name: 'Home', href: '/', icon: Home },
    {
      name: 'Tutorials',
      icon: BookOpen,
      children: [
        { name: 'VLSI Introduction', href: '/tutorials/vlsi/intro' },
        { name: 'Digital Logic', href: '/tutorials/vlsi/digital-logic' },
        { name: 'RTL to GDSII Flow', href: '/tutorials/vlsi/rtl-to-gdsii' },
        { name: 'Chip Edge Techniques', href: '/tutorials/vlsi/chip-edge' }
      ],
    },
    { 
      name: 'Tools', 
      icon: Calculator,
      children: [
        { name: 'VLSI Calculator', href: '/tools/calculator' },
        { name: 'EDA Tools Guide', href: '/tools/eda-guide' }
      ]
    },
    { name: 'About', href: '/about', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
    setIsHeaderVisible(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed background image (grayscale) */}
      <div className="fixed inset-0 -z-30 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581093588401-8a5e05f05f52?q=80&w=1920&auto=format&fit=crop"
          alt="Semiconductor"
          className="w-full h-full object-cover animate-zoom-slow"
          loading="lazy"
        />
      </div>
      {/* Subtle overlay for contrast */}
      <div className="fixed inset-0 -z-20 bg-white/60"></div>
      <DynamicBackground />

      {/* Header */}
      <header
        onMouseEnter={handleHeaderEnter}
        onMouseLeave={handleHeaderLeave}
        className={`fixed w-full top-0 z-50 transition-all duration-300 transform ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/60' : 'bg-transparent'
        } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                
                <span className="text-base font-semibold text-gray-900">VLSI Learn</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      onMouseEnter={() => openDropdown(item.name)}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      <button
                        onClick={() => openDropdown(item.name)}
                        className="flex items-center space-x-1 px-3 py-2 text-gray-800 hover:text-gray-900 font-medium transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200 py-2 ">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2.5 text-gray-800 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="px-3 py-2 text-gray-800 hover:text-gray-900 font-medium transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => { setIsMenuOpen(!isMenuOpen); setIsHeaderVisible(true); }}
                className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="flex items-center space-x-2 px-3 py-2.5 text-gray-800 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-semibold">VLSI Learn</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your comprehensive resource for learning VLSI design and digital electronics.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Tutorials</h4>
              <ul className="space-y-2">
                <li><Link to="/tutorials/vlsi/intro" className="text-gray-400 hover:text-white transition-colors duration-200">VLSI Introduction</Link></li>
                <li><Link to="/tutorials/vlsi/digital-logic" className="text-gray-400 hover:text-white transition-colors duration-200">Digital Logic</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tools</h4>
              <ul className="space-y-2">
                <li><Link to="/tools/calculator" className="text-gray-400 hover:text-white transition-colors duration-200">VLSI Calculator</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">FAQ</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 VLSI Learn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;