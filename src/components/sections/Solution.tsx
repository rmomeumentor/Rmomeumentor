import { motion } from "motion/react";
import { Video, Target, MessageCircle, Crown, Zap, Shield } from "lucide-react";

// Mock for Chess Icons to represent Strategy
const ChessKing = () => (
   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M11.5 15.5h1" />
    <path d="M10.3 12.3A4.4 4.4 0 0 0 7.2 17a1 1 0 0 0 .8 1h8a1 1 0 0 0 .8-1 4.4 4.4 0 0 0-3.1-4.7" />
    <path d="M11.5 11.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0ZM13.5 11.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0ZM11.5 13.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0ZM13.5 13.5a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0Z" />
    <path d="M11 3a2 2 0 1 0 2 2" />
    <path d="m11.5 5 1-1m-1 0 1 1" />
    <path d="M6 10a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2Z" />
    <path d="M12 5V3" />
    <path d="M10 4h4" />
  </svg>
);

const solutions = [
  {
    icon: Video,
    strategyIcon: "Rei",
    title: "Aulas de Diagnóstico e Alinhamento",
    description: "Duas sessões individuais via vídeo para montar sua solução personalizada e ajustar seus passos após a aplicação.",
    tag: "O Início da Estratégia"
  },
  {
    icon: Target,
    strategyIcon: "Cavalo",
    title: "Mentoria de Mentalidade e Execução",
    description: "Vou te ensinar a organizar sua rotina e blindar sua mente contra distrações, unindo sessões ao vivo com aulas gravadas de reforço.",
    tag: "Acelerador de Resultados"
  },
  {
    icon: Video,
    strategyIcon: "Bispo",
    title: "Biblioteca de Estratégias (Gravada)",
    description: "Acesso a aulas exclusivas sobre gestão de tempo, técnicas de estudo e revisão ativa para assistir quando quiser.",
    tag: "Conteúdo sob Demanda"
  },
  {
    icon: MessageCircle,
    strategyIcon: "Torre",
    title: "Acompanhamento VIP (WhatsApp)",
    description: "Direto comigo até o dia da prova. Ajustes de cronograma, listas e suporte total na palma da sua mão.",
    tag: "Suporte 24/7"
  }
];

export default function Solution() {
  return (
    <section id="solução" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Plano de Ação
            </motion.p>
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              SUA JORNADA PARA O <br />
              <span className="text-orange-gradient">TOPO DO TABULEIRO.</span>
            </h2>
          </div>
          <div className="hidden md:block">
             <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-orange/20 rounded-lg flex items-center justify-center text-brand-orange">
                  <Crown size={20} />
                </div>
                <p className="text-sm font-medium leading-tight">
                  Construindo o seu <br />
                  <span className="font-bold">Legado Acadêmico</span>
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row gap-8 items-center glass p-8 lg:p-12 rounded-[40px] group hover:bg-white/10 transition-all"
            >
              <div className="lg:order-2 flex-grow">
                 <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                   {sol.tag}
                 </span>
                 <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 italic group-hover:text-brand-orange transition-colors">
                   {sol.title}
                 </h3>
                 <p className="text-xl text-white/50 leading-relaxed max-w-2xl">
                   {sol.description}
                 </p>
              </div>
              
              <div className="lg:order-1 shrink-0">
                <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-[32px] bg-brand-orange flex items-center justify-center shadow-2xl shadow-brand-orange/30 group-hover:rotate-6 transition-transform duration-500">
                  <sol.icon size={64} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
