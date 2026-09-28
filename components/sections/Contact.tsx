import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "@thomas-henrique12",
    href: "https://www.linkedin.com/in/thomas-henrique12/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    value: "@ThomasHenrique1",
    href: "https://github.com/ThomasHenrique1",
    icon: FiGithub,
  },
];

export default function Contact() {
  return (
    <section id="contato" className="w-full px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          {/* Coluna esquerda — título + CTA principal */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-sm uppercase tracking-[0.2em] text-text-secondary">
                Contato
              </span>
            </div>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-text-primary sm:text-6xl">
              Tem uma ideia?
              <br />
              Vamos construir.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
              Se você tem um projeto, uma oportunidade ou simplesmente quer
              trocar uma ideia sobre tecnologia, pode falar comigo.
            </p>

            {/* CTA principal — e-mail */}
            <a
              href="mailto:thomasnhenrique@gmail.com?subject=Contato%20via%20portf%C3%B3lio"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_24px_rgba(255,107,0,0.35)]"
            >
              <FiMail size={16} aria-hidden="true" />
              Enviar e-mail
              <FiArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <p className="mt-3 text-xs text-text-muted">
              ou escreva direto para{" "}
              <a
                href="mailto:thomasnhenrique@gmail.com"
                className="text-text-secondary underline-offset-4 transition-colors duration-300 hover:text-accent hover:underline"
              >
                thomasnhenrique@gmail.com
              </a>
            </p>
          </div>

          {/* Coluna direita — links secundários */}
          <div className="border-t border-border-subtle pt-8 lg:border-l lg:border-t-0 lg:pl-10">
            <span className="text-sm uppercase tracking-[0.15em] text-text-muted">
              Você também pode me encontrar em
            </span>

            <div className="mt-6 space-y-6">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 border-b border-border-subtle pb-4 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className="shrink-0 text-text-muted transition-colors duration-300 group-hover:text-accent"
                      />
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-[0.15em] text-text-muted">
                          {link.label}
                        </span>
                        <span className="text-base text-text-secondary transition-colors duration-300 group-hover:text-text-primary sm:text-lg">
                          {link.value}
                        </span>
                      </div>
                    </div>

                    <FiArrowUpRight
                      size={18}
                      className="shrink-0 text-text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}