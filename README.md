# 🎵 Minha Playlist - Projeto Final Senai

Uma aplicação web moderna desenvolvida com Vue.js 3 para explorar informações sobre bandas e artistas de música alternativa, incluindo estatísticas do Last.fm e letras de músicas.

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [APIs Utilizadas](#apis-utilizadas)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Desenvolvimento](#desenvolvimento)

## 🎯 Sobre o Projeto

Este projeto apresenta uma experiência imersiva para explorar algumas das bandas e artistas mais influentes da música alternativa contemporânea. A aplicação oferece uma navegação intuitiva, trazendo informações sobre discografias, estilos musicais e identidade visual de cada banda, com integração a APIs do Spotify e Vagalume para exibir álbuns, músicas e letras em tempo real.

### Artistas Incluídos

- **Bring Me The Horizon** - Rock alternativo e metalcore
- **Deftones** - Metal alternativo e rock experimental
- **Gorillaz** - Rock alternativo, hip hop e pop eletrônico
- **Linkin Park** - Nu metal e rock alternativo
- **Motionless In White** - Metalcore e rock gótico
- **Sleep Token** - Metal progressivo e post-metal
- **Tyler, The Creator** - Hip hop alternativo e neo soul

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Vue.js 3** - Framework JavaScript reativo
- **Vue Router 4** - Roteamento para Single Page Application (SPA)
- **Vite** - Build tool e servidor de desenvolvimento
- **Composition API** - API moderna do Vue para gerenciamento de estado

### Estilização
- **CSS3** - Estilização customizada
- **Font Awesome** - Ícones
- **Google Fonts** - Tipografia (Space Grotesk, Roboto)

### APIs Externas
- **Last.fm API** - Estatísticas de scrobbles, álbuns e músicas
- **Lyrics.ovh API** - Letras de músicas

## ✨ Funcionalidades

- ✅ **Navegação SPA** - Navegação fluida sem recarregar a página
- ✅ **Estatísticas Dinâmicas** - Dados do Last.fm carregados automaticamente
- ✅ **Letras de Músicas** - Busca e exibição de letras sob demanda
- ✅ **Componentes Reutilizáveis** - Arquitetura modular e escalável
- ✅ **Design Responsivo** - Interface adaptável a diferentes tamanhos de tela
- ✅ **Loading States** - Feedback visual durante carregamento de dados
- ✅ **Cache de Letras** - Otimização para evitar requisições desnecessárias

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)

## 🚀 Instalação

1. **Clone o repositório** (ou navegue até a pasta do projeto):
```bash
cd Projeto_Final_Senai
```

2. **Instale as dependências**:
```bash
npm install
```

## 💻 Como Usar

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em: **http://localhost:3000**

O servidor possui Hot Module Replacement (HMR), então as alterações são refletidas automaticamente no navegador.

