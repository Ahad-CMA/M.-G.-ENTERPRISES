import React, { useState } from 'react';
import { ChevronDown, Menu, X, Home, Users, Settings, BookOpen, Briefcase, Phone } from 'lucide-react';

interface DropdownItem {
  name: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavItem[] = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Products',
      dropdown: [
        {
          name: 'Web Development',
          href: '/products/web-development',
          description: 'Custom websites and applications',
          icon: <BookOpen className="w-4 h-4" />
        },
        {
          name: 'Mobile Apps',
          href: '/products/mobile-apps',
          description: 'iOS and Android applications',
          icon: <Settings className="w-4 h-4" />
        },
        {
          name: 'E-commerce',
          href: '/products/ecommerce',
          description: 'Online store solutions',
          icon: <Briefcase className="w-4 h-4" />
        },
        {
          name: 'Consulting',
          href: '/products/consulting',
          description: 'Technical advisory services',
          icon: <Users className="w-4 h-4" />
        },
      ]
    },
    {
      name: 'Solutions',
      dropdown: [
        {
          name: 'Enterprise',
          href: '/solutions/enterprise',
          description: 'Large-scale business solutions',
          icon: <Briefcase className="w-4 h-4" />
        },
        {
          name: 'Startups',
          href: '/solutions/startups',
          description: 'MVP and growth solutions',
          icon: <Users className="w-4 h-4" />
        },
        {
          name: 'Non-Profit',
          href: '/solutions/non-profit',
          description: 'Solutions for organizations',
          icon: <Home className="w-4 h-4" />
        },
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Documentation',
          href: '/resources/docs',
          description: 'Technical guides and APIs',
          icon: <BookOpen className="w-4 h-4" />
        },
        {
          name: 'Blog',
          href: '/resources/blog',
          description: 'Latest insights and updates',
          icon: <Settings className="w-4 h-4" />
        },
        {
          name: 'Case Studies',
          href: '/resources/case-studies',
          description: 'Success stories and examples',
          icon: <Briefcase className="w-4 h-4" />
        },
        {
          name: 'Support',
          href: '/resources/support',
          description: 'Get help and assistance',
          icon: <Phone className="w-4 h-4" />
        },
      ]
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];

  return (
    
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">YourBrand</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button className="flex items-center space-x-1 px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium">
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 backdrop-blur-sm">
                          <div className="grid gap-1">
                            {item.dropdown.map((dropdownItem) => (
                              <a
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group/item"
                              >
                                <div className="flex-shrink-0 mt-0.5 text-blue-600 group-hover/item:text-blue-700 transition-colors duration-200">
                                  {dropdownItem.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors duration-200">
                                    {dropdownItem.name}
                                  </div>
                                  {dropdownItem.description && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {dropdownItem.description}
                                    </div>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-100">
                      {item.name}
                    </div>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <div className="text-blue-600">
                            {dropdownItem.icon}
                          </div>
                          <div>
                            <div className="font-medium">{dropdownItem.name}</div>
                            {dropdownItem.description && (
                              <div className="text-xs text-gray-500">
                                {dropdownItem.description}
                              </div>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-md">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;