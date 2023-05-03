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
    theme: {
        themes: {
                light:{
                colors:{
                    primary:colors.indigo.accent3,
                    secondary:colors.grey.lighten5
                },
                dark:false
            }
        }
    }
})


const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(vtfy)

app.mount('#app')
