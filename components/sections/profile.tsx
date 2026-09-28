const facts = [
  {
    number: "01",
    label: "Formação",
    value: "Ciência da Computação",
  },
  {
    number: "02",
    label: "Foco",
    value: "Desenvolvimento Full Stack",
  },
  {
    number: "03",
    label: "Abordagem",
    value: "Aprender construindo",
  },
];

export default function Profile() {
  return (
    <section
      id="sobre"
      className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.6fr] lg:items-start lg:gap-16">
          {/* Coluna principal */}
          <div>
            {/* Rótulo */}
            <div className="flex items-center gap-3">
              <span
                className="h-px w-6 bg-accent sm:w-8"
                aria-hidden="true"
              />

              <span className="text-xs uppercase tracking-[0.16em] text-text-secondary sm:text-sm sm:tracking-[0.2em]">
                Sobre mim
              </span>
            </div>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-text-primary sm:text-5xl">
              Sempre fui curioso com tecnologia. Hoje, transformo essa
              curiosidade em coisas que posso construir.
            </h2>

            <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-text-secondary sm:mt-10 sm:space-y-6 sm:text-lg">
              <p>
                Sou o Thomas, formado em Ciência da Computação e{" "}
                <strong className="font-medium text-text-primary">
                  desenvolvedor Full Stack
                </strong>
                . Gosto de entender como as coisas funcionam, explorar
                possibilidades e transformar ideias em algo que funciona de
                verdade.
              </p>

              <p>
                No desenvolvimento, gosto de ir além da interface e entender
                a aplicação como um todo — pegar uma ideia, entender o
                problema e descobrir o que é necessário para transformá-la em
                algo utilizável.
              </p>

              <p>
                <strong className="font-medium text-text-primary">
                  Aprendo principalmente construindo.
                </strong>{" "}
                Cada projeto é uma oportunidade de experimentar tecnologias,
                testar abordagens e melhorar a forma como desenvolvo — de
                gerenciamento de leads a e-commerce e sistemas de agendamento.
              </p>
            </div>
          </div>

          {/* Coluna lateral */}
          <div className="grid gap-7 border-t border-border-subtle pt-8 sm:gap-8 lg:border-l lg:border-t-0 lg:pl-10">
            {facts.map((fact) => (
              <div key={fact.number} className="group">
                <span className="text-sm font-medium tabular-nums text-text-muted transition-colors duration-300 group-hover:text-accent">
                  {fact.number}
                </span>

                <h3 className="mt-2 text-xs uppercase tracking-[0.15em] text-text-muted sm:text-sm">
                  {fact.label}
                </h3>

                <p className="mt-1 text-base font-medium text-text-primary sm:text-lg">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 