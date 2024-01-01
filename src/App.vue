<template>
  <div class="container">
    <header-blog></header-blog>
    <home-page>
      <router-link to="/about"></router-link>
    </home-page>

  </div>
</template>

<script>
import globalcomponent from '@/globalComponents.js'

export default {
  name: 'App',
  components: globalcomponent
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
