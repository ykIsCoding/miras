<script setup>
  import { useTheme } from 'vuetify'   
import MirasThemeToggle from './components/MirasThemeToggle.vue';
    const theme = useTheme()
    console.log(theme.global.current.value)
    const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark? 'light' : 'dark'

</script>

<template>
  <v-app>
    
  <header>
  </header>
  <main class="v-container h-screen w-100 ">
    
    <router-view/>
  
  </main>
  <v-btn @click="toggleTheme">toggle theme</v-btn>
</v-app>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;900&display=swap');
</style>
