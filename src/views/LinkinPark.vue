<template>
  <ArtistPage
    title='<span class="highlight">LINKIN</span><br><span class="highlight">PARK</span>'
    description="O Linkin Park é uma das bandas americanas mais influentes do Nu Metal e Rock Alternativo, formada em 1996. Eles ganharam fama mundial por misturar elementos de rock pesado com hip hop e eletrônica. Gênero e Estilo: Seu som clássico é definido pelo contraste vocal entre os gritos e o canto melódico de Chester Bennington e Emily Armstrong, e o rap de Mike Shinoda, apoiado por guitarras pesadas, bateria marcante e o uso proeminente de samples e turntablism. Álbum Chave: Hybrid Theory (2000) e Meteora (2003)."
    image="https://folhadecuritiba.com.br/wp-content/uploads/2025/11/linkin-1.jpeg"
    :awards="awards"
    artist-name="Linkin Park"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Grammy Awards (2 Vitórias):<br><br>Melhor Performance de Hard Rock (2002) por "Crawling".<br>Melhor Colaboração de Rap/Canto (2006) por "Numb/Encore" (com Jay-Z)..',
  'American Music Awards (Múltiplas Vitórias):<br><br>Incluindo Artista Alternativo Favorito (várias vezes).<br>Música de Rock Favorita.',
  'Billboard Music Awards (Múltiplas Vitórias):<br><br>Top Artista de Hard Rock/Duo/Grupo de Rock.'
]

const tracks = ['The Emptiness Machine', 'Papercut', 'Waiting for the End']
</script>

<style>
@import '../styles/linkin.css';
</style>

