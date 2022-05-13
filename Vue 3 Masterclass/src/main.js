import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const forumApp = createApp(App)

forumApp.use(createPinia())
forumApp.use(router)

forumApp.mount('#app')
