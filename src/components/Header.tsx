'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container flex justify-between items-center py-1.5 text-xs md:text-sm">
          <div className="flex gap-6">
            <a href="tel:08467959423" className="flex items-center gap-2 hover:text-primary transition-colors group">
              <span className="bg-error px-2 py-0.5 rounded text-[10px] uppercase font-bold text-white animate-pulse">24x7 Emergency</span>
              <span className="flex items-center gap-1 font-bold">
                <Phone size={14} /> 084679 59423
              </span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-muted">
              <Clock size={14} /> Open Daily: 6:00 AM – 10:00 PM
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://maps.app.goo.gl/..." target="_blank" className="flex items-center gap-1 text-muted hover:text-primary transition-all">
              <MapPin size={14} /> Jaitpur, New Delhi
            </a>
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="logo flex flex-col">
            <span className="text-xl font-bold text-primary">Pet Life</span>
            <span className="text-xs font-medium text-primary-light">Multi Speciality Clinic</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 font-medium desktop-menu">
            <Link href="/" className="hover:text-primary transition-all">Home</Link>
            <Link href="/about" className="hover:text-primary transition-all">About Us</Link>
            <Link href="/services" className="hover:text-primary transition-all">Services</Link>
            <Link href="/reviews" className="hover:text-primary transition-all">Reviews</Link>
            <Link href="/contact" className="hover:text-primary transition-all">Contact</Link>
          </div>

          <Link href="/contact" className="btn btn-primary hidden md:flex">
            Book Appointment
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-primary p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t py-4 fade-in">
            <div className="container flex flex-col gap-4">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link href="/reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/contact" className="btn btn-primary text-center" onClick={() => setIsMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>

    </header>
  );
}
