<template>
    <v-app>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-app>
  </template>
  
  <script setup>
  import { useTheme} from 'vuetify'   
    const theme = useTheme()
    
    const toggleTheme = () => {
        console.log(theme.global.current.value)
        return theme.global.name.value = theme.global.current.value.dark ? 'mirasLightTheme' : 'dark'
    }

  </script>