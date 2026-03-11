import { ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-border pb-12 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Batistote</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mt-1">Organizações Contábeis</p>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Excelência e inovação em serviços contábeis para empresas que buscam o topo.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all" data-testid="link-instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all" data-testid="link-linkedin">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/50 transition-all" data-testid="link-facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Batistote Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-accent transition-all hover:-translate-y-1"
        aria-label="Voltar ao topo"
        data-testid="button-back-to-top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
