import { motion } from "framer-motion";
import { Building2, Calculator, LineChart, Users } from "lucide-react";

const services = [
  {
    icon: <Building2 size={28} />,
    title: "Abertura de Empresas",
    description: "Desburocratizamos o processo para você começar seu negócio com segurança e rapidez. Orientação completa sobre a melhor natureza jurídica.",
  },
  {
    icon: <Calculator size={28} />,
    title: "Planejamento Tributário",
    description: "Análise inteligente para reduzir legalmente a carga tributária da sua empresa. Estratégias alinhadas à legislação vigente.",
  },
  {
    icon: <LineChart size={28} />,
    title: "BPO Financeiro",
    description: "Terceirização da gestão financeira. Foque no seu core business enquanto cuidamos do seu fluxo de caixa e contas a pagar/receber.",
  },
  {
    icon: <Users size={28} />,
    title: "Gestão de Departamento Pessoal",
    description: "Cálculo de folha de pagamento, admissões, rescisões e gestão completa de benefícios com total conformidade trabalhista.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Soluções <span className="text-primary">Especializadas</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos um portfólio completo de serviços contábeis para garantir a saúde e o crescimento da sua empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-card p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(27,94,55,0.15)]"
            >
              {/* Subtle gradient bg on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
