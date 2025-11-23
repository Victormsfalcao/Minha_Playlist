<template>
  <nav class="nav">
    <nav id="nav-left"></nav>
    <div>
      <ul class="nav-center">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/bring-me-the-horizon">Bring me the Horizon</router-link></li>
        <li><router-link to="/deftones">Deftones</router-link></li>
        <li><router-link to="/gorillaz">Gorillaz</router-link></li>
        <li><router-link to="/linkin-park">Linkin Park</router-link></li>
        <li><router-link to="/motionless-in-white">Motionless In White</router-link></li>
        <li><router-link to="/sleep-token">Sleep Token</router-link></li>
        <li><router-link to="/tyler-the-creator">Tyler, The Creator</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
.nav-center a.router-link-active {
  color: #00ff80;
}
</style>

