<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="barraSup text-white">
      <q-toolbar class="justify-between">
        <q-btn 
          dense 
          flat 
          round 
          icon="🔶" 
          @click="toggleLeftDrawer" 
          class="menu-button"
        />

        <div class="spacer"></div> 

        <q-toolbar-title class="title-centered">
          <q-avatar>
            <img src='https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg' />
          </q-avatar>
          El Palacio del Sol
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="barra text-white" show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <div class="drawer-content">
        <q-btn class="drawer-button" label="Lobby" to="/" />
        <q-btn class="drawer-button" label="Habitaciones" to="/Habitaciones" />
        <q-btn class="drawer-button" label="Servicios" to="/Servicios" />
        <q-btn class="drawer-button" label="Deportes EX" to="/DeportesEX" />
        <q-btn class="drawer-button" label="Contacto" to="/Contacto" />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.drawer-content {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.drawer-button {
  margin-bottom: 10px;
  background-color: #B0B0B0; /* Color gris por defecto */
  color: white;
  transition: background-color 0.3s, color 0.3s;
}

.drawer-button:hover {
  background-color: white; /* Cambia a blanco al hacer hover */
  color: #B0B0B0; /* Cambia el texto a gris al hacer hover */
}

.menu-button {
  color: white; 
  font-size: 24px; 
  background-color: transparent; 
  border-radius: 50%;
  transition: background-color 0.3s;
}

.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.2); 
}

.title-centered {
  display: flex;
  align-items: center; 
  margin-left: -200px; 
}

.spacer {
  flex-grow: 1; 
}

.barraSup {
  background: linear-gradient(90deg, #2b2b2e, #2a2b2c, #373738, #464649);
}

.barra {
  background: linear-gradient(90deg, #2b2b2e, #2a2b2c, #373738, #464649);
}
</style>
