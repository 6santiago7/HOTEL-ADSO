<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
  
  <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
    <div class="drawer-content">
      <q-btn class="drawer-button" label="Deportes EX" to="/DeportesEX" />
      <q-btn class="drawer-button" label="Contacto" to="/Contacto" />
      <q-btn class="drawer-button" label="Habitaciones" to="/Habitaciones" />
      <q-btn class="drawer-button" label="Lobby" to="/Lobby" />
      <q-btn class="drawer-button" label="Servicios" to="/Servicios" />
    </div>
  </q-drawer>

  <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>

<style>
.drawer-content {
  display: flex;
  flex-direction: column; /* Alinea los botones verticalmente */
  padding: 20px; /* Espacio interno */
}

.drawer-button {
  margin-bottom: 10px; /* Espacio entre los botones */
  background-color: #07a1a1; /* Color de fondo del botón */
  color: white; /* Color del texto */
  transition: background-color 0.3s; /* Transición de color */
}

.drawer-button:hover {
  background-color: #048080; /* Color de fondo al pasar el mouse */
}
</style>
