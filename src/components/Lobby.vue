<template>
  <div id="app">
    <div class="banner">
      <img class="banner-img" src="https://digital.ihg.com/is/image/ihg/ic-brand-refresh-homepg-img-tab-dominica-1440x617" alt="Banner Gym" />
      <h1 class="banner-title">El Palacio del Sol</h1>
    </div>

    <h1 class="about-title">¿Quiénes somos?</h1>
    <p class="about-description">
      El Palacio del Sol es un lugar de lujo y confort, diseñado para ofrecer una experiencia inolvidable a todos nuestros huéspedes. Nos esforzamos por brindar servicios de primera calidad en un ambiente acogedor, asegurando una estancia placentera. Además, contamos con una amplia variedad de servicios exclusivos, como un gimnasio totalmente equipado, un restaurante de alta calidad que deleitará su paladar con lo mejor de la gastronomía, una piscina donde podrá relajarse y disfrutar, y una gran diversidad de habitaciones de todos los estilos, adaptadas a las necesidades y preferencias de cada visitante. Su comodidad es nuestra prioridad.
    </p>

    <h2 class="section-title">Nuestros servicios y opciones</h2>
    <div class="gym-banner">
      <div class="gym-carousel" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
        <img v-for="(image, index) in gymImages" :src="image" :key="index" class="gym-banner-img" alt="Gym Image" />
      </div>
    </div>

    <h1 class="gym-title">Todo lo que te podemos ofrecer</h1>
    <p class="gym-description">Descubre nuestros entrenamientos personalizados y transforma tu estilo de vida con las mejores instalaciones de fitness, además de contar con una gran variedad de alimentos los cuales podrás encontrar en nuestro restaurante. También podrás disfrutar de una aventura enfrentándote a diferentes actividades extremas con las que contamos para que tu experiencia sea la mejor.</p>

    <div class="card-container">
      <div class="card" v-for="(training, index) in gymTrainings" :key="index">
        <img :src="training.image" alt="Entrenamiento" />
        <h3>{{ training.title }}</h3>
        <p>{{ training.description }}</p>
      </div>
    </div>

    <div class="card-container">
      <div class="card" v-for="(food, index) in restaurantFoods" :key="index">
        <img :src="food.image" alt="Comida" />
        <h3>{{ food.title }}</h3>
        <p>{{ food.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentImageIndex = ref(0);
const gymImages = [
  'https://cdn.static.aptavs.com/imagenes/ejercicios-basicos-de-gimnasio-cuales-son-y-su-importancia/ejercicios-basicos-de-gimnasio.jpg',
  'https://xplorercolombia.com/wp-content/uploads/2021/06/sangil-deportes-extremo.jpg',
  'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/2K7FHLJP75FGRO2LKQMCFKFKWA.jpg',
  'https://www.fluidra.com/projects//web/app/uploads/2022/04/iStock-641448082_iStock-641448082-1.jpg'
];

const startImageRotation = () => {
  setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % gymImages.length;
  }, 3000);
};

onMounted(() => {
  startImageRotation();
});
</script>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
  background: linear-gradient(90deg, #476ff3, #319afc, #86a8e7, #7f7fd5);
}

.banner {
  position: relative;
  text-align: center;
  color: white;
}

.banner-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.banner-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  font-family: fantasy;
}

.about-title {
  margin: 20px 0;
  font-size: 2rem;
  font-family: fantasy;
}

.about-description {
  margin: 0 20px;
  color: #333;
  font-size: 21px;
}

.section-title {
  margin-top: 40px;
  font-size: 1.8rem;
  font-family: fantasy;
  color: #444;
}

.gym-banner {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  margin: 20px 0 40px 0;
}

.gym-carousel {
  display: flex;
  transition: transform 1s ease;
}

.gym-banner-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  flex-shrink: 0;
}

.gym-title {
  margin: 20px 0;
  font-size: 2rem;
  color: #333;
}

.gym-description {
  font-size: 21px;
  color: #555;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  border-radius: 8px;
}
</style>
