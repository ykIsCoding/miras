import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/main.css'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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

app.use(createPinia())
app.use(vtfy)

app.mount('#app')
