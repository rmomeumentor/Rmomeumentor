import { motion } from "motion/react";
import { XCircle, CheckCircle2, MoveRight } from "lucide-react";

export default function Comparison() {
  return (
    <section id="comparativo" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Path A */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] glass relative overflow-hidden group border-l-4 border-l-red-500/30"
          >
            <div className="absolute bottom-4 right-4 opacity-5 text-8xl pointer-events-none select-none font-serif">
              ☠
            </div>
            
            <span className="text-sm font-bold text-red-400 uppercase tracking-widest mb-4 block">Sem Direção</span>
            <h3 className="text-3xl font-display font-bold mb-8">Estudar sem método</h3>
            
            <ul className="space-y-6">
              {[
                "Acúmulo constante de matéria",
                "Notas estagnadas ou baixas",
                "Desespero total pré-prova",
                "Estudar sem saber por onde começar"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white/50">
                  <XCircle className="text-red-500/50 shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Path B */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[40px] glass-orange relative overflow-hidden group border-l-4 border-l-brand-orange"
          >
             <div className="absolute -inset-1 opacity-20 bg-brand-orange blur-3xl rounded-full" />
             
            <div className="absolute bottom-4 right-4 opacity-10 text-8xl pointer-events-none select-none text-brand-orange font-serif">
              ♔
            </div>
            
            <span className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-4 block relative z-10">Com RM Mentor</span>
            <h3 className="text-3xl font-display font-bold mb-8 relative z-10">Estudar com Estratégia</h3>
            
            <ul className="space-y-6 relative z-10">
              {[
                "Rotina blindada e ultra produtiva",
                "Evolução constante nos simulados",
                "Acompanhamento individual VIP",
                "Clareza total do seu próximo passo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white">
                  <CheckCircle2 className="text-brand-orange shrink-0 mt-1" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-12 w-full py-5 btn-primary rounded-2xl font-bold flex items-center justify-center gap-2">
              Escolher a Estratégia Vencedora
              <MoveRight size={20} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
