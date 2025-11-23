<template>
  <section class="intro">
    <div class="container">
      <article class="intro-content">
        <header class="intro-text">
          <h1 class="intro-title">
            UM POUCO<br>
            <span class="highlight">DA</span><br>
            MINHA <span class="highlight">PLAYLIST.</span>
          </h1>
          <p class="intro-subtitle">
            Este projeto apresenta uma experiência imersiva para explorar algumas
            das bandas e artistas mais influentes da música alternativa contemporânea. A ideia é
            oferecer uma navegação intuitiva, trazendo informações sobre discografias, estilos musicais
            e identidade visual de cada banda — tudo com integração a APIs do Spotify e Vagalume para
            exibir álbuns, músicas e letras em tempo real.
          </p>
        </header>
        <figure class="intro-image">
          <img src="https://cdn.pixabay.com/photo/2021/04/07/13/09/headphones-6159058_1280.jpg"
            alt="Img-Musica" class="intro-img">
        </figure>
      </article>
    </div>
  </section>

  <section class="depoimentos">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">TECNOLOGIAS UTILIZADAS</h2>
      </header>
      <div class="depoimentos-grid" role="list">
        <article class="depoimento-card" role="listitem">
          <blockquote class="depoimento-text">
            "Vue.js — Framework principal para componentes e reatividade. <br>
            HTML5 — Estrutura semântica e base do layout. <br>
            CSS3 / Tailwind ou estilização própria — Estilo, paletas, responsividade e identidade visual.."
          </blockquote>
        </article>
        <article class="depoimento-card" role="listitem">
          <blockquote class="depoimento-text">
            Spotify Web API — Busca de álbuns, músicas, capas e dados oficiais. <br>
            Vagalume API — Letras e informações complementares sobre as bandas.
          </blockquote>
        </article>
        <article class="depoimento-card" role="listitem">
          <blockquote class="depoimento-text">
            Git & GitHub — Controle de versão e colaboração.
          </blockquote>
        </article>
      </div>
    </div>
  </section>

  <section class="estatisticas">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">Estátisticas da minha playlist</h2>
      </header>
      <div class="estatisticas-grid" role="list">
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-user-group"></i>
          </span>
          <p class="estat-number">+14.600</p>
          <p class="estat-label">Vezes ouvindo música</p>
        </article>
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-chart-line"></i>
          </span>
          <p class="estat-number">+840</p>
          <p class="estat-label">Artistas</p>
        </article>
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-heart"></i>
          </span>
          <p class="estat-number">+2400</p>
          <p class="estat-label">Faixas diferentes</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import '../styles/index.css';
</style>

