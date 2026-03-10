import { ArrowUp, Instagram, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/10 pb-12 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Batistote</h2>
            <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium mt-1">Organizações Contábeis</p>
            <p className="text-zinc-500 text-sm mt-4 max-w-xs">
              Excelência e inovação em serviços contábeis para empresas que buscam o topo.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Batistote Contabilidade. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-accent transition-all hover:-translate-y-1"
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
