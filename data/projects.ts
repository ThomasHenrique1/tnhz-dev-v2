import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "n-eplanos",
    slug: "sistema-de-leads",
    title: "Sistema de Gestao de Leads",
    shortDescription:
      "Plataforma para captacao, gerenciamento e distribuicao automatica de leads entre corretores.",

    description:
      "Aplicacao desenvolvida para facilitar a captacao e o gerenciamento de leads para venda e consultoria de planos de saude. O sistema automatiza a distribuicao entre corretores e inclui regras para redistribuicao de leads que nao recebem atendimento.",

    cover: "/projects/sistema-de-leads/cover.png",
    logo: "/projects/sistema-de-leads/logo.png",
    preview: "/projects/sistema-de-leads/preview.png",
    color: "#2563eb",

    technologies: ["Next.js", "React", "TypeScript", "Supabase"],

    github: "https://github.com/ThomasHenrique1/n-eplanos",
    live: "https://nehassociados.vercel.app",

    featured: true,
  },

  {
    id: "tecnoz-hub",
    slug: "tecnozhub",
    title: "TecnozHub",
    shortDescription:
      "E-commerce de hardware com autenticacao, carrinho persistente, painel administrativo e gerenciamento de pedidos.",

    description:
      "Aplicacao Full Stack de e-commerce desenvolvida para gerenciamento e venda de produtos de hardware. Possui catalogo, carrinho persistente, autenticacao, upload de imagens e uma area administrativa para gerenciamento de produtos e pedidos.",

    cover: "/projects/tecnozhub/cover.png",
    logo: "/projects/tecnozhub/logo.png",
    preview: "/projects/tecnozhub/preview.png",
    color: "#f97316",

    technologies: [
      "Next.js",
      "React",
      "Supabase",
      "Tailwind CSS",
      "DaisyUI",
    ],

    github: "https://github.com/ThomasHenrique1/tecnoz-hub",

    featured: true,
  },

  {
    id: "barber-hub",
    slug: "barberhub",
    title: "BarberHub",
    shortDescription:
      "Plataforma Full Stack para gerenciamento de clientes, profissionais, servicos e agendamentos de uma barbearia.",

    description:
      "Aplicacao web Full Stack desenvolvida para centralizar a gestao de uma barbearia. A plataforma possui areas separadas para administracao e clientes, incluindo gerenciamento de profissionais, servicos, agendamentos, pagamentos e autenticacao.",

    cover: "/projects/barberhub/cover.png",
    logo: "/projects/barberhub/logo.png",
    preview: "/projects/barberhub/preview.png",
    color: "#a16207",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "JWT",
    ],

    github: "https://github.com/ThomasHenrique1/barber-saas",

    featured: true,
  },
];