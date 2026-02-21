import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ShieldCheck, Heart, Award, Star, ArrowRight, Clock, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container grid grid-2 items-center">
          <div className="hero-content fade-in">
            <div className="badge bg-error-light text-error font-bold mb-4 px-3 py-1 rounded-full inline-flex items-center gap-2 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
              </span>
              Emergency Services Available
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              🚨 Emergency Care <br />
              <span className="text-error">For Your Pet</span>
            </h1>
            <p className="text-xl text-muted mb-8 max-w-lg">
              Sudden illness or injury? Our specialized vets are here to help immediately with compassionate, 24/7 emergency support.
            </p>
            <div className="flex gap-4 flex-wrap mb-10">
              <a href="tel:08467959423" className="btn btn-accent btn-fixed bg-[#f97316] hover:bg-[#ea580c]">
                <Phone size={24} /> Call Emergency Now
              </a>
              <Link href="/contact" className="btn btn-secondary btn-fixed">
                <Calendar size={20} /> Book Visit
              </Link>
            </div>

            <div className="trust-anchor flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <div className="flex text-[#f59e0b]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill="currentColor" />
                  ))}
                </div>
                <span className="text-2xl font-bold">4.8 Average</span>
              </div>
              <p className="text-sm text-muted">Trusted by 500+ Pet Parents on Google Reviews</p>
            </div>
          </div>
          <div className="hero-image relative fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="image-wrapper shadow-2xl">
              <Image
                src="/images/hero_vet_pet.png"
                alt="Professional Veterinarian with a puppy"
                width={600}
                height={600}
                className="rounded-3xl"
                priority
              />
            </div>
            <div className="experience-badge card">
              <div className="bg-primary-light/10 p-2 rounded-lg text-primary">
                <Award size={24} />
              </div>
              <div>
                <span className="text-primary text-2xl font-bold block">10+ Years</span>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">Clinical Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats py-12 bg-surface">
        <div className="container flex flex-wrap justify-between gap-8">
          <div className="stat-item flex items-center gap-4">
            <div className="icon-box"><ShieldCheck /></div>
            <div>
              <h4 className="text-xl">Certified Vets</h4>
              <p className="text-sm text-muted">Professional experts</p>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="icon-box"><Heart /></div>
            <div>
              <h4 className="text-xl">Happy Pets</h4>
              <p className="text-sm text-muted">Compassionate care</p>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="icon-box"><Clock /></div>
            <div>
              <h4 className="text-xl">Emergency</h4>
              <p className="text-sm text-muted">Quick response visits</p>
            </div>
          </div>
          <div className="stat-item flex items-center gap-4">
            <div className="icon-box"><Award /></div>
            <div>
              <h4 className="text-xl">Affordable</h4>
              <p className="text-sm text-muted">Transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="services-snapshot section">
        <div className="container">
          <div className="section-header text-center mb-12">
            <h2 className="text-3xl mb-4">Our Premium Services</h2>
            <p className="text-muted max-w-2xl mx-auto">
              We offer a wide range of medical and surgical services for all kinds of pets, including dogs, cats, rabbits, and more.
            </p>
          </div>

          <div className="grid grid-3">
            {[
              { title: "General Consultation", desc: "Routine check-ups and expert health advice for all pets.", icon: "🩺" },
              { title: "Vaccination & Injections", desc: "Safe and timely immunization to protect against diseases.", icon: "💉" },
              { title: "Parvo Virus Treatment", desc: "Specialized care and recovery protocols for Parvo cases.", icon: "🦠" },
              { title: "Small Pet Care", desc: "Dedicated expertise for rabbits, hamsters, and birds.", icon: "🐰" },
              { title: "Surgery & ER", desc: "Advanced surgical procedures and emergency medical care.", icon: "🏥" },
              { title: "Pet Accessories", desc: "Quality products and nutrition support for your pets.", icon: "🍖" },
            ].map((service, i) => (
              <div key={i} className="card service-card">
                <div className="service-icon mb-4">{service.icon}</div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-muted mb-4">{service.desc}</p>
                <Link href="/services" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-secondary btn-lg">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section bg-surface">
        <div className="container grid grid-2 items-center">
          <div className="why-us-image">
            <Image
              src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?q=80&w=2070&auto=format&fit=crop"
              alt="Veterinary environment"
              width={600}
              height={400}
              className="rounded-3xl"
            />
          </div>
          <div className="why-us-content">
            <h2 className="text-3xl mb-6">Why Trust Pet Life Clinic?</h2>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <div className="check-box"><ShieldCheck size={24} /></div>
                <div>
                  <h4 className="text-lg font-bold">Experienced Specialists</h4>
                  <p className="text-muted">Our vets have over 10 years of experience in multi-speciality pet care.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="check-box"><Heart size={24} /></div>
                <div>
                  <h4 className="text-lg font-bold">Compassionate Approach</h4>
                  <p className="text-muted">We treat every pet as if they were our own family member.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="check-box"><Star size={24} /></div>
                <div>
                  <h4 className="text-lg font-bold">Affordable & Transparent</h4>
                  <p className="text-muted text-sm">Quality care shouldn&apos;t be a burden. We offer ethical and fair pricing.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Optimized Emergency CTA Section */}
      <section className="cta-banner section pt-0">
        <div className="container">
          <div className="emergency-reassurance p-8 md:p-16 flex flex-col items-center text-center shadow-2xl">
            <div className="flex justify-center gap-3 mb-8 flex-wrap">
              <span className="benefit-pill">24/7 Rapid Response</span>
              <span className="benefit-pill">Expert Surgeons On-site</span>
              <span className="benefit-pill">Immediate Life-saving Care</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary max-w-3xl">
              Breathe. We&apos;re here to help.
            </h2>
            <p className="text-xl mb-12 text-muted max-w-2xl leading-relaxed">
              In an emergency, every second counts. Our team is fully prepared for critical situations. Your pet is in safe, experienced hands.
            </p>

            <div className="flex flex-col items-center gap-4 mb-10 w-full max-w-md">
              <a href="tel:08467959423" className="emergency-pulse-btn w-full justify-center flex items-center gap-3 font-bold group">
                <Phone className="group-hover:rotate-12 transition-transform" />
                Call Emergency: 084679 59423
              </a>
              <a href="https://wa.me/918467959423" className="btn btn-secondary w-full justify-center border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-4">
                <MessageCircle size={20} /> Chat with Vet First
              </a>
            </div>

            <p className="text-sm text-muted flex items-center justify-center gap-2">
              <ShieldCheck size={16} /> Licensed & Accredited Multi-Speciality Facility
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
