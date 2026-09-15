export default function Footer() {
  return (
    <footer className="w-full px-6 pb-8 pt-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-black/10 pt-10">
          <div className="grid gap-12 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
            <div>
              <span className="text-2xl font-semibold">
                TNHZ-DEV
              </span>

              <p className="mt-3 max-w-sm text-sm leading-relaxed opacity-50">
                Desenvolvedor Full Stack construindo, aprendendo e explorando
                tecnologia.
              </p>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                Navegação
              </span>

              <nav className="mt-4 flex flex-col gap-3">
                <a
                  href="#projetos"
                  className="w-fit text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Projetos
                </a>

                <a
                  href="#sobre"
                  className="w-fit text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Sobre mim
                </a>

                <a
                  href="#stack"
                  className="w-fit text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Stack
                </a>

                <a
                  href="#contato"
                  className="w-fit text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  Contato
                </a>
              </nav>
            </div>

            <div>
              <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                Links
              </span>

              <nav className="mt-4 flex flex-col gap-3">
                <a
                  href="https://github.com/ThomasHenrique1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  GitHub
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/thomas-henrique12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm opacity-60 transition-opacity duration-300 hover:opacity-100"
                >
                  LinkedIn
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-black/10 pt-6 text-xs opacity-40 sm:flex-row sm:items-center sm:justify-between">
            <span>©{new Date().getFullYear()} Thomas Henrique</span>
          </div>
        </div>
      </div>
    </footer>
  );
}