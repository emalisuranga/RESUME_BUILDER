import App from './App.vue'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import ja from './locales/ja.json'
// Plugins
import { registerPlugins } from '@/plugins'

const messages = {
    en,
    fr,
    ja
}

const i18n = createI18n({
    locale: 'ja', // Set the default locale
    messages
})

const app = createApp(App)
app.use(i18n)
registerPlugins(app)

app.mount('#app')
