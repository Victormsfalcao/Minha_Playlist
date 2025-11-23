<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-logo">
        <p>{{ footerText }}</p>
      </div>
      <div class="footer-column">
        <h3>Contato</h3>
        <p><a href="https://wa.me/5581985754108" target="_blank">(81) 98575-4108</a></p>
        <p><a href="mailto:victorfalcao782@gmail.com">victorfalcao782@gmail.com</a></p>
        <p>Recife, PE</p>
      </div>
      <div class="footer-column">
        <h3>Redes Sociais</h3>
        <a href="https://www.linkedin.com/in/victormsfalcao/" target="_blank">LinkedIn</a>
        <a href="https://github.com/Victormsfalcao" target="_blank">GitHub</a>
        <a href="mailto:victorfalcao782@gmail.com">Email</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Victor Falcão. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const footerText = computed(() => {
  const isHome = route.name === 'Home'
  return isHome
    ? 'Ficamos muito felizes em ter você explorando o site e conhecendo mais sobre o projeto e os artistas. Volte quando quiser — a casa é sua!'
    : 'Espero que tenha gostado da minha playlist, caso se interesse por mais, é só visitar meu Last.Fm'
})
</script>

