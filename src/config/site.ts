interface SiteConfig {
  name: string
  description: string
  links: {
    twitter: string
    twitterShadcn: string
    linkedin: string
    github: string
  }
}

interface siteTechs {
  name: string
  description: string
  link: string
  image: string
}

export const siteConfig: SiteConfig = {
  name: 'The Movie DB',
  description:
    'The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.',
  links: {
    twitter: 'https://twitter.com/shadcn',
    twitterShadcn: 'https://twitter.com/shadcn',
    linkedin: 'https://www.linkedin.com/in/iury-franca-37873318b/',
    github: 'https://github.com/iuryfranca',
  },
}

export const siteTechs: siteTechs[] = [
  {
    name: '@nextjs',
    // description: 'The React Framework – created and maintained by @vercel.',
    description: 'O React Framework – criado e mantido por @vercel.',
    link: 'https://nextjs.org/',
    image: 'https://github.com/vercel.png',
  },
  {
    name: '@tailwindcss',
    description:
      // 'A utility-first CSS framework packed with classes like flex, pt-4 and text-center that can be composed to build any design.',
      'Uma estrutura CSS baseada em utilitários, repleta de classes como flex, pt-4 e text-center, que podem ser compostas para criar qualquer design.',
    link: 'https://tailwindcss.com/',
    image: 'https://github.com/tailwindcss.png',
  },
  {
    name: '@lucide-icons',
    // description: 'Open-source project and a fork of Feather Icons.',
    description: 'Projeto open source aberto e uma variação do Feather Icons.',
    link: 'https://lucide.dev/',
    image: 'https://github.com/lucide-icons.png',
  },
  {
    name: '@vuex',
    // description: 'Open-source project and a fork of Feather Icons.',
    description: 'Responsável pelo gerenciamento de estado feito no vuejs',
    link: 'https://github.com/vuejs/vuex',
    image: 'https://github.com/vuejs.png',
  },
  {
    name: '@firebase',
    // description: 'Open-source project and a fork of Feather Icons.',
    description:
      'Conjunto de serviços que oferece NoSQL e hospedagem em tempo real de bancos de dados, conteúdo, autenticação social e notificações ou serviços.',
    link: 'https://firebase.google.com/',
    image: 'https://github.com/firebase.png',
  },
]
