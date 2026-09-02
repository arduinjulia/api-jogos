const jogos = [
  {
    id: 1,
    nome: "The Legend of Zelda: Breath of the Wild",
    tipo: "Aventura",
    nota: 10,
    review: "Uma obra-prima que redefiniu jogos de mundo aberto.",
    anoLancamento: 2017,
    desenvolvedora: "Nintendo",
    plataformas: ["Nintendo Switch", "Wii U"],
    preco: 59.99
  },
  {
    id: 2,
    nome: "The Witcher 3: Wild Hunt",
    tipo: "RPG",
    nota: 9.8,
    review: "Narrativa impecável e mundo vasto e imersivo.",
    anoLancamento: 2015,
    desenvolvedora: "CD Projekt Red",
    plataformas: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 39.99
  },
  {
    id: 3,
    nome: "Red Dead Redemption 2",
    tipo: "Ação",
    nota: 9.9,
    review: "Um épico sobre o fim do velho oeste com detalhes absurdos.",
    anoLancamento: 2018,
    desenvolvedora: "Rockstar Games",
    plataformas: ["PC", "PS4", "Xbox One"],
    preco: 59.99
  },
  {
    id: 4,
    nome: "Hollow Knight",
    tipo: "Metroidvania",
    nota: 9.5,
    review: "Excelente design de mapa, combate desafiador e trilha sonora marcante.",
    anoLancamento: 2017,
    desenvolvedora: "Team Cherry",
    plataformas: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 14.99
  },
  {
    id: 5,
    nome: "God of War",
    tipo: "Ação",
    nota: 9.7,
    review: "Reboot fantástico da série, focado em narrativa e combate brutal.",
    anoLancamento: 2018,
    desenvolvedora: "Santa Monica Studio",
    plataformas: ["PC", "PS4"],
    preco: 49.99
  },
  {
    id: 6,
    nome: "Super Mario Odyssey",
    tipo: "Plataforma",
    nota: 9.6,
    review: "Alegria em forma de jogo, com dezenas de mecânicas inovadoras.",
    anoLancamento: 2017,
    desenvolvedora: "Nintendo",
    plataformas: ["Nintendo Switch"],
    preco: 59.99
  },
  {
    id: 7,
    nome: "Elden Ring",
    tipo: "RPG",
    nota: 9.8,
    review: "A fórmula Souls-like perfeitamente adaptada para mundo aberto.",
    anoLancamento: 2022,
    desenvolvedora: "FromSoftware",
    plataformas: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S"],
    preco: 59.99
  },
  {
    id: 8,
    nome: "Stardew Valley",
    tipo: "Simulação",
    nota: 9.4,
    review: "Relaxante, profundo e extremamente viciante.",
    anoLancamento: 2016,
    desenvolvedora: "ConcernedApe",
    plataformas: ["PC", "PS4", "Xbox One", "Nintendo Switch", "Mobile"],
    preco: 14.99
  },
  {
    id: 9,
    nome: "Celeste",
    tipo: "Plataforma",
    nota: 9.5,
    review: "Plataforma de precisão com uma história tocante sobre ansiedade.",
    anoLancamento: 2018,
    desenvolvedora: "Extremely OK Games",
    plataformas: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 19.99
  },
  {
    id: 10,
    nome: "Hades",
    tipo: "Roguelike",
    nota: 9.6,
    review: "Integração perfeita entre narrativa e mecânicas de roguelike.",
    anoLancamento: 2020,
    desenvolvedora: "Supergiant Games",
    plataformas: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    preco: 24.99
  },
  {
    id: 11,
    nome: "Persona 5 Royal",
    tipo: "JRPG",
    nota: 9.7,
    review: "Estilo inigualável, combate por turnos refinado e ótima história.",
    anoLancamento: 2019,
    desenvolvedora: "Atlus",
    plataformas: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    preco: 59.99
  },
  {
    id: 12,
    nome: "Bloodborne",
    tipo: "Ação/RPG",
    nota: 9.6,
    review: "Atmosfera gótica incrível e combate agressivo.",
    anoLancamento: 2015,
    desenvolvedora: "FromSoftware",
    plataformas: ["PS4"],
    preco: 19.99
  },
  {
    id: 13,
    nome: "Portal 2",
    tipo: "Puzzle",
    nota: 9.8,
    review: "Quebra-cabeças geniais e roteiro hilário.",
    anoLancamento: 2011,
    desenvolvedora: "Valve",
    plataformas: ["PC", "PS3", "Xbox 360", "Nintendo Switch"],
    preco: 9.99
  },
  {
    id: 14,
    nome: "Outer Wilds",
    tipo: "Aventura",
    nota: 9.7,
    review: "Exploração espacial não linear baseada em conhecimento, inesquecível.",
    anoLancamento: 2019,
    desenvolvedora: "Mobius Digital",
    plataformas: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    preco: 24.99
  },
  {
    id: 15,
    nome: "BioShock",
    tipo: "FPS",
    nota: 9.5,
    review: "Ambientação brilhante e narrativa provocativa.",
    anoLancamento: 2007,
    desenvolvedora: "Irrational Games",
    plataformas: ["PC", "PS3", "Xbox 360", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 19.99
  },
  {
    id: 16,
    nome: "Mass Effect 2",
    tipo: "RPG",
    nota: 9.8,
    review: "Um dos melhores jogos de ficção científica, com escolhas que importam.",
    anoLancamento: 2010,
    desenvolvedora: "BioWare",
    plataformas: ["PC", "PS3", "Xbox 360", "PS4", "Xbox One"],
    preco: 19.99
  },
  {
    id: 17,
    nome: "Super Smash Bros. Ultimate",
    tipo: "Luta",
    nota: 9.4,
    review: "A celebração definitiva dos videogames.",
    anoLancamento: 2018,
    desenvolvedora: "Bandai Namco",
    plataformas: ["Nintendo Switch"],
    preco: 59.99
  },
  {
    id: 18,
    nome: "Doom Eternal",
    tipo: "FPS",
    nota: 9.6,
    review: "Ação frenética e trilha sonora espetacular.",
    anoLancamento: 2020,
    desenvolvedora: "id Software",
    plataformas: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    preco: 39.99
  },
  {
    id: 19,
    nome: "Sekiro: Shadows Die Twice",
    tipo: "Ação/Aventura",
    nota: 9.7,
    review: "Combate de espadas extremamente recompensador.",
    anoLancamento: 2019,
    desenvolvedora: "FromSoftware",
    plataformas: ["PC", "PS4", "Xbox One"],
    preco: 59.99
  },
  {
    id: 20,
    nome: "NieR: Automata",
    tipo: "Ação/RPG",
    nota: 9.5,
    review: "Uma narrativa existencialista profunda e combate ágil.",
    anoLancamento: 2017,
    desenvolvedora: "PlatinumGames",
    plataformas: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 39.99
  },
  {
    id: 21,
    nome: "Ghost of Tsushima",
    tipo: "Ação/Aventura",
    nota: 9.4,
    review: "Um samurai em busca de vingança em um Japão belíssimo.",
    anoLancamento: 2020,
    desenvolvedora: "Sucker Punch Productions",
    plataformas: ["PS4", "PS5"],
    preco: 49.99
  },
  {
    id: 22,
    nome: "Dark Souls",
    tipo: "Ação/RPG",
    nota: 9.6,
    review: "O jogo que definiu um gênero inteiro.",
    anoLancamento: 2011,
    desenvolvedora: "FromSoftware",
    plataformas: ["PC", "PS3", "Xbox 360", "PS4", "Xbox One", "Nintendo Switch"],
    preco: 19.99
  },
  {
    id: 23,
    nome: "Half-Life 2",
    tipo: "FPS",
    nota: 9.9,
    review: "Revolucionou o uso de física e narrativa em jogos.",
    anoLancamento: 2004,
    desenvolvedora: "Valve",
    plataformas: ["PC", "Xbox", "Xbox 360", "PS3"],
    preco: 9.99
  },
  {
    id: 24,
    nome: "The Last of Us",
    tipo: "Ação/Aventura",
    nota: 9.8,
    review: "Uma das histórias mais emocionantes já contadas nos videogames.",
    anoLancamento: 2013,
    desenvolvedora: "Naughty Dog",
    plataformas: ["PS3", "PS4", "PS5"],
    preco: 19.99
  },
  {
    id: 25,
    nome: "Minecraft",
    tipo: "Sandbox",
    nota: 9.9,
    review: "O jogo que te permite construir o que a sua imaginação quiser.",
    anoLancamento: 2011,
    desenvolvedora: "Mojang",
    plataformas: ["PC", "Mobile", "PS3", "PS4", "PS5", "Xbox 360", "Xbox One", "Xbox Series X/S", "Nintendo Switch"],
    preco: 29.99
  }
];

module.exports = jogos;