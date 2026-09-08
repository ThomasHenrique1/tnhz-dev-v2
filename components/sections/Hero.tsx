import Link from "next/link";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section>
      <div>
        <p>{profile.role}</p>

        <h1>
          Ola, eu sou
          <br />
          {profile.name}.
        </h1>

        <p>{profile.description}</p>

        <div>
          <Link href="/projects">Ver projetos</Link>

          <Link href="/contact">Entrar em contato</Link>
        </div>
      </div>
    </section>
  );
}