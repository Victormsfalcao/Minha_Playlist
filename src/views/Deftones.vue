<template>
  <ArtistPage
    title='<span class="highlight">DEFTONES</span>'
    description="O Deftones é uma influente banda americana de metal alternativo (e rock experimental), formada em Sacramento, Califórnia, em 1988. Eles são conhecidos por seu som único que combina o peso do metal com texturas atmosféricas, elementos de shoegaze e vocais dinâmicos que variam entre gritos e melodias etéreas (cortesia do vocalista Chino Moreno). Seus álbuns mais aclamados incluem White Pony (2000), Around the Fur (1997) e Diamond Eyes (2010)"
    image="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2023/08/deftones.jpg"
    :awards="awards"
    artist-name="Deftones"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'White Pony Melhor Álbum (Kerrang! Awards)',
  'White Pony Melhor Álbum de Hard Rock/Heavy Metal (California Music Awards)',
  '"Passenger" (Mike Shinoda Remix) Melhor Gravação Remixada (Grammy Awards)'
]

const tracks = ['Sextape', 'Diamond Eyes', 'Cherry Waves']
</script>

<style>
@import '../styles/deftones.css';
</style>

