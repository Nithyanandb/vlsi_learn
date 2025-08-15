import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Home, BookOpen, Calculator, Mail, HelpCircle, Search, User, Bell } from 'lucide-react';
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
    description?: string;
  }>;
}

const Layout: React.FC<LayoutProps> = ({ children, title, description }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Auto-hide/show header logic
      const scrollingDown = currentY > lastScrollY.current;
      const shouldShow = currentY < 100 || !scrollingDown || isMenuOpen || !!activeDropdown;

      setIsHeaderVisible(shouldShow);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, activeDropdown]);

  useEffect(() => {
    if (title) document.title = title;

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
      name: 'Learn',
      icon: BookOpen,
      children: [
        { name: 'VLSI Fundamentals', href: '/tutorials/vlsi/intro', description: 'Essential concepts and principles' },
        { name: 'Digital Logic Design', href: '/tutorials/vlsi/digital-logic', description: 'Logic gates and circuits' },
        { name: 'RTL to GDSII Flow', href: '/tutorials/vlsi/rtl-to-gdsii', description: 'Complete design methodology' },
        { name: 'Physical Design', href: '/tutorials/vlsi/chip-edge', description: 'Layout and optimization' }
      ],
    },
    {
      name: 'Tools',
      icon: Calculator,
      children: [
        { name: 'Design Calculator', href: '/tools/calculator', description: 'Power, timing, and area calculations' },
        { name: 'EDA Tools Guide', href: '/tools/eda-guide', description: 'Industry-standard software' }
      ]
    },
    { name: 'About', href: '/about', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <DynamicBackground />

      {/* Apple-style Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${isScrolled
        ? 'backdrop-blur-xl shadow-sm'
        : 'bg-transparent'
        } ${isHeaderVisible ? 'translate-y-0' : '-translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-[95px] h-9 backdrop-blur-xl shadow-smrounded-[8px] flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <span className="text-white font-bold text-sm">VLSI LEARN</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex  items-center space-x-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="group">
                      <button
                        onClick={() => handleDropdown(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className="flex items-center space-x-1 px-3 py-2 text-white hover:text-gray-900 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-100"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </button>

                      {/* Dropdown */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 transition-all duration-200 ${activeDropdown === item.name
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-100 invisible -translate-y-2'
                          }`}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium">{child.name}</div>
                            {child.description && (
                              <div className="text-sm text-gray-500 mt-1">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="px-3 py-2 text-white hover:text-gray-900 font-small transition-colors duration-200 rounded-lg hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-white hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="hidden sm:block px-4 py-2 text-white hover:text-gray-900 font-medium transition-colors duration-200 rounded-lg hover:bg-gray-100">
                Sign In
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-out ${isMenuOpen
          ? 'max-h-screen opacity-100 visible'
          : 'max-h-0 opacity-0 invisible'
          }`}>
          <div className="bg-white border-t border-gray-200 px-4 pb-6">
            <div className="space-y-1 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </button>
                      <div className={`ml-8 space-y-1 transition-all duration-200 ${activeDropdown === item.name ? 'max-h-screen' : 'max-h-0 overflow-hidden'
                        }`}>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 mt-4">
                <Link
                  to="/signin"
                  className="block w-full text-center bg-black text-white py-3 rounded-full font-medium hover:bg-gray-900 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Apple-style Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-semibold text-gray-900">VLSI Learn</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                The definitive platform for mastering VLSI design and digital electronics.
                Trusted by professionals worldwide.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Learn</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/tutorials/vlsi/intro" className="text-gray-600 hover:text-gray-900 transition-colors">VLSI Fundamentals</Link></li>
                <li><Link to="/tutorials/vlsi/digital-logic" className="text-gray-600 hover:text-gray-900 transition-colors">Digital Logic</Link></li>
                <li><Link to="/tutorials/vlsi/rtl-to-gdsii" className="text-gray-600 hover:text-gray-900 transition-colors">RTL to GDSII</Link></li>
                <li><Link to="/tutorials/vlsi/chip-edge" className="text-gray-600 hover:text-gray-900 transition-colors">Physical Design</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Tools</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/tools/calculator" className="text-gray-600 hover:text-gray-900 transition-colors">Design Calculator</Link></li>
                <li><Link to="/tools/eda-guide" className="text-gray-600 hover:text-gray-900 transition-colors">EDA Tools Guide</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link to="/help" className="text-gray-600 hover:text-gray-900 transition-colors">Help Center</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; 2025 VLSI Learn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;