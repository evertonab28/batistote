import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeProvider";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "Serviços", href: "#services" },
    { name: "Tecnologia", href: "#tech" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-4 dark:bg-black dark:glass" : "bg-transparent py-6"
      }`}

      //isScrolled ? "glass py-4" : "bg-white py-6"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo('#home')}
        >
          <div className="h-12 w-auto transition-all duration-300">
            <img 
              src={`${import.meta.env.BASE_URL}Logo-BATISTOTE.png`} 
              alt="Logo Batistote" 
              className="w-full h-full object-contain dark:hidden" 
            />
            {/* Logo para Tema Escuro (Certifique-se que esse arquivo existe na pasta public) */}
            <img 
              src={`${import.meta.env.BASE_URL}Logo-BATISTOTE_white.png`} 
              alt="Logo Batistote Dark" 
              className="w-full h-full object-contain hidden dark:block" 
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href)}
              className="text-sm text-black dark:text-white font-medium hover:text-foreground transition-colors relative group"
              data-testid={`link-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <ThemeToggle />
          <button 
            onClick={() => scrollTo('#contact')}
            className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-primary/30 dark:border-white/20 text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_15px_rgba(27,94,55,0.3)] hover:border-primary/50 text-foreground dark:text-white"
            data-testid="button-contact"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Menu Toggle & Theme */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground py-2"
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('#contact')}
                className="mt-4 px-6 py-3 rounded-lg bg-primary dark:bg-blue-600 text-white font-semibold flex justify-center"
                data-testid="button-contact-mobile"
              >
                Fale Conosco
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
