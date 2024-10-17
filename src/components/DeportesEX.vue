<template>
  <div id="app">
    <div class="banner">
      <img :src="bannerImage" alt="Banner" class="banner-image" />
      <h1 class="banner-title">Explora los Mejores Deportes Extremos</h1>
    </div>

    <div class="sports-container">
      <div class="card" v-for="sport in sports" :key="sport.id">
        <img :src="sport.image" alt="sport.name" class="sport-image" />
        <h3 class="sport-title">{{ sport.name }}</h3>
        <p class="sport-description">{{ sport.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bannerImage: 'https://santander.gov.co/info/santander_se/media/pubInt/thumbs/thMetapubInt_600X600_8057.jpg',
      sports: [
        {
          id: 1,
          name: 'Surfing',
          description: 'Es un deporte acuático en el que los surfistas montan sobre una tabla mientras son impulsados por las olas del océano. Requiere habilidades para navegar y mantener el equilibrio en condiciones cambiantes.',
          image: 'https://imageio.forbes.com/specials-images/imageserve/6678870425b3882a4b4995fb/SURFING-FRA-WSL-TAHITI/960x0.jpg?format=jpg&width=960',
        },
        {
          id: 2,
          name: 'Paracaidismo',
          description: 'Consiste en saltar desde un avión y experimentar una caída libre antes de abrir un paracaídas para aterrizar de manera segura. Es un deporte que proporciona una sensación de libertad y adrenalina.',
          image: 'https://www.skydive.com.au/wp-content/uploads/2021/07/Location-web-headers-1280-720-Cairns.jpg',
        },
        {
          id: 3,
          name: 'Escalada',
          description: 'Es un deporte que implica ascender por paredes de roca o montañas utilizando solo las manos y los pies. Puede ser deportiva, tradicional o en roca, y requiere fuerza, resistencia y técnica.',
          image: 'https://images.everydayhealth.com/images/healthy-living/fitness/rock-climbing-guide-1440x810.jpg',
        },
        {
          id: 4,
          name: 'Bungee Jumping',
          description: 'Implica saltar desde una gran altura mientras se está atado a una cuerda elástica. La experiencia es intensa y provoca una fuerte liberación de adrenalina al caer y rebotar hacia arriba.',
          image: 'https://xplorercolombia.com/wp-content/uploads/2021/05/deporte-extremo-1024x555.jpg',
        },
        {
          id: 5,
          name: 'Cable Vuelo',
          description: 'Involucra deslizarse a gran velocidad a lo largo de un cable suspendido entre dos puntos. Se realiza generalmente en entornos naturales y ofrece vistas panorámicas emocionantes.',
          image: 'https://weekend-bucket.s3.amazonaws.com/Cable_Vuelo_en_San_Gil_5_99ef3aaf6a.jpg',
        },
        {
          id: 6,
          name: 'Espeleología',
          description: ' Es la exploración de cuevas y formaciones subterráneas. Implica habilidades de escalada y nado, así como la observación de formaciones geológicas y ecosistemas únicos.',
          image: 'https://www.ecoturismoruidera.com/wp-content/uploads/2018/08/cave-622184_960_720-960x675.jpg',
        },
        {
          id: 7,
          name: 'Canotaje',
          description: 'Se refiere al uso de canoas o kayaks para navegar en ríos, lagos o mares. Puede ser recreativo o competitivo y puede incluir técnicas de remado, maniobras en aguas bravas y exploración de la naturaleza.',
          image: 'https://regiones.prisamedia.co/wp-content/uploads/2023/08/Personas-practicando-el-rafting-o-canotaje-Foto-via-Getty-Images-scaled.jpg',
        },
        {
          id: 8,
          name: 'Caminata Ecologica',
          description: 'Consiste en caminar a través de entornos naturales, promoviendo el contacto con la naturaleza y la observación de la flora y fauna. Es una actividad recreativa que también fomenta la conservación del medio ambiente.',
          image: 'https://noticias.inderbu.gov.co/wp-content/uploads/2019/02/CAMINATA-ECOLOGICA-e1551375006754.jpg',
        },
        {
          id: 9,
          name: 'Columpio Extremo',
          description: ' Consiste en un columpio de gran altura que permite a los participantes experimentar la sensación de volar. Generalmente se realiza en lugares con vistas impresionantes y puede incluir giros y oscilaciones.',
          image: 'https://weekend-bucket.s3.amazonaws.com/Columpio_Extremo_San_Gil_1_2ac2c55d44.jpg',
        },
        {
          id: 10,
          name: 'Rapel',
          description: 'Consiste en descender verticalmente por una superficie, generalmente roca o pared, utilizando cuerdas y equipo especializado. Es utilizado tanto en escalada como en exploración de cuevas.',
          image: 'https://www.forumsport.com/es-es/blogs/montana/wp-content/uploads/sites/3/2023/07/foto1.jpg',
        },
        {
          id: 11,
          name: 'Cuatrimotos',
          description: ' Es el uso de vehículos todo terreno (ATV) para recorrer terrenos difíciles. Este deporte combina velocidad y maniobrabilidad, y puede ser realizado en diversas condiciones, desde montañas hasta desiertos.',
          image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0d/2f/7c/e2.jpg',
        },
        {
          id: 12,
          name: 'Paintball',
          description: ' Es un deporte de equipo en el que los participantes disparan bolas de pintura a otros jugadores usando marcadoras. Se juegan diferentes modos de juego en escenarios que simulan situaciones de combate.',
          image: 'https://offloadmedia.feverup.com/madridsecreto.co/wp-content/uploads/2024/03/04124759/Paintball-Madrid-1024x682.jpg',
        },
      ],
    };
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
  background-color: white;
}

.banner {
  position: relative;
  text-align: center;
  color: white;
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

.sports-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.sport-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.sport-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.sport-description {
  padding: 0 10px;
  font-size: 0.9em;
}
</style>
