import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden px-6">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-orange/5 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            Vagas Limitadas para 2026
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6">
            Domine a sua <span className="text-orange-gradient">estratégia</span> de estudos e conquiste a sua vaga.
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            Entenda exatamente como organizar sua rotina, superar a falta de foco e transformar sua dificuldade em aprendizado real. Sem métodos genéricos, apenas o caminho direto para a aprovação.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#oferta" className="w-full sm:w-auto px-8 py-5 btn-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2">
              Garantir minha mentoria
              <ChevronRight size={20} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <p className="text-sm text-white/40 italic">
              O caminho direto para a sua aprovação, desenhado por quem vive o dia a dia da medicina.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:block"
        >
          <div className="relative aspect-[4/5] flex items-end justify-center">
            {/* Background Glow specifically behind the person */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-brand-orange/20 blur-[100px] rounded-full opacity-40 pointer-events-none" />
            
            <img 
              src="https://fgnrufheqhdteqgxmngd.supabase.co/storage/v1/object/sign/storage/IMG_1939.PNG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMDdmNzZhNi0zZGJjLTQ5NWItODgxMy1hMjI4MDJlM2I5NDgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzdG9yYWdlL0lNR18xOTM5LlBORyIsImlhdCI6MTc3ODExMTU4OCwiZXhwIjoxOTM1NzkxNTg4fQ.Eb2Krqd5YCA0_NarSE-yEMZu2laBq3FQMdCJFHFyKa0" 
              alt="RM Mentor" 
              className="relative z-10 w-full h-auto max-h-[130%] object-contain drop-shadow-[0_0_40px_rgba(255,99,33,0.4)]"
              style={{ 
                maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
              }}
            />
            
            {/* Background Chess Piece Icon */}
            <div className="absolute right-0 top-1/4 opacity-10 font-serif italic text-[140px] text-white pointer-events-none select-none z-0">
              ♞
            </div>

            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-0 glass-orange p-6 rounded-2xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white italic font-serif text-2xl">
                  ♔
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Estratégia</p>
                  <p className="text-lg font-bold leading-none">Personalizada</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -left-6 glass px-8 py-6 rounded-3xl border-brand-orange/30 z-20 shadow-orange-glow">
            <p className="text-3xl font-display font-bold text-brand-orange">4+</p>
            <p className="text-xs font-bold text-white/50 uppercase tracking-tighter shadow-sm">Anos ajudando alunos <br/>a conquistarem seus sonhos</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
