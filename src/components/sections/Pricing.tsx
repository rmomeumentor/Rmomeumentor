import { motion } from "motion/react";
import { Check, Star, ShieldCheck } from "lucide-react";

export default function Pricing() {
  return (
    <section id="oferta" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 italic text-white">FAÇA A SUA JOGADA.</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-1 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 group mb-4 shadow-orange-glow"
          >
            <div className="px-8 py-4 glass-orange rounded-xl flex items-center gap-3">
              <ShieldCheck className="text-brand-orange" size={32} />
              <div className="text-left">
                <p className="text-brand-orange font-black text-xl md:text-2xl leading-tight uppercase tracking-tighter">Garantia Total de 7 Dias</p>
                <p className="text-white/60 text-sm font-medium">Satisfação garantida ou seu dinheiro de volta.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Main Card */}
          <div className="glass-orange rounded-[48px] p-12 lg:p-16 relative z-10 border-brand-orange/40 shadow-2xl shadow-brand-orange/10 overflow-hidden">
             {/* Glows */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 blur-[100px] -ml-32 -mb-32 rounded-full" />

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="order-2 lg:order-1">
                  <h3 className="text-3xl font-display font-bold mb-8">O que você recebe:</h3>
                  <ul className="space-y-5">
                    {[
                      "Mentoria Individual (2 Sessões)",
                      "Aulas Gravadas de Estratégia",
                      "Plano de Estudos Customizado",
                      "Suporte WhatsApp até a Prova",
                      "Ajustes de Rotina Estratégicos",
                      "Checklists de Produtividade"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-white">
                        <div className="w-6 h-6 rounded-full bg-brand-orange flex items-center justify-center shrink-0">
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="font-medium text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="order-1 lg:order-2 bg-white/5 rounded-[32px] p-10 border border-white/10 text-center relative overflow-hidden group">
                   <div className="absolute inset-0 bg-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                   
                   <p className="text-white/40 line-through text-xl mb-2 font-medium">De R$ 997,00</p>
                   <p className="text-brand-orange text-sm font-bold uppercase tracking-widest mb-6 px-4 py-1.5 bg-brand-orange/10 rounded-full inline-block">
                     Oferta por Tempo Limitado
                   </p>
                   
                   <div className="mb-8">
                     <p className="text-white/60 text-sm uppercase font-bold mb-1">Por apenas</p>
                     <p className="text-5xl md:text-7xl font-display font-bold text-white">R$ 197,00</p>
                     <p className="text-brand-orange mt-2 font-black italic text-xl">ou 12x de R$ 20,37</p>
                   </div>

                   <a 
                     href="https://pay.hotmart.com/F105723724A"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full py-6 btn-primary rounded-2xl font-black text-xl mb-6 flex items-center justify-center"
                   >
                     GARANTIR MINHA VAGA
                   </a>

                   <div className="flex items-center justify-center gap-2 text-white/40 text-xs font-bold uppercase">
                     <ShieldCheck size={16} />
                     Pagamento 100% Seguro
                   </div>
                </div>
             </div>
          </div>

          {/* Social Proof floating elements */}
          <div className="absolute -top-10 -right-10 glass px-6 py-4 rounded-2xl hidden md:flex items-center gap-3 border-brand-orange/30 z-20">
             <Star className="text-brand-orange fill-brand-orange" size={20} />
             <p className="text-sm font-bold">Vagas Preenchendo Rápido</p>
          </div>
          {/* WhatsApp Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 glass p-8 rounded-[32px] border-white/10 text-center max-w-2xl mx-auto"
          >
            <p className="text-white/60 mb-4 font-medium">Ficou com alguma dúvida sobre a mentoria?</p>
            <a 
              href="https://wa.me/5562991127094?text=Ol%C3%A1%20tenho%20interesse%20na%20sua%20mentoria!!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] rounded-2xl font-bold hover:bg-[#25D366]/20 transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.43 5.623 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Tirar dúvidas no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
