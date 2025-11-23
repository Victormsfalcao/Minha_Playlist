<template>
  <ArtistPage
    title='<span class="highlight">MOTIONLESS</span> IN<br><span class="highlight">WHITE.</span>'
    description="Motionless In White (MIW) é uma banda americana de Metalcore formada em 2005, conhecida por incorporar uma forte estética visual de Rock Gótico e Industrial. Gênero e Estilo: Eles misturam a agressividade e os breakdowns do Metalcore com elementos de Industrial Metal e Rock Gótico, utilizando teclados atmosféricos e sintetizadores. A banda é imediatamente reconhecível por sua imagem teatral inspirada em maquiagem de terror e moda gótica. Álbum Chave: Graveyard Shift (2017) e Scoring the End of the World (2022)."
    image="https://s2-oglobo.glbimg.com/214ISSLAOjZfCFzwYwlanbU4xU0=/0x0:565x491/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/P/M/VIB2ZJRnuD0IvdFHKRBA/motionless.png"
    :awards="awards"
    artist-name="Motionless in White"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Best International Live Artist no Heavy Music Awards 2025 (HMA 2025)',
  'IMDb Awards: O clipe de música "Masterpiece (2022)" foi indicado para premiações no IMDb Awards'
]

const tracks = ['Another Life', 'Werewolf', 'Disguise']
</script>

<style>
@import '../styles/motionless.css';
</style>

