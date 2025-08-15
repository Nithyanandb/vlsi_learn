import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu, X, ChevronDown, Home, BookOpen, Calculator, 
  Mail, HelpCircle, Github, Twitter, Linkedin
} from 'lucide-react';

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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Apple-style navigation data
  const navigation: NavItem[] = [
    { name: 'Home', href: '/', icon: Home },
    {
      name: 'Learn',
      icon: BookOpen,
      children: [
        { name: 'VLSI Fundamentals', href: '/tutorials/vlsi/intro', description: 'Essential concepts' },
        { name: 'Digital Logic Design', href: '/tutorials/vlsi/digital-logic', description: 'Logic gates and circuits' },
        { name: 'RTL to GDSII Flow', href: '/tutorials/vlsi/rtl-to-gdsii', description: 'Complete methodology' },
        { name: 'Physical Design', href: '/tutorials/vlsi/chip-edge', description: 'Layout and optimization' }
      ],
    },
    {
      name: 'Tools',
      icon: Calculator,
      children: [
        { name: 'Design Calculator', href: '/tools/calculator', description: 'Power calculations' },
        { name: 'EDA Tools Guide', href: '/tools/eda-guide', description: 'Industry software' }
      ]
    },
    { name: 'About', href: '/about', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const handleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Apple-style Header */}
      <header
        ref={headerRef}
        className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            
            {/* Logo - Apple-style simple text logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center group">
                {/* Circuit-inspired logo mark */}
                <div className="relative w-6 h-6 mr-2 flex items-center justify-center">
                  <div className="absolute w-full h-0.5 bg-blue-600 top-1/2 transform -translate-y-1/2"></div>
                  <div className="absolute h-full w-0.5 bg-blue-600 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-0 left-0"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-blue-600 bottom-0 right-0"></div>
                </div>
                
                <span className="text-gray-900 font-medium text-lg tracking-tight group-hover:opacity-80 transition-opacity">
                  <span className="text-blue-600">VLSI</span>
                  <span className="text-gray-800">LEARN</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <div className="group">
                      <button
                        onClick={() => handleDropdown(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                        className={`flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-colors
                          ${activeDropdown === item.name ? 'text-blue-600' : 'text-gray-800 hover:text-gray-600'}`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180 text-blue-600' : 'text-gray-500'
                          }`}
                        />
                      </button>

                      {/* Dropdown - Apple-style subtle shadow and animation */}
                      <div
                        className={`absolute top-full left-0 mt-1 w-64 bg-white/95 rounded-lg shadow-lg ring-1 ring-gray-900/5 py-2 transition-all duration-200
                          ${activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-1'
                          }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="font-medium">{child.name}</div>
                            {child.description && (
                              <div className="text-xs text-gray-500 mt-0.5">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href || '/'}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors
                        ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-800 hover:text-gray-600'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 -mr-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          } bg-white/95 backdrop-blur-md overflow-hidden`}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-gray-500" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`ml-12 space-y-1 transition-all ${
                        activeDropdown === item.name
                          ? 'max-h-screen opacity-100 py-2'
                          : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2.5 text-gray-600 hover:bg-gray-50 rounded-lg"
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
                    className="flex items-center space-x-3 px-4 py-3 text-gray-800 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-10 min-h-screen">
        {children}
      </main>

      {/* Apple-style Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Logo and description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                {/* Logo mark */}
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <div className="absolute w-full h-0.5 bg-blue-600 top-1/2 transform -translate-y-1/2"></div>
                  <div className="absolute h-full w-0.5 bg-blue-600 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-blue-600 top-0 left-0"></div>
                  <div className="absolute w-2 h-2 rounded-full bg-blue-600 bottom-0 right-0"></div>
                </div>
                <span className="text-gray-900 font-medium">
                  <span className="text-blue-600">VLSI</span>
                  <span className="text-gray-800">LEARN</span>
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                The definitive platform for mastering VLSI design and digital electronics.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Learn</h4>
              <ul className="space-y-3 text-sm">
                {navigation.find(item => item.name === 'Learn')?.children?.map((child, i) => (
                  <li key={i}>
                    <Link to={child.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Tools</h4>
              <ul className="space-y-3 text-sm">
                {navigation.find(item => item.name === 'Tools')?.children?.map((child, i) => (
                  <li key={i}>
                    <Link to={child.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Support</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} VLSI Learn. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;