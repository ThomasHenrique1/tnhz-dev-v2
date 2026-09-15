export default function Contact() {
  return (
    <section
      id="contato"
      className="w-full px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <div>
            <span className="text-sm uppercase tracking-[0.2em]">
              Contato
            </span>

            <h2 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">
              Tem uma ideia?
              <br />
              Vamos construir.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-relaxed opacity-60 sm:text-lg">
              Se você tem um projeto, uma oportunidade ou simplesmente quer
              trocar uma ideia sobre tecnologia, pode falar comigo.
            </p>
          </div>

          <div className="border-t border-black/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10">
            <div className="space-y-8">
              <a
                href="mailto:thomasnhenrique@gmail.com"
                className="group block"
              >
                <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                  E-mail
                </span>

                <div className="mt-2 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    thomasnhenrique@gmail.com
                  </span>

                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/thomas-henrique12/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                  LinkedIn
                </span>

                <div className="mt-2 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    Thomas Henrique
                  </span>

                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/ThomasHenrique1"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <span className="text-sm uppercase tracking-[0.15em] opacity-40">
                  GitHub
                </span>

                <div className="mt-2 flex items-center justify-between gap-4 border-b border-black/10 pb-3">
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
                    ThomasHenrique1
                  </span>

                  <span
                    className="text-lg transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-black/10 pt-8">
          <div className="flex flex-col gap-3 text-sm opacity-40 sm:flex-row sm:items-center sm:justify-between">
            <span>TNHZ-DEV</span>

            <span>
              Construindo, aprendendo e explorando tecnologia.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}