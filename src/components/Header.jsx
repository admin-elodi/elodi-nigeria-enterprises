import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/elodi-logo.webp'; // Adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses =
    'block text-sm md:text-base font-semibold text-[#1F2937] hover:text-[#FF6B35] hover:border-b-2 hover:border-[#FF6B35] transition-all duration-300 py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-[#F4B400] whitespace-nowrap';
  const activeClasses = 'text-[#003087] border-b-2 border-[#003087] font-bold';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white font-inter shadow-md border-b-2 border-[#003087]">
      {/* Desktop: Company name centered above nav */}
      <div className="hidden md:flex justify-center bg-[#E5E7EB] py-2 border-b border-[#003087]">
        <h1 className="text-lg md:text-3xl font-bold text-[#003087] tracking-wide select-none">
          Elodi Nigeria Enterprises
        </h1>
      </div>

      <nav className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="p-1 rounded hover:scale-105 transition-transform duration-300 flex items-center"
          aria-label="Elodi Nigeria Enterprises Home"
        >
          <img
            src={logo}
            alt="Elodi Nigeria Enterprises logo"
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </NavLink>

        {/* Mobile: Company name between logo and hamburger */}
        <div className="flex-1 flex justify-center md:hidden">
          <span className="text-sm font-bold text-[#003087] select-none truncate max-w-xs">
            Elodi Nigeria Enterprises
          </span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          id="menu-toggle"
          className="md:hidden text-[#003087] focus:outline-none focus:ring-2 focus:ring-[#F4B400] rounded p-2"
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span
              className={`block h-[3px] bg-[#003087] rounded transition-transform duration-300 ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-[3px] bg-[#003087] rounded transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-[3px] bg-[#003087] rounded transition-transform duration-300 ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent text-center space-y-2 md:space-y-0 md:space-x-4 py-3 px-4 md:p-0 transition-all duration-300 ease-in-out shadow-lg md:shadow-none z-40`}
          aria-hidden={!isMenuOpen}
        >
          {[
            { to: '/', label: 'Home' },
            { to: '/website-development', label: 'Website Development' },
            { to: '/ict-instruction', label: 'Coding Is Fun' },
            { to: '/proposals', label: 'Proposals' },
            { to: '/product-reviews', label: 'Product Reviews' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeClasses : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-current={to === window.location.pathname ? 'page' : undefined}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;