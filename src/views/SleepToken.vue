<template>
  <ArtistPage
    title='<span class="highlight">SLEEP</span><br><span class="highlight">TOKEN</span>'
    description="Sleep Token é uma misteriosa banda britânica formada em 2016, que opera no anonimato total, com todos os membros usando máscaras e vestes. Gênero e Estilo: Seu som é extremamente versátil, abrangendo Metal Progressivo, Post-Metal, R&B e Pop Alternativo. A música alterna drasticamente entre passagens de piano suave e canto melódico (cortesia do vocalista Vessel) e riffs de metal pesado e guturais, mantendo um conceito de adoração a uma divindade. Álbum Chave: Take Me Back To Eden (2023)."
    image="https://i.scdn.co/image/ab6761610000e5ebd00c2ff422829437e6b5f1e0"
    :awards="awards"
    artist-name="Sleep Token"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Heavy Music Awards (Múltiplas Vitórias):<br><br>Melhor Artista Britânico (2023).',
  'Billboard Music Awards:<br><br>Melhor Álbum de Hard Rock (2024) por Take Me Back To Eden (segundo resultados recentes)',
  'Rock Sound Awards:<br><br>Álbum do Ano.'
]

const tracks = ['Caramel', 'Gethsemane', 'Look to Windward']
</script>

<style>
@import '../styles/sleep.css';
</style>

