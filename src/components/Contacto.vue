<template>
  <div class="main-container">
    <div class="form-container">
      <h2>Formulario Interactivo</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>
        <div class="form-group">
          <label for="age">Edad:</label>
          <select id="age" v-model="formData.age" required>
            <option value="" disabled>Selecciona tu edad</option>
            <option v-for="age in ageOptions" :key="age" :value="age">{{ age }}</option>
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
    <div id="map" class="map-container"></div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default {
  name: 'App',
  setup() {
    const formData = ref({
      name: '',
      email: '',
      age: '',
    });
    const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

    const handleSubmit = () => {
      alert(`Nombre: ${formData.value.name}\nCorreo: ${formData.value.email}\nEdad: ${formData.value.age}`);
      formData.value = { name: '', email: '', age: '' };
    };

    const initMap = () => {
      const map = L.map('map').setView([6.5596, -73.1348], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap',
      }).addTo(map);

      L.marker([6.5596, -73.1348]).addTo(map)
        .bindPopup('San Gil, Santander, Colombia')
        .openPopup();
    };

    onMounted(() => {
      initMap();
    });

    return {
      formData,
      ageOptions,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #000; 
  color: white;
}

.main-container {
  display: flex;
  justify-content: space-between;
  padding: 20px; 
}

.form-container {
  background-color: #333; 
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  max-width: 400px;
  margin: 50px;
  transition: transform 0.2s;
}

.form-container:hover {
  transform: scale(1.02);
}

h2 {
  text-align: center;
  color: #fff; 
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #fff; 
}

input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 16px;
  background-color: #444; 
  color: #fff; 
}

input:focus,
select:focus {
  border-color: #4CAF50;
  outline: none;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.map-container {
  width: 100%;
  height: 400px;
  margin: 50px;
}
</style>
