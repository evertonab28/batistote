import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const { mutate, isPending } = useSubmitContact();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setIsSuccess(true);
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Entraremos em contato em breve.",
        });
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Erro ao enviar",
          description: error.message,
        });
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Fale com um <span className="text-primary">Especialista</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pronto para transformar a gestão contábil da sua empresa? Preencha o formulário e nossa equipe entrará em contato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Nosso Escritório</p>
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      Av. Dourados, 123 - Centro<br />
                      Naviraí / MS<br />
                      CEP: 79950-000
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefone / WhatsApp</p>
                    <p className="text-muted-foreground text-sm mt-1">(67) 3461-0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">E-mail</p>
                    <p className="text-muted-foreground text-sm mt-1">contato@batistote.com.br</p>
                  </div>
                </div>
              </div>
              
              {/* map graphic placeholder */}
              <div className="mt-8 h-32 w-full bg-zinc-900 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center opacity-50 group hover:opacity-100 transition-opacity cursor-pointer">
                {/* stylized map background dark mode Naviraí */}
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop" 
                  alt="Map Location" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative flex items-center gap-2 text-white font-medium text-sm">
                  <MapPin size={16} className="text-primary" /> Ver no Mapa
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Nome Completo *</label>
                  <input 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="João Silva"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">E-mail *</label>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="joao@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Telefone / WhatsApp *</label>
                <input 
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="(67) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Mensagem *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Como podemos ajudar sua empresa?"
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending || isSuccess}
                className="w-full bg-primary hover:bg-accent text-white font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {isPending ? (
                  <><Loader2 size={20} className="animate-spin" /> Enviando...</>
                ) : isSuccess ? (
                  <><CheckCircle2 size={20} /> Mensagem Enviada</>
                ) : (
                  <><Send size={20} /> Enviar Mensagem</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
