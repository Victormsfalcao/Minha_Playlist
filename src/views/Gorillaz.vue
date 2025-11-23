<template>
  <ArtistPage
    title='<span class="highlight">Gorillaz</span>'
    description="O Gorillaz é uma banda virtual britânica criada em 1998 pelo músico Damon Albarn (da banda Blur) e pelo artista Jamie Hewlett. A banda é representada por quatro personagens de desenho animado, o que lhe confere uma forte identidade visual e narrativa. Gênero e Estilo: Sua música é uma fusão altamente eclética e experimental de Rock Alternativo, Hip Hop, Pop Eletrônico e Trip Hop, marcada por uma forte ênfase em samples, teclados e uma vasta rede de colaborações com artistas de diversos gêneros. Álbum Chave: Demon Days (2005) e Plastic Beach (2010)."
    image="https://rollingstone.com.br/wp-content/uploads/2023/05/gorillaz-press-shot.jpg"
    :awards="awards"
    artist-name="Gorillaz"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Grammy Awards (1 Vitória):<br><br>Melhor Colaboração Pop com Vocais (2006) por "Feel Good Inc." (com De La Soul).',
  'MTV Europe Music Awards (Múltiplas Vitórias):<br><br>Melhor Canção (por "Clint Eastwood"), Melhor Grupo, Melhor Artista Alternativo.',
  'Q Awards (Múltiplas Vitórias):<br><br>Melhor Vídeo (por "Clint Eastwood" e "Feel Good Inc."), Melhor Produtor.'
]

const tracks = ['The Manifesto', 'Fire Flies', 'Tranz']
</script>

<style>
@import '../styles/gorillaz.css';
</style>

