import Contacto from "../components/Contacto.vue"
import DeportesEX from "../components/DeportesEX.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Lobby from "../components/Lobby.vue"
import Servicios from "../components/Servicios.vue"

import { createRouter,createWebHashHistory } from "vue-router"

const routes =[
    {path: "/Contacto", component: Contacto},
    {path: "/DeportesEX", component: DeportesEX},
    {path: "/Habitaciones", component: Habitaciones},
    {path: "/Servicios", component: Servicios},
    {path: "/", component: Lobby},
]

export const router = createRouter ({
    history:createWebHashHistory(),
    routes
})
