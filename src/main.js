import { createApp } from 'vue'

//..import the router
import router from './router/index'

import App from './App.vue'

//..use the router before mount the app instance
createApp(App).use(router).mount('#app')
