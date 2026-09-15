export default function Profile() {
  return (
    <section
      id="sobre"
      className="w-full px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div>
            <span className="text-sm uppercase tracking-[0.2em]">
              Sobre mim
            </span>

            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Sempre fui curioso com tecnologia. Hoje, transformo essa
              curiosidade em coisas que posso construir.
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-relaxed opacity-70 sm:text-lg">
              <p>
                Olá, eu sou o Thomas.
              </p>

              <p>
                Gosto de entender como as coisas funcionam, explorar
                possibilidades e transformar ideias em algo que realmente
                funciona. Foi essa curiosidade que me aproximou cada vez mais
                da tecnologia e acabou me levando à Ciência da Computação.
              </p>

              <p>
                No desenvolvimento, gosto de ir além da interface e entender
                como uma aplicação funciona como um todo. Gosto de pegar uma
                ideia, entender o problema e descobrir o que é necessário para
                transformá-la em algo que possa ser utilizado de verdade.
              </p>

              <p>
                Grande parte do que aprendo acontece enquanto construo. Gosto
                de experimentar tecnologias, testar abordagens diferentes e
                encontrar novas formas de resolver problemas. Cada projeto
                acaba sendo uma oportunidade para aprender algo novo e melhorar
                a forma como desenvolvo.
              </p>

              <p>
                Ao longo desse processo, já construí projetos envolvendo
                gerenciamento de leads, e-commerce e sistemas de agendamento,
                explorando diferentes tecnologias e desafios em cada um deles.
              </p>
            </div>
          </div>

          <div className="grid gap-8 border-t border-black/10 pt-8 lg:border-t-0 lg:border-l lg:pl-10">
            <div>
              <span className="text-sm font-medium opacity-50">01</span>

              <h3 className="mt-2 text-xl font-semibold">
                Formação
              </h3>

              <p className="mt-1 text-sm opacity-60">
                Ciência da Computação
              </p>
            </div>

            <div>
              <span className="text-sm font-medium opacity-50">02</span>

              <h3 className="mt-2 text-xl font-semibold">
                Foco
              </h3>

              <p className="mt-2 text-xl font-semibold">
                Desenvolvimento Full Stack
              </p>
            </div>

            <div>
              <span className="text-sm font-medium opacity-50">03</span>

              <h3 className="mt-2 text-xl font-semibold">
                Abordagem
              </h3>

              <p className="mt-1 text-sm opacity-60">
                Aprender construindo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}