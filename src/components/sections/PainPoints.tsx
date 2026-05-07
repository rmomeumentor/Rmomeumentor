import { motion } from "motion/react";
import { Brain, Clock, Users, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Brain,
    title: "Falta de Foco",
    description: "Horas na frente dos livros sem conseguir absorver o conteúdo. Sua mente divaga e o rendimento é quase zero.",
  },
  {
    icon: Clock,
    title: "Ciclo da Desorganização",
    description: "O conteúdo acumula, a ansiedade cresce e você se sente perdido no cronograma. O tempo escorre pelas mãos.",
  },
  {
    icon: Users,
    title: "Solidão e Dúvida",
    description: "Tentar mudar sozinho há tempos sem saber se está no caminho certo. A incerteza é o seu maior inimigo.",
  },
  {
    icon: ShieldAlert,
    title: "Procrastinação por Medo",
    description: "Você adia o estudo por medo de descobrir que ainda não sabe o suficiente, entrando num ciclo de culpa constante.",
  },
  {
    icon: Brain,
    title: "Gestão Emocional Frágil",
    description: "Qualquer simulado ruim te desestabiliza por dias, fazendo você perder o ritmo e a confiança na sua aprovação.",
  },
  {
    icon: Clock,
    title: "Estudo Sem Retenção",
    description: "Você lê e assiste aulas, mas quando chega no exercício, parece que nunca viu a matéria. Falta método de revisão.",
  },
];

export default function PainPoints() {
  return (
    <section id="problemas" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-brand-orange mb-4"
          >
            <ShieldAlert size={20} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">O Sistema Falhou</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            O MODELO ANTIGO ESTÁ QUEBRADO.<br />
            <span className="text-white/40 italic">VOCÊ SENTE QUE SEU ESTUDO NÃO RENDE?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[32px] group hover:border-brand-orange/30 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-orange/10 transition-all duration-500">
                <prob.icon className="text-brand-orange" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-display italic tracking-tight">{prob.title}</h3>
              <p className="text-white/50 leading-relaxed text-lg">
                {prob.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
