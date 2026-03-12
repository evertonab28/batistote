import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Subtle grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center mt-12 md:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground/90 text-xs font-medium mb-8 uppercase tracking-wider backdrop-blur-sm"
        >
          <Zap size={14} className="text-primary" />
          <span className="text-black dark:text-white">Tradição aliada à Inovação</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl leading-[1.1]"
        >
          Inteligência Contábil para o <br className="hidden md:block" />
          <span className="text-primary">Sucesso do seu Negócio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl font-light"
        >
          Atendimento personalizado em Naviraí/MS com tecnologia de ponta. 
          Transformamos dados complexos em decisões estratégicas claras.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-primary text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(27,94,55,0.4)] hover:shadow-[0_0_30px_rgba(27,94,55,0.6)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative flex items-center gap-2">
              Agende uma Consulta <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl border border-primary dark:border-white/20 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(27,94,55,0.6)] dark:hover:bg-white/5 text-black dark:text-white font-medium transition-all"
          >
            Nossos Serviços
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground w-full max-w-3xl"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <span>Segurança Jurídica</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <span>Conformidade Fiscal</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-primary" />
            <span>Suporte Humanizado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
