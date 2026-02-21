import { CheckCircle2, Phone } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "General Veterinary Consultation",
            desc: "Comprehensive physical exams, diagnosis, and expert medical advice for your pets.",
            features: ["Full body checkup", "Body condition scoring", "Nutritional advice"]
        },
        {
            title: "Vaccination & Injections",
            desc: "Protect your pets from life-threatening diseases with our timely vaccination schedules.",
            features: ["DHLPP / Rabies", "Cat vaccinations", "Anti-rabies treatment"]
        },
        {
            title: "Parvo Virus Treatment",
            desc: "Intensive care and specialized protocols for dogs suffering from Parvo virus.",
            features: ["Fluid therapy", "Specialized isolation ward", "Recovery monitoring"]
        },
        {
            title: "Fever & Infection Treatment",
            desc: "Quick diagnosis and targeted antibiotic therapy for viral and bacterial infections.",
            features: ["Blood testing", "Temperature management", "Symptomatic relief"]
        },
        {
            title: "Emergency Care",
            desc: "Critical care support for accidents, poisoning, and sudden illness.",
            features: ["24/7 Phone consultation", "Critical stabilization", "Wound management"]
        },
        {
            title: "Rabbit & Small Pet Care",
            desc: "Expert care for small friends like rabbits, guinea pigs, and birds.",
            features: ["Dental checkups", "Dietary planning", "Small mammal medicine"]
        },
        {
            title: "Nutrition & Immunity Support",
            desc: "Building long-term health through proper diet and immunity boosters.",
            features: ["Multivitamins", "Immune support supplements", "Weight management"]
        },
        {
            title: "Accessories & Pet Products",
            desc: "A selected range of high-quality food, treats, and healthcare products.",
            features: ["Premium pet food", "Grooming tools", "Leashes & Collars"]
        }
    ];

    return (
        <div className="services-page">
            <section className="page-header py-20 bg-primary text-white text-center">
                <div className="container">
                    <h1 className="text-3xl mb-4 text-white">Our Services</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Comprehensive multi-speciality care tailord to your pet&apos;s unique needs.
                    </p>
                </div>
            </section>

            <section className="services-list section">
                <div className="container">
                    <div className="grid grid-2">
                        {services.map((service, i) => (
                            <div key={i} className="card service-detail-card">
                                <h3 className="text-xl text-primary mb-4">{service.title}</h3>
                                <p className="text-muted mb-6">{service.desc}</p>
                                <ul className="flex flex-col gap-2">
                                    {service.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm">
                                            <CheckCircle2 size={16} className="text-primary-light" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="emergency-note section bg-surface">
                <div className="container text-center">
                    <div className="card max-w-2xl mx-auto border-2 border-primary">
                        <h2 className="text-2xl text-primary mb-4">Emergency Note</h2>
                        <p className="text-muted mb-6">
                            During emergency hours (late night), please call us first to ensure a veterinarian is ready to receive your pet immediately.
                        </p>
                        <a href="tel:08467959423" className="btn btn-primary btn-lg">
                            <Phone size={20} /> Call Emergency: 084679 59423
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
