import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center font-bold">RM</div>
            <span className="font-display font-bold text-lg tracking-tight">O MEU <span className="text-brand-orange">MENTOR</span></span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed">
            Estratégia hacker para aprovação nos vestibulares mais difíceis do Brasil. O foco não é estudar mais, é estudar com inteligência.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center md:items-end">
          <div className="flex gap-4">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/romulomoraisf?igsh=MWoxYXc4cTNuMGhlMw%3D%3D&utm_source=qr" }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all border-white/10"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
            © 2026 RM O MEU MENTOR. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
