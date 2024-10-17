import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./routes/routes.js"

import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'
import 'quasar/src/css/index.sass';

const myApp = createApp(App)


myApp.use(router)
myApp.use( Quasar,{
    plugins:{},
})


myApp.mount('#app')