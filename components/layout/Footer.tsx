import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre mim", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ThomasHenrique1", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thomas-henrique12/",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-bg-secondary px-6 pb-8 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-border-subtle pt-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
            {/* Coluna 1 — Logo + descrição */}
            <div>
              <Link
                href="#home"
                aria-label="Thomas Henrique - Inicio"
                className="group inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-90"
              >
                <Image
                  src="/favicon.png"
                  alt="TNHZ-DEV"
                  width={120}
                  height={60}
                  className="h-auto w-20 object-contain sm:w-24"
                />

              </Link>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
                Desenvolvedor Full Stack construindo, aprendendo e explorando
                tecnologia.
              </p>
            </div>

            {/* Coluna 2 — Navegação */}
            <div>
              <span className="text-sm uppercase tracking-[0.15em] text-text-muted">
                Navegação
              </span>

              <nav className="mt-4 flex flex-col gap-3">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative w-fit text-sm text-text-secondary transition-colors duration-300 hover:text-text-primary"
                  >
                    {item.label}
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Coluna 3 — Links externos com ícones */}
            <div>
              <span className="text-sm uppercase tracking-[0.15em] text-text-muted">
                Links
              </span>

              <nav className="mt-4 flex flex-col gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex w-fit items-center gap-2 text-sm text-text-secondary transition-colors duration-300 hover:text-accent"
                    >
                      {/* Ícone da plataforma */}
                      <Icon size={16} className="shrink-0" />

                      {item.label}

                      {/* Seta que desliza no hover */}
                      <FiArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Rodapé final */}
          <div className="mt-16 flex flex-col gap-3 border-t border-border-subtle pt-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Thomas Henrique</span>

            <span className="flex items-center gap-1.5">
              Feito com
              <span className="text-accent">Next.js</span>
              <span className="opacity-30">•</span>
              <span className="text-accent">Tailwind</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}