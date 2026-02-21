import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer section pb-0">
            <div className="container grid grid-4">
                <div className="footer-brand flex flex-col gap-4">
                    <Link href="/" className="logo">
                        <span className="text-2xl font-bold text-primary">Pet Life</span>
                        <div className="text-sm font-medium text-primary-light">Multi Speciality Clinic</div>
                    </Link>
                    <p className="text-muted">
                        Providing compassionate and expert care for your beloved pets in South Delhi. Your pet&apos;s health is our priority.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="social-icon"><Facebook size={20} /></a>
                        <a href="#" className="social-icon"><Instagram size={20} /></a>
                    </div>
                </div>

                <div>
                    <h4 className="mb-4">Quick Links</h4>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Our Services</Link></li>
                        <li><Link href="/reviews">Testimonials</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4">Our Services</h4>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/services">General Consultation</Link></li>
                        <li><Link href="/services">Vaccination</Link></li>
                        <li><Link href="/services">Emergency Care</Link></li>
                        <li><Link href="/services">Small Pet Care</Link></li>
                        <li><Link href="/services">Pet Accessories</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-4">Contact Info</h4>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-2">
                            <MapPin size={20} className="text-primary flex-shrink-0" />
                            <span>G85H+8HP, Ismailpur Rd, Jaitpur, New Delhi, Delhi 110044</span>
                        </li>
                        <li className="flex gap-2">
                            <Phone size={20} className="text-primary flex-shrink-0" />
                            <a href="tel:08467959423">084679 59423</a>
                        </li>
                        <li className="flex gap-2">
                            <Mail size={20} className="text-primary flex-shrink-0" />
                            <a href="mailto:info@petlifeclinic.com">info@petlifeclinic.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom mt-8 py-6 border-t text-center text-sm text-muted">
                <div className="container">
                    <p className="mb-4 font-semibold text-primary/80">Trusted by hundreds of pet parents across South Delhi 🐾</p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p>© {new Date().getFullYear()} Pet Life Multi Speciality Clinic. All rights reserved.</p>
                        <div className="flex flex-col items-center md:items-end gap-1">
                            <p className="flex items-center gap-1">
                                Made with <Heart size={14} className="text-error fill-error" /> for pets in Delhi
                            </p>
                            <p className="text-xs opacity-75">Developed by Krizia Technologies</p>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
}
