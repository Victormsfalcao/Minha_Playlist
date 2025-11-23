<template>
  <section class="intro">
    <div class="container">
      <article class="intro-content">
        <header class="intro-text">
          <h1 class="intro-title" v-html="title"></h1>
          <p class="intro-subtitle">{{ description }}</p>
        </header>
        <figure class="intro-image">
          <img :src="image" alt="Img-Musica" class="intro-img">
        </figure>
      </article>
    </div>
  </section>

  <section class="depoimentos">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">PREMIAÇÕES</h2>
      </header>
      <div class="depoimentos-grid" role="list">
        <article v-for="(award, index) in awards" :key="index" class="depoimento-card" role="listitem">
          <blockquote class="depoimento-text" v-html="award"></blockquote>
        </article>
      </div>
    </div>
  </section>

  <section class="estatisticas">
    <div class="container">
      <header class="section-header">
        <h2 class="section-title">Estatísticas da minha playlist</h2>
      </header>
      <div class="estatisticas-grid" role="list">
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-user-group"></i>
          </span>
          <p class="estat-number">{{ stats.loading ? '...' : `+${stats.scrobbles}` }}</p>
          <p class="estat-label">{{ stats.loading ? 'Carregando...' : 'Scrobbles do artista' }}</p>
        </article>
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-chart-line"></i>
          </span>
          <p class="estat-number">{{ stats.loading ? '...' : stats.topAlbum }}</p>
          <p class="estat-label">{{ stats.loading ? 'Carregando...' : 'Álbum mais ouvido' }}</p>
        </article>
        <article class="estat-card" role="listitem">
          <span class="estat-icon" aria-hidden="true">
            <i class="fa-solid fa-heart"></i>
          </span>
          <p class="estat-number">{{ stats.loading ? '...' : stats.topTrack }}</p>
          <p class="estat-label">{{ stats.loading ? 'Carregando...' : 'Música mais ouvida' }}</p>
        </article>
      </div>
    </div>
  </section>

  <div id="container" v-if="tracks.length > 0">
    <Accordion
      v-for="(track, index) in tracks"
      :key="index"
      :artist="artistName"
      :track="track"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useArtistStats } from '../scrobbles/useArtistStats'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  awards: {
    type: Array,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  tracks: {
    type: Array,
    default: () => []
  }
})

const { stats, getArtistStats } = useArtistStats()

onMounted(() => {
  getArtistStats(props.artistName)
})
</script>

<style scoped>
#container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
}
</style>

