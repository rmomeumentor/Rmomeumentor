import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="glass p-2 rounded-[32px] inline-block mb-8">
             <div className="bg-brand-orange/10 px-4 py-2 rounded-[24px]">
                <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">Quem está por trás do RM?</span>
             </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 italic">
            Meu nome é <span className="text-orange-gradient">Rômulo de Morais.</span>
          </h2>
          
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              Fui aprovado em <span className="text-white font-bold">2º lugar em Medicina na UFGD (Federal)</span> e também na Faculdade UniEvangélica com 100% de bolsa. Depois de dois anos intensos de cursinho, entendi na prática o que funciona e o que apenas consome tempo.
            </p>
            <p>
              Hoje, sou professor de Matemática e Naturezas em um dos melhores cursinhos da minha cidade e curso o 6º período de Medicina.
            </p>
            <p className="text-white font-medium bg-brand-orange/10 p-6 rounded-2xl border-l-4 border-brand-orange">
              Com mais de 3 anos de sala de aula e centenas de alunos orientados, criei o RM com um único objetivo: Entregar, em uma única mentoria, tudo o que um vestibulando precisa para alcançar sua aprovação, com clareza, estrutura e suporte emocional.
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 gap-4"
        >
          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-brand-orange/30 transition-all">
            <GraduationCap className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Aprovação</p>
            <p className="text-xl font-display font-bold">2º Lugar Medicina UFGD</p>
          </div>
          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-brand-orange/30 transition-all mt-8">
            <Award className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Bolsa 100%</p>
            <p className="text-xl font-display font-bold">UniEvangélica</p>
          </div>
          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-brand-orange/30 transition-all">
            <BookOpen className="text-brand-orange mb-4 group-hover:scale-110 transition-transform" size={40} />
            <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Docência</p>
            <p className="text-xl font-display font-bold">Professor Matemática/Naturezas</p>
          </div>
          <div className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:border-brand-orange/30 transition-all mt-8">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center rounded-lg text-white font-bold mb-4">RM</div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Pilar</p>
            <p className="text-xl font-display font-bold">Estratégia Pura</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
