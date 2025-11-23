# Projeto Final Senai - Versão Vue.js

Este projeto foi migrado de JavaScript vanilla para Vue.js 3 com Vue Router.

## Estrutura do Projeto

```
Projeto_Final_Senai/
├── index.html              # Ponto de entrada do Vite
├── package.json            # Dependências do projeto
├── vite.config.js          # Configuração do Vite
├── src/
│   ├── main.js            # Arquivo principal Vue
│   ├── App.vue            # Componente raiz
│   ├── router/
│   │   └── index.js       # Configuração do Vue Router
│   ├── components/
│   │   ├── Header.vue     # Componente de navegação
│   │   ├── Footer.vue      # Componente de rodapé
│   │   ├── Accordion.vue   # Componente de acordeão para letras
│   │   └── ArtistPage.vue  # Componente reutilizável para páginas de artistas
│   ├── views/
│   │   ├── Home.vue        # Página inicial
│   │   ├── BringMeTheHorizon.vue
│   │   ├── Deftones.vue
│   │   ├── Gorillaz.vue
│   │   ├── LinkinPark.vue
│   │   ├── MotionlessInWhite.vue
│   │   ├── SleepToken.vue
│   │   └── TylerTheCreator.vue
│   ├── composables/
│   │   ├── useArtistStats.js  # Composable para buscar estatísticas do Last.fm
│   │   └── useLyrics.js        # Composable para buscar letras
│   └── styles/
│       ├── main.css        # Estilos principais
│       ├── header.css
│       ├── footer.css
│       └── [outros estilos CSS]
```

## Instalação

1. Instale as dependências:
```bash
npm install
```

## Executar o Projeto

Para executar o projeto em modo de desenvolvimento:
```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

## Build para Produção

Para criar uma build de produção:
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

## Principais Mudanças

### 1. Estrutura de Componentes
- **Header.vue**: Navegação com Vue Router
- **Footer.vue**: Rodapé reutilizável com texto dinâmico baseado na rota
- **ArtistPage.vue**: Componente reutilizável para todas as páginas de artistas
- **Accordion.vue**: Componente para exibir letras de músicas

### 2. Composables
- **useArtistStats.js**: Gerencia o estado e busca de estatísticas do Last.fm
- **useLyrics.js**: Gerencia o cache e busca de letras de músicas

### 3. Roteamento
- Todas as páginas HTML foram convertidas em componentes Vue
- Navegação usando Vue Router com rotas nomeadas
- URLs amigáveis (ex: `/bring-me-the-horizon`)

### 4. Reatividade
- Estado reativo para estatísticas e letras
- Loading states para melhor UX
- Cache de letras para evitar requisições desnecessárias

## Tecnologias Utilizadas

- **Vue.js 3**: Framework JavaScript reativo
- **Vue Router 4**: Roteamento para SPA
- **Vite**: Build tool e dev server
- **Composition API**: API moderna do Vue para gerenciamento de estado

## APIs Utilizadas

- **Last.fm API**: Para estatísticas de scrobbles, álbuns e músicas
- **Lyrics.ovh API**: Para letras de músicas

## Notas

- Os arquivos HTML originais foram mantidos na raiz do projeto
- Os estilos CSS originais foram preservados
- A funcionalidade permanece a mesma, mas agora com arquitetura Vue.js

