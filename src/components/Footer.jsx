import React from 'react';
import { Link } from 'react-router-dom';

const ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.26-1.22.6-1.77 1.15a4.9 4.9 0 0 0-1.15 1.77c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77a4.9 4.9 0 0 0 1.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.62c2.68 0 3 .01 4.05.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.05s-.01 3-.06 4.05c-.04.98-.21 1.5-.35 1.86a3.1 3.1 0 0 1-.75 1.15c-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.05.06s-3-.01-4.05-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.31-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.05s.01-3 .06-4.05c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35 1.05-.05 1.37-.06 4.05-.06Zm0 2.76a5.62 5.62 0 1 0 0 11.24 5.62 5.62 0 0 0 0-11.24Zm0 9.27a3.65 3.65 0 1 1 0-7.3 3.65 3.65 0 0 1 0 7.3Zm5.84-9.49a1.31 1.31 0 1 1-2.63 0 1.31 1.31 0 0 1 2.63 0Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9A1.55 1.55 0 0 0 3.55 22h16.9A1.55 1.55 0 0 0 22 20.45V3.55A1.55 1.55 0 0 0 20.45 2ZM8.09 18.74H5.4V9.66h2.69v9.08ZM6.74 8.44a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.02 10.3h-2.68v-4.42c0-1.05-.02-2.41-1.47-2.41-1.47 0-1.7 1.15-1.7 2.33v4.5h-2.68V9.66h2.57v1.24h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.14v5.1Z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.24 2.75h3.05l-6.66 7.62 7.84 10.38h-6.14l-4.8-6.3-5.5 6.3H2.98l7.13-8.15L2.6 2.75h6.3l4.34 5.76 4.99-5.76Zm-1.07 16.17h1.69L7.94 4.5H6.13l11.04 14.42Z" />
    </svg>
  ),
};

const SOCIAL_BG = {
  facebook: '#1877F2',
  instagram: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
  linkedin: '#0A66C2',
  x: '#000000',
};

export default function Footer() {
  return (
    <footer className="site-footer" id="footer-contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-brand">
              <span className="logo-badge">
                <img src="/logo.png" alt="BEEVIF logo" className="logo-mark" style={{ width: 76, height: 76 }} />
              </span>
              <span>Nestling2Innovate</span>
            </div>
            <p>
              An initiative of the Baiden Etsiakoh Eagle Vision Foundation (BEEVIF), a Ghana-registered
              charitable foundation delivering STEM, digital skills, and AI education from the Special
              Grace Academy campus.
            </p>
            <div className="social-row">
              <a href="#" aria-label="Facebook" style={{ background: SOCIAL_BG.facebook }}>{ICONS.facebook}</a>
              <a href="#" aria-label="Instagram" style={{ background: SOCIAL_BG.instagram }}>{ICONS.instagram}</a>
              <a href="#" aria-label="LinkedIn" style={{ background: SOCIAL_BG.linkedin }}>{ICONS.linkedin}</a>
              <a href="#" aria-label="X / Twitter" style={{ background: SOCIAL_BG.x }}>{ICONS.x}</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/impact">Impact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/get-involved#apply">Apply / Enrol</Link></li>
              <li><Link to="/get-involved#volunteer">Volunteer &amp; Mentor</Link></li>
              <li><Link to="/get-involved#partner">Partner With Us</Link></li>
              <li><Link to="/get-involved#donate">Donate</Link></li>
            </ul>
          </div>

          <div className="footer-col" id="contact">
            <h4>Contact</h4>
            <ul>
              <li className="address-line">
                Tantra Hills, 2nd Street, behind Champion Divine Clinic,<br />
                Accra, Ghana
              </li>
              <li><a href="mailto:info@beevif.org">info@beevif.org</a></li>
              <li><a href="tel:+233543687558">+233 54 368 7558</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-map">
          <iframe
            title="Special Grace Academy Campus location"
            src="https://www.google.com/maps?q=Special+Grace+Academy,+Tantra+St,+Accra,+Ghana&output=embed"
            width="100%"
            height="220"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Baiden Etsiakoh Eagle Vision Foundation (BEEVIF). All rights reserved.</span>
          <span>Nestling2Innovate &middot; Accra, Ghana</span>
        </div>
      </div>
    </footer>
  );
}
