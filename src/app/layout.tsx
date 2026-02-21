import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileEmergencyDock from "@/components/MobileEmergencyDock";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pet Life Multi Speciality Clinic | Expert Vet Care in Jaitpur, Delhi",
  description: "Pet Life Multi Speciality Clinic offers compassionate and professional veterinary care in South Delhi. Specialized in dogs, cats, rabbits, and small pets. Emergency care available.",
  keywords: "veterinary clinic delhi, pet clinic jaitpur, dog treatment, cat vet, rabbit care delhi, emergency vet delhi, vaccinations, parvo treatment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileEmergencyDock />

        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/918467959423"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-label">💬 Chat with Vet</span>
          <MessageCircle size={32} />
        </a>
      </body>
    </html>
  );
}
