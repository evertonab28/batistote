import { motion } from "framer-motion";
import { Smartphone, BellDot, FileText, PieChart, LineChart, Users, ShieldCheck } from "lucide-react";

export function TechShowcase() {
  return (
    <section id="tech" className="py-32 bg-slate-50 dark:bg-charcoal/50 border-y border-white/5 relative overflow-hidden">
      {/* Decorative blurry orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-white/5 text-sm font-medium mb-6">
              <Smartphone size={16} className="text-primary" />
              <span className="text-black dark:text-white">Batistote App</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              A contabilidade na palma da sua <span className="text-primary">mão.</span>
            </h2>
            
            <p className="text-lg text-black dark:text-muted-foreground mb-8">
              Esqueça a papelada. Com nosso aplicativo exclusivo, você tem acesso em tempo real a todas as informações financeiras e fiscais do seu negócio, onde quer que esteja.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <PieChart size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary dark:text-white">Dashboards Intuitivos</h4>
                  <p className="text-sm text-black dark:text-muted-foreground mt-1">Visualize faturamento, despesas e impostos em gráficos fáceis de entender.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FileText size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary dark:text-white">Documentos em Nuvem</h4>
                  <p className="text-sm text-black dark:text-muted-foreground mt-1">Acesse guias, recibos e contratos com um toque, armazenados com total segurança.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BellDot size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary dark:text-white">Notificações Inteligentes</h4>
                  <p className="text-sm text-black dark:text-muted-foreground mt-1">Seja avisado sobre vencimentos de impostos e pendências antes que se tornem problemas.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-md lg:max-w-none flex justify-center relative"
          >
            {/* Phone Frame */}
            <div className="relative w-[300px] h-[600px] bg-black border-[6px] border-zinc-800 rounded-[3rem] shadow-[0_0_50px_rgba(27,94,55,0.5)] overflow-hidden">
              {/* Dynamic Island Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20"></div>
              
              {/* Mockup UI Inner Screen */}
              <div className="absolute inset-0 bg-zinc-950 p-6 pt-14 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-zinc-400">Olá, João</p>
                    <p className="text-sm font-bold text-white">Sua Empresa LTDA</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <BellDot size={14} />
                  </div>
                </div>

                {/* Main Card */}
                <div className="bg-gradient-to-br from-primary to-accent p-5 rounded-2xl text-white shadow-lg">
                  <p className="text-xs text-white/80 mb-1">Faturamento Mensal</p>
                  <p className="text-2xl font-bold">R$ 145.200,00</p>
                  <div className="mt-4 flex items-center gap-2 text-xs bg-black/20 w-fit px-2 py-1 rounded">
                    <LineChart size={12} /> +12% vs mês anterior
                  </div>
                </div>

                {/* Mini Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-zinc-900 p-4 rounded-xl border border-white/5">
                    <FileText size={18} className="text-zinc-400 mb-2" />
                    <p className="text-xs text-zinc-500">Impostos a Pagar</p>
                    <p className="text-sm font-bold text-white mt-1">2 Guias</p>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-xl border border-white/5">
                    <Users size={18} className="text-zinc-400 mb-2" />
                    <p className="text-xs text-zinc-500">Folha de Pgto</p>
                    <p className="text-sm font-bold text-emerald-400 mt-1">Processada</p>
                  </div>
                </div>

                {/* List skeleton */}
                <div className="mt-2 space-y-3">
                  <p className="text-xs font-semibold text-zinc-400">Atividades Recentes</p>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between bg-zinc-900 p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-zinc-800" />
                        <div>
                          <div className="w-20 h-2 bg-zinc-700 rounded mb-1" />
                          <div className="w-12 h-2 bg-zinc-800 rounded" />
                        </div>
                      </div>
                      <div className="w-4 h-4 rounded-full border border-zinc-700" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Element behind phone */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -right-10 bg-zinc-900 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 hidden md:flex"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-white">CND Emitida</p>
                <p className="text-xs text-zinc-400">Há 5 minutos</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
