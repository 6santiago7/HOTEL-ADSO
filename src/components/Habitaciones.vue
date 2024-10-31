<template>
  <div>
    <div class="banner">
      <div class="banner-images" :style="{ transform: `translateX(-${currentIndex.value * 100}%)` }">
        <img
          v-for="(bannerImage, index) in bannerImages"
          :key="index"
          :src="bannerImage"
          alt="Banner"
          class="banner-image"
        />
      </div>
      <h1 class="banner-title">Bienvenido a Nuestro Hotel</h1>
    </div>

    <div class="room-cards">
      <div class="room-card" v-for="room in rooms" :key="room.id">
        <img :src="room.image" alt="Room Image" class="room-image" />
        <div class="room-info">
          <h2 class="room-title">{{ room.title }}</h2>
          <p>{{ room.description }}</p>
          <span class="price">{{ room.price }} USD/Noche</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);
const bannerImages = [
  'https://static.abc.es/Media/201504/27/hotel12--644x362.jpg',
  'https://www.sofitelbarucalablanca.com/wp-content/uploads/sites/19/2023/04/DUF_8644-v-ok-1170x780.jpg',
  'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152451/Mandarin-Oriental-Hong-Kong-3.jpg',
  'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/05/20152251/Dorado-Beach-a-Ritz-Carlton-Reserve-3.jpg',
  'https://media.ambito.com/p/0c5616e28bf58d0403a76b5cc372f420/adjuntos/239/imagenes/036/681/0036681201/1200x675/smart/2jpg.jpg',
  'https://media.revistaad.es/photos/65c21a5605ba5d3cad2a23ba/16:9/w_2560%2Cc_limit/atr.royalmansion-bedroom2-mr.jpg',
];

const rooms = [
  {
    id: 1,
    title: 'Habitación Doble',
    description: 'Cómoda habitación para dos personas con vistas al mar.',
    price: 100,
    image: 'https://www.ghlhoteles.com/cache/4f/56/4f56b540dec02093f24f38473594cecf.jpg',
  },
  {
    id: 2,
    title: 'Suite Familiar',
    description: 'Amplia suite con sala de estar y cocina.',
    price: 150,
    image: 'https://www.hotelboutiquecaney.com/media/30164/hote-boutique-caney-villa-de-leyva-habitacion-familiar-hero.jpeg',
  },
  {
    id: 3,
    title: 'Habitación Ejecutiva',
    description: 'Habitación con escritorio y servicios para ejecutivos.',
    price: 120,
    image: 'https://www.windsortower.com/wp-content/uploads/2015/04/1-1.jpg',
  },
  {
    id: 4,
    title: 'Habitación Sencilla',
    description: 'Ideal para viajeros solitarios con todas las comodidades.',
    price: 80,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/f9/ef/1a/pequeno-gran-hotel.jpg',
  },
  {
    id: 5,
    title: 'Habitación con Balcón',
    description: 'Habitación con balcón privado y vistas panorámicas.',
    price: 140,
    image: 'https://images.homify.com/v1441997275/p/photo/image/899911/15._Habitaci%C3%B3n_2.jpg',
  },
  {
    id: 6,
    title: 'Habitación Deluxe',
    description: 'Habitación de lujo con jacuzzi y vista al jardín.',
    price: 200,
    image: 'https://hotelnana.com.co/wp-content/uploads/2021/06/suite-deluxe.jpg',
  },
  {
    id: 7,
    title: 'Habitación con Vista al Mar',
    description: 'Habitación con increíbles vistas al océano.',
    price: 130,
    image: 'https://www.hotelcasablancasanandres.com/assets/cache/uploads/habitacion-doble-superior/1145x535/cama-matrimonio-habitacion-superior-vistas-mar-hotel-casablanca-san-andres.jpg',
  },
  {
    id: 8,
    title: 'Habitación Confort',
    description: 'Habitación cómoda y acogedora para una estancia relajante.',
    price: 90,
    image: 'https://pensua.com/wp-content/uploads/Doble_grande-2.jpg',
  },
  {
    id: 9,
    title: 'Habitación Premium',
    description: 'Habitación de alta gama con todos los lujos.',
    price: 175,
    image: 'https://puntadiamantehotel.com/wp-content/uploads/2018/06/1.-HABITACIONES-HPD-2021_75.jpg',
  },
  {
    id: 10,
    title: 'Suite Nupcial',
    description: 'Perfecta para parejas con lujo y romanticismo.',
    price: 250,
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/90/03/ae/suite-nupcial.jpg',
  },
  {
    id: 11,
    title: 'Habitación Adaptada',
    description: 'Habitación diseñada para personas con movilidad reducida.',
    price: 110,
    image: 'https://ortosureste.es/wp-content/uploads/2019/02/adaptar-habitacion-minisvalidos-discapacitados.jpg',
  },
  {
    id: 12,
    title: 'Habitación con Cocina',
    description: 'Habitación equipada con cocina para estancias prolongadas.',
    price: 160,
    image: 'https://www.hgcitysuites.com/assets/img/gallery/random/es/hg-city-suites_0215.jpg',
  },
];

const startCarousel = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bannerImages.length;
  }, 4000);
};

onMounted(() => {
  startCarousel();
});

</script>

<style scoped>
.body{
  background: linear-gradient(90deg, #476ff3, #319afc, #86a8e7, #7f7fd5);
}

.banner {
  position: relative;
  text-align: center;
  color: white;
  overflow: hidden;
  height: 300px;
}

.banner-images {
  display: flex;
  transition: transform 1s ease-in-out;
}

.banner-image {
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
}

.room-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.room-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.room-card:hover {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.room-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.room-info {
  padding: 15px;
}

.price {
  font-weight: bold;
  color: #2e7d32;
}

.room-title {
  font-size: 1.2em;
  margin: 10px 0;
}
</style>
