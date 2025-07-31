import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
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
          description: 'Custom websites and applications'
        },
        {
          name: 'Mobile Apps',
          href: '/products/mobile-apps',
          description: 'iOS and Android applications'
        },
        {
          name: 'E-commerce',
          href: '/products/ecommerce',
          description: 'Online store solutions'
        },
        {
          name: 'Consulting',
          href: '/products/consulting',
          description: 'Technical advisory services'
        },
      ]
    },
    {
      name: 'Solutions',
      dropdown: [
        {
          name: 'Enterprise',
          href: '/solutions/enterprise',
          description: 'Large-scale business solutions'
        },
        {
          name: 'Startups',
          href: '/solutions/startups',
          description: 'MVP and growth solutions'
        },
        {
          name: 'Non-Profit',
          href: '/solutions/non-profit',
          description: 'Solutions for organizations'
        },
      ]
    },
    {
      name: 'Resources',
      dropdown: [
        {
          name: 'Documentation',
          href: '/resources/docs',
          description: 'Technical guides and APIs'
        },
        {
          name: 'Blog',
          href: '/resources/blog',
          description: 'Latest insights and updates'
        },
        {
          name: 'Case Studies',
          href: '/resources/case-studies',
          description: 'Success stories and examples'
        },
        {
          name: 'Support',
          href: '/resources/support',
          description: 'Get help and assistance'
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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-container">
              <div className="logo-icon">
                <span>🏠</span>
              </div>
              <span className="logo-text">YourBrand</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <div className="navbar-items">
              {navigation.map((item) => (
                <div key={item.name} className="navbar-item">
                  {item.dropdown ? (
                    <>
                      <button className="navbar-link dropdown-trigger">
                        <span>{item.name}</span>
                        <span className="dropdown-arrow">▼</span>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="dropdown-menu">
                        <div className="dropdown-content">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="dropdown-item"
                            >
                              <div className="dropdown-item-content">
                                <div className="dropdown-item-name">
                                  {dropdownItem.name}
                                </div>
                                {dropdownItem.description && (
                                  <div className="dropdown-item-description">
                                    {dropdownItem.description}
                                  </div>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <a href={item.href} className="navbar-link">
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="navbar-cta">
            <button className="cta-button">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            {navigation.map((item) => (
              <div key={item.name} className="mobile-menu-item">
                {item.dropdown ? (
                  <div className="mobile-dropdown">
                    <div className="mobile-dropdown-title">
                      {item.name}
                    </div>
                    <div className="mobile-dropdown-items">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="mobile-dropdown-item"
                        >
                          <div className="mobile-item-name">{dropdownItem.name}</div>
                          {dropdownItem.description && (
                            <div className="mobile-item-description">
                              {dropdownItem.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a href={item.href} className="mobile-menu-link">
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="mobile-cta">
              <button className="mobile-cta-button">
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