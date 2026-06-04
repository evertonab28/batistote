import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { TechShowcase } from "@/components/sections/TechShowcase";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        {/* <TechShowcase /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
