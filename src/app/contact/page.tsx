'use client';

import { Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
    };

    return (
        <div className="contact-page">
            <section className="page-header py-20 bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-3xl mb-4 text-white">Contact Us</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Get in touch with us for appointments, emergencies, or any queries.
                    </p>
                </div>
            </section>

            <section className="contact-content section">
                <div className="container grid grid-2 gap-12">
                    <div className="contact-info">
                        <h2 className="text-2xl mb-8">Get In Touch</h2>
                        <div className="flex flex-col gap-8">
                            <div className="contact-card flex gap-4 p-6 card">
                                <div className="icon-box-small"><MapPin className="text-primary" /></div>
                                <div>
                                    <h4 className="font-bold">Our Location</h4>
                                    <p className="text-muted text-sm">G85H+8HP, Ismailpur Rd, Jaitpur, New Delhi, Delhi 110044</p>
                                    <a href="https://maps.app.goo.gl/..." target="_blank" className="text-primary text-xs font-bold mt-2 inline-block">View on Google Maps</a>
                                </div>
                            </div>

                            <div className="contact-card flex gap-4 p-6 card">
                                <div className="icon-box-small"><Phone className="text-primary" /></div>
                                <div>
                                    <h4 className="font-bold">Phone Number</h4>
                                    <p className="text-muted text-sm">084679 59423</p>
                                    <div className="flex gap-4 mt-2">
                                        <a href="tel:08467959423" className="text-primary text-xs font-bold">Call Now</a>
                                        <a href="https://wa.me/918467959423" className="text-success text-xs font-bold flex items-center gap-1">
                                            <MessageCircle size={14} /> WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-card flex gap-4 p-6 card">
                                <div className="icon-box-small"><Clock className="text-primary" /></div>
                                <div>
                                    <h4 className="font-bold">Clinic Timings</h4>
                                    <p className="text-muted text-sm">Open Daily: 6:00 AM – 10:00 PM</p>
                                    <p className="text-primary-light text-xs mt-1 italic">Emergency visits prioritized</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="appointment-form card shadow-lg border">
                        <h2 className="text-2xl mb-6">Book an Appointment</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="form-group flex flex-col gap-1">
                                <label className="text-sm font-medium">Full Name</label>
                                <input type="text" placeholder="John Doe" required className="input-field" />
                            </div>
                            <div className="form-group flex flex-col gap-1">
                                <label className="text-sm font-medium">Phone Number</label>
                                <input type="tel" placeholder="+91 98765 43210" required className="input-field" />
                            </div>
                            <div className="grid grid-2 gap-4">
                                <div className="form-group flex flex-col gap-1">
                                    <label className="text-sm font-medium">Pet Type</label>
                                    <select className="input-field">
                                        <option>Dog</option>
                                        <option>Cat</option>
                                        <option>Rabbit</option>
                                        <option>Bird</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="form-group flex flex-col gap-1">
                                    <label className="text-sm font-medium">Service</label>
                                    <select className="input-field">
                                        <option>Consultation</option>
                                        <option>Vaccination</option>
                                        <option>Emergency</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group flex flex-col gap-1">
                                <label className="text-sm font-medium">Message (Optional)</label>
                                <textarea rows={4} placeholder="Tell us about your pet's condition..." className="input-field"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg mt-4">
                                <Send size={18} /> Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="map-section section pt-0">
                <div className="container">
                    <div className="bg-white p-4 text-center rounded-2xl shadow-xl border border-gray-100 flex flex-col">
                        <h2 className="text-2xl font-bold text-primary mb-4 mt-2">Find Us on Google Maps</h2>
                        <div className="w-full rounded-xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0438509093824!2d77.32638237571564!3d28.508328375732802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce792a51853a7%3A0x3af39605efd64d74!2sPet%20life%20multi%20speciality%20clinic!5e0!3m2!1sen!2sus!4v1771672196928!5m2!1sen!2sus"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Pet Life Multi Speciality Clinic Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
