<template>
   
  </template>
  
  <script setup>
  import { useTheme} from 'vuetify'   
    const theme = useTheme()
    
    const toggleTheme = () => {
        console.log(theme.global.current.value)
        return theme.global.name.value = theme.global.current.value.dark ? 'mirasLightTheme' : 'mirasDarkTheme'
    }

  </script>