import Image from "next/image";
import { Heart, Shield, Users, Award } from "lucide-react";

export default function About() {
    return (
        <div className="about-page">
            <section className="page-header py-20 bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-3xl mb-4 text-white">About Pet Life Clinic</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Dedicated to providing the highest standard of veterinary care with compassion and professionalism.
                    </p>
                </div>
            </section>

            <section className="mission section">
                <div className="container grid grid-2 items-center">
                    <div className="mission-content">
                        <h2 className="text-2xl mb-6">Our Mission & Values</h2>
                        <p className="text-muted mb-4 text-lg">
                            At Pet Life Multi Speciality Clinic, we believe that every pet deserve a healthy, pain-free life. Our mission is to provide accessible, high-quality veterinary care that pet parents can trust.
                        </p>
                        <p className="text-muted mb-8">
                            Located in the heart of Jaitpur, Delhi, we have been serving the community for over a decade. We specialize in treating a variety of animals, from energetic dogs and curious cats to gentle rabbits and small pocket pets.
                        </p>

                        <div className="values-grid grid-2 gap-6">
                            <div className="value-item flex gap-3">
                                <Heart className="text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Compassion</h4>
                                    <p className="text-sm text-muted">We treat pets with love and empathy.</p>
                                </div>
                            </div>
                            <div className="value-item flex gap-3">
                                <Shield className="text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Integrity</h4>
                                    <p className="text-sm text-muted">Transparent pricing and ethical practices.</p>
                                </div>
                            </div>
                            <div className="value-item flex gap-3">
                                <Users className="text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Community</h4>
                                    <p className="text-sm text-muted">A dedicated local healthcare partner.</p>
                                </div>
                            </div>
                            <div className="value-item flex gap-3">
                                <Award className="text-primary flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold">Excellence</h4>
                                    <p className="text-sm text-muted">Multi-speciality expert care.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mission-image">
                        <Image
                            src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=2070&auto=format&fit=crop"
                            alt="Veterinary team"
                            width={600}
                            height={400}
                            className="rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="expertise section bg-surface">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl mb-4">Our Expertise</h2>
                        <p className="text-muted max-w-2xl mx-auto">
                            We are equipped to handle a wide range of patients and conditions.
                        </p>
                    </div>
                    <div className="grid grid-3">
                        {[
                            { type: "Canine Care", desc: "Expert treatment for all dog breeds, from puppies to seniors." },
                            { type: "Feline Care", desc: "Specialized gentle handling and medical care for cats." },
                            { type: "Rabbit & Exotic", desc: "Dedicated knowledge for rabbits, birds, and small animals." }
                        ].map((item, i) => (
                            <div key={i} className="card text-center">
                                <h3 className="text-primary mb-4">{item.type}</h3>
                                <p className="text-muted">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
