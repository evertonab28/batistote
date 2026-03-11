import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Substitua pelo número real da empresa (Apenas números, com DDI e DDD)
  // Exemplo baseado no seu Contact.tsx: 55 + 67 + telefone
  const phoneNumber = "556734610000"; 
  const message = "Olá! Gostaria de mais informações sobre os serviços contábeis.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20bd5a] transition-colors cursor-pointer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        delay: 1.5 // Atrasa um pouco para não competir com a animação da Hero
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} fill="white" className="text-white mr-1" />
      WhatsApp
    </motion.a>
  );
}