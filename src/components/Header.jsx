import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    items: [
      { label: 'Our Story', to: '/about#story' },
      { label: 'Our Team', to: '/about#team' },
      { label: 'Mission & Vision', to: '/about#mission' },
    ],
  },
  {
    label: 'Programs',
    to: '/programs',
    items: [
      { label: 'Web Design', to: '/programs#web-design' },
      { label: 'Global Virtual Internships', to: '/programs#internships' },
      { label: 'Programming', to: '/programs#programming' },
      { label: 'AI Literacy', to: '/programs#ai-literacy' },
      { label: 'Community STEM Innovation Centre', to: '/programs#innovation-centre' },
    ],
  },
  {
    label: 'Get Involved',
    to: '/get-involved',
    items: [
      { label: 'Apply / Enrol', to: '/get-involved#apply' },
      { label: 'Volunteer & Mentor', to: '/get-involved#volunteer' },
      { label: 'Partner With Us', to: '/get-involved#partner' },
      { label: 'Donate', to: '/get-involved#donate' },
    ],
  },
  {
    label: 'Impact',
    to: '/impact',
    items: [
      { label: 'Our Impact', to: '/impact#impact' },
      { label: 'Success Stories', to: '/impact#stories' },
      { label: 'News & Updates', to: '/impact#news' },
    ],
  },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isMobile = () => window.innerWidth <= 980;

  const handleParentClick = (e, item) => {
    if (isMobile() && item.items) {
      e.preventDefault();
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    } else {
      setNavOpen(false);
      setOpenDropdown(null);
    }
  };

  const closeAll = () => {
    setNavOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link to="/" className="brand" onClick={closeAll}>
          <img src="/logo.png" alt="BEEVIF logo" className="logo-mark" />
          <span className="brand-text">Nestling2Innovate</span>
        </Link>

        <nav className={`main-nav${navOpen ? ' open' : ''}`}>
          <ul>
            {NAV.map((item) => (
              <li
                key={item.label}
                className={item.items ? `has-dropdown${openDropdown === item.label ? ' open' : ''}` : ''}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                  onClick={(e) => handleParentClick(e, item)}
                >
                  {item.label}
                </NavLink>
                {item.items && (
                  <div className="dropdown">
                    {item.items.map((sub) => (
                      <Link key={sub.label} to={sub.to} onClick={closeAll}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/about#contact" className="contact-link" onClick={closeAll}>
            Contact
          </Link>
          <Link to="/get-involved#donate" className="btn btn-primary" onClick={closeAll}>
            Donate
          </Link>
          <button
            className={'nav-toggle' + (navOpen ? ' is-open' : '')}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            onClick={() => setNavOpen(!navOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
