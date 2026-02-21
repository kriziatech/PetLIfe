'use client';

import { Phone, Calendar, MessageCircle, MapPin } from 'lucide-react';

export default function MobileEmergencyDock() {
    return (
        <div className="mobile-dock md:hidden">
            <div className="dock-container">
                <a href="tel:08467959423" className="dock-item dock-emergency">
                    <Phone size={24} />
                    <span>Emergency Call</span>
                </a>
                <div className="dock-divider"></div>
                <a href="https://wa.me/918467959423" className="dock-item">
                    <MessageCircle size={24} />
                    <span>Chat</span>
                </a>
                <a href="/contact" className="dock-item">
                    <Calendar size={24} />
                    <span>Visit</span>
                </a>
                <a href="https://maps.app.goo.gl/..." target="_blank" className="dock-item">
                    <MapPin size={24} />
                    <span>Map</span>
                </a>
            </div>
        </div>
    );
}