### Build para Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
Projeto_Final_Senai/
├── index.html              # Ponto de entrada do Vite
├── package.json            # Dependências e scripts
├── vite.config.js          # Configuração do Vite
├── README.md               # Este arquivo
│
├── src/
│   ├── main.js            # Arquivo principal Vue
│   ├── App.vue            # Componente raiz
│   │
│   ├── router/
│   │   └── index.js       # Configuração do Vue Router
│   │
│   ├── components/
│   │   ├── Header.vue     # Componente de navegação
│   │   ├── Footer.vue     # Componente de rodapé
│   │   ├── Accordion.vue  # Componente de acordeão para letras
│   │   └── ArtistPage.vue # Componente reutilizável para páginas de artistas
│   │
│   ├── views/
│   │   ├── Home.vue       # Página inicial
│   │   ├── BringMeTheHorizon.vue
│   │   ├── Deftones.vue
│   │   ├── Gorillaz.vue
│   │   ├── LinkinPark.vue
│   │   ├── MotionlessInWhite.vue
│   │   ├── SleepToken.vue
│   │   └── TylerTheCreator.vue
│   │
│   ├── composables/
│   │   ├── useArtistStats.js  # Composable para buscar estatísticas do Last.fm
│   │   └── useLyrics.js       # Composable para buscar e cachear letras
│   │
│   └── styles/
│       ├── main.css        # Estilos principais
│       ├── header.css      # Estilos do header
│       ├── footer.css      # Estilos do footer
│       ├── index.css       # Estilos da página inicial
│       ├── bring.css       # Estilos específicos (Bring Me The Horizon)
│       ├── deftones.css    # Estilos específicos (Deftones)
│       ├── gorillaz.css    # Estilos específicos (Gorillaz)
│       ├── linkin.css      # Estilos específicos (Linkin Park)
│       ├── motionless.css  # Estilos específicos (Motionless In White)
│       ├── sleep.css       # Estilos específicos (Sleep Token)
│       └── tyler.css       # Estilos específicos (Tyler, The Creator)
│
└── [arquivos HTML originais mantidos na raiz]
```

## 🔌 APIs Utilizadas

### Last.fm API
- **Endpoint**: `https://ws.audioscrobbler.com/2.0/`
- **Uso**: Busca de estatísticas de scrobbles, álbuns mais ouvidos e músicas mais tocadas
- **Métodos utilizados**:
  - `user.gettopartists` - Top artistas do usuário
  - `user.gettopalbums` - Top álbuns do usuário
  - `user.gettoptracks` - Top músicas do usuário

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Cria uma build de produção |
| `npm run preview` | Visualiza a build de produção localmente |

## 🎨 Componentes Principais

### Header.vue
Componente de navegação principal com links para todas as páginas usando Vue Router.

### Footer.vue
Rodapé reutilizável com texto dinâmico baseado na rota atual.

### ArtistPage.vue
Componente reutilizável que renderiza:
- Informações do artista
- Premiações
- Estatísticas do Last.fm
- Lista de músicas com letras

### useArtistStats.js
Gerencia o estado e busca de estatísticas do Last.fm:
- Scrobbles do artista
- Álbum mais ouvido
- Música mais ouvida

### useLyrics.js
Gerencia o cache e busca de letras de músicas:
- Cache de letras para evitar requisições duplicadas
- Estado de loading
- Tratamento de erros

## 🌐 Rotas

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial com informações do projeto |
| `/bring-me-the-horizon` | BringMeTheHorizon | Página do Bring Me The Horizon |
| `/deftones` | Deftones | Página do Deftones |
| `/gorillaz` | Gorillaz | Página do Gorillaz |
| `/linkin-park` | LinkinPark | Página do Linkin Park |
| `/motionless-in-white` | MotionlessInWhite | Página do Motionless In White |
| `/sleep-token` | SleepToken | Página do Sleep Token |
| `/tyler-the-creator` | TylerTheCreator | Página do Tyler, The Creator |

## 🐛 Solução de Problemas

### Erro ao instalar dependências
Certifique-se de estar usando Node.js versão 16 ou superior:
```bash
node --version
```

### Porta 3000 já está em uso
O Vite tentará usar a próxima porta disponível automaticamente, ou você pode especificar uma porta diferente no `vite.config.js`.

### Erros de CORS
As APIs utilizadas (Last.fm e Lyrics.ovh) devem permitir requisições do navegador. Se houver problemas, verifique as configurações de CORS.

## 📝 Notas

- Os arquivos HTML originais foram mantidos na raiz do projeto para referência
- Os estilos CSS originais foram preservados e adaptados para a estrutura Vue
- A funcionalidade permanece a mesma, mas agora com arquitetura Vue.js moderna

## 👤 Autor

**Victor Falcão**
- Email: victorfalcao782@gmail.com
- WhatsApp: (81) 98575-4108
- Localização: Recife, PE

## 📄 Licença

© 2025 Victor Falcão. Todos os direitos reservados.

---

**Desenvolvido como projeto final do curso de Front-End do Senai**

