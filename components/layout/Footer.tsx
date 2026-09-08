import Link from "next/link";

import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="/" aria-label="Thomas Henrique - Inicio">
          TNHZ
        </Link>

        <p>{profile.name}</p>
      </div>

      <nav aria-label="Navegacao do rodape">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <p>
        © {new Date().getFullYear()}. Todos os direitos reservados.
      </p>
    </footer>
  );
}