<template>
  <ArtistPage
    title='<span class="highlight">BRING</span> ME<br>THE <span class="highlight">HORIZON.</span>'
    description="Bring Me The Horizon é uma das bandas mais versáteis do rock moderno. Nascidos no metalcore, evoluíram para o alternativo, eletrônico e pop industrial, sempre reinventando sua identidade sonora e visual. Com atmosferas sombrias, vocais intensos e experimentações ousadas, BMTH se tornou um dos nomes mais influentes da cena mundial."
    image="https://rollingstone.com.br/wp-content/uploads/2024/05/bring-me-the-horizon-foto-reproducaoinstagram.jpg"
    :awards="awards"
    artist-name="Bring Me the Horizon"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Indicação ao Grammy (Best Rock Song por "Mantra" em 2019; Amo indicado para Best Rock Album)',
  'BRIT Awards: indicado para Melhor Grupo Britânico; venceu "Best Rock/Alternative Act" em 2024.',
  'Kerrang! Awards: vários, por exemplo "Best British Newcomer" (2006) vencido.'
]

const tracks = ['LosT', 'Can You Feel My Heart', 'Top 10 staTues tHat CriEd bloOd']
</script>

<style>
@import '../styles/bring.css';
</style>

