import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
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
            className="lg:col-span-2 h-full"
          >
            <div className="bg-primary dark:glass p-8 rounded-2xl h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/70 dark:bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">Nosso Escritório</p>
                    <p className="text-white text-sm mt-1 leading-relaxed">
                      R. Riachuelo, 354 - Centro<br />
                      Naviraí / MS<br />
                      CEP: 79947-106
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/70 dark:bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">Telefone / WhatsApp</p>
                    <p className="text-white text-sm mt-1">(67) 3461-4266</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/70 dark:bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-black text-white text-lg">E-mail</p>
                    <p className="text-white text-sm mt-1">contato@batistote.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 h-full"
          >
            <div className="border-8 border-primary rounded-2xl h-full min-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.87485220744!2d-54.2030671129126!3d-23.065049289756857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x948b8f3196a5b6fb%3A0x498995025a3774c4!2sBatistote%20Organiza%C3%A7%C3%B5es%20Cont%C3%A1beis!5e0!3m2!1spt-BR!2sbr!4v1773251169829!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px", borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}