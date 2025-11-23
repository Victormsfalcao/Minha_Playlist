<template>
  <ArtistPage
    title='<span class="highlight">TYLER,</span> THE<br><span class="highlight">CREATOR.</span>'
    description="Tyler, The Creator é um influente rapper, produtor e designer de moda americano que emergiu no início dos anos 2010 como cofundador do coletivo Odd Future. Gênero e Estilo: Começou no Hip Hop Horrorcore, mas evoluiu para um som mais sofisticado e eclético de Hip Hop Alternativo e Neo Soul. Sua produção é caracterizada por beats complexos e experimentais, frequentemente incorporando elementos de Funk, Jazz e um lirismo introspectivo e teatral. Álbum Chave: Igor (2019) e Flower Boy (2017)."
    image="https://www.billboard.com/wp-content/uploads/2024/11/tyler-the-creator-boston-wharf-2024-billboard-1548.jpg?w=942&h=628&crop=1"
    :awards="awards"
    artist-name="Tyler, The Creator"
    :tracks="tracks"
  />
</template>

<script setup>
import ArtistPage from '../components/ArtistPage.vue'

const awards = [
  'Grammy Awards (2 Vitórias):<br>Melhor Álbum de Rap (2020) por IGOR.<br>Melhor Álbum de Rap (2022) por Call Me If You Get Lost.',
  'Brit Awards (1 Vitória):<br>Melhor Artista Solo Masculino Internacional (2020).',
  'MTV Video Music Awards:<br>Melhor Novo Artista (2011)..'
]

const tracks = ['NEW MAGIC WAND', 'St.Chroma', 'SUGAR ON MY TONGUE']
</script>

<style>
@import '../styles/tyler.css';
</style>

