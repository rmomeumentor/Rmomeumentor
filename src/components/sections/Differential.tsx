import { motion } from "motion/react";
import { Handshake } from "lucide-react";

export default function Differential() {
  return (
    <section id="diferencial" className="py-24 px-6 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="w-24 h-24 bg-brand-orange/10 border border-brand-orange/20 rounded-3xl mx-auto flex items-center justify-center text-brand-orange mb-8"
        >
          <Handshake size={48} />
        </motion.div>

        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="text-4xl md:text-6xl font-display font-bold mb-10"
        >
          O PRINCIPAL DIFERENCIAL:<br />
          <span className="text-orange-gradient italic">SOU EU AO SEU LADO.</span>
        </motion.h2>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
           className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto space-y-6"
        >
          <p>
            Minha mentoria é completa: entrego aulas gravadas estratégicas, sessões de diagnóstico e um plano de estudos real. Mas o grande diferencial é que eu pego na sua mão e te guio por cada etapa.
          </p>
          <p className="font-bold text-white">
            Você não terá apenas acesso a um portal de vídeos. Você terá a mim ao seu lado, garantindo que sua execução seja perfeita.
          </p>
        </motion.div>

        <motion.a 
          href="#oferta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-block mt-12 px-12 py-6 bg-white text-brand-black rounded-3xl font-bold text-lg hover:bg-brand-orange hover:text-white transition-all shadow-2xl"
        >
          Quero este acompanhamento exclusivo
        </motion.a>
      </div>
    </section>
  );
}
