import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import HomePage from './paginas/HomePage.vue'
import './assets/main.css'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {createRouter,createWebHashHistory} from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { fas } from '@fortawesome/free-solid-svg-icons'

const mirasLightTheme = {
        dark:false,
        colors:{
            background: '#F2F3F8',
            surface: '#F2F3F8',
            primary: '#3A4069',
            'primary-darken-1': '#2B304F',
            secondary: '#F38B2B',
            'secondary-darken-1': '#F38B2B',
            error: '#B00020',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FB8C00',
        }
}

//router para navigacion
const routes = [
    { path: '/', component: HomePage }
  ]
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })

//nuestro theme
const vtfy = createVuetify({
    components,directives,
    icons: {
        defaultSet: 'fa',
        aliases,
        sets: {
          fa,
          mdi,
        }
      },
    theme: {
        defaultTheme:'mirasLightTheme',
        themes: {
                mirasLightTheme
        }
    }
})

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon) // Register component globally
library.add(fas) // Include needed icons

app.use(router)
app.use(createPinia())
app.use(vtfy)

app.mount('#app')
