<template>
  <div>
    <div class="banner gym-banner">
      <h1>Bienvenido al Gym</h1>
      <p>Transforma tu cuerpo y mente</p>
    </div>

    <div class="card-container">
      <div class="card" v-for="(training, index) in gymTrainings" :key="index">
        <img :src="training.image" alt="Entrenamiento" />
        <h3 class="training-title">{{ training.title }}</h3>
        <p>{{ training.description }}</p>
      </div>
    </div>

    <div class="banner restaurant-banner">
      <h1>Bienvenido al Restaurante</h1>
      <p>Descubre una variedad de sabores</p>
    </div>

    <div class="card-container">
      <div class="card" v-for="(food, index) in restaurantFoods" :key="index">
        <img :src="food.image" alt="Comida" />
        <h3 class="food-title">{{ food.title }}</h3>
        <p>{{ food.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GymAndRestaurantPage',
  data() {
    return {
      gymTrainings: [
        {
          title: 'Entrenamiento de Fuerza',
          description: 'Mejora tu fuerza muscular con pesas y ejercicios de resistencia.',
          image: 'https://www.entrenamiento.com/wp-content/uploads/2016/05/razones-para-entrenar-fuerza.jpg?width=1200&enable=upscale',
        },
        {
          title: 'Entrenamiento Cardiovascular',
          description: 'Aumenta tu resistencia y quema calorías con ejercicios cardiovasculares.',
          image: 'https://herculesdiario.es/wp-content/uploads/2024/03/young-man-sportswear-running-on-600nw-435565456.webp',
        },
        {
          title: 'Entrenamiento de Flexibilidad',
          description: 'Mejora tu rango de movimiento y previene lesiones con estiramientos.',
          image: 'https://media.revistagq.com/photos/60fd8c5164ee72f23c7a862d/4:3/w_2664,h_1998,c_limit/ejercicios-1277294716.jpg',
        },
        {
          title: 'Entrenamiento de HIIT',
          description: 'Entrenamiento de intervalos de alta intensidad para resultados rápidos.',
          image: 'https://cdn.shopify.com/s/files/1/0509/9552/7861/files/que-es-el-entrenamiento-hiit.jpg?v=1679658721',
        },
        {
          title: 'Entrenamiento Funcional',
          description: 'Ejercicios que simulan movimientos de la vida diaria para mejorar tu funcionalidad.',
          image: 'https://suelosport.com/wp-content/uploads/2023/10/entrenamiento-funcional-Suelosport.jpg',
        },
      ],
      restaurantFoods: [
        {
          title: 'Comida Mexicana',
          description: 'Disfruta de sabores auténticos de México con nuestros tacos y enchiladas.',
          image: 'https://www.recetasnestle.com.co/sites/default/files/2023-08/platos-ingredientes-comida-mexicana.jpg',
        },
        {
          title: 'Comida Italiana',
          description: 'Pasta fresca y pizzas al horno para los amantes de la comida italiana.',
          image: 'https://s1.ppllstatics.com/diariovasco/www/multimedia/201908/20/media/cortadas/comida-gastronomia-platos-italia-kUrE-RXT3H6k8R30qeWZiL4ovvCM-1248x770@Diario%20Vasco.jpg',
        },
        {
          title: 'Comida Japonesa',
          description: 'Sushi y ramen preparados por chefs expertos en comida japonesa.',
          image: 'https://s1.ppllstatics.com/diariovasco/www/multimedia/201906/19/media/cortadas/sushi-kd4E--624x385@Diario%20Vasco-koyH--624x385@Diario%20Vasco-kDwG--624x385@Diario%20Vasco.jpg',
        },
        {
          title: 'Comida Colombiana',
          description: 'Deliciosos platos como la bandeja paisa y las empanadas.',
          image: 'https://www2.claro.com.co/portal/recursos/co/cpp/promociones/imagenes/1652370816559-6-comida-colombiana.jpg',
        },
        {
          title: 'Comida Americana',
          description: 'Hamburguesas jugosas y costillas a la barbacoa para los amantes de la comida estadounidense.',
          image: 'https://media.istockphoto.com/id/531564300/es/foto/d%C3%ADa-de-los-ca%C3%ADdos-hamburguesas-caseras-de-d%C3%ADa-de-campo.jpg?s=612x612&w=0&k=20&c=LktJeGF7TaqmaZHiUkOVeBh2OcC0agO0u9TtTQmnnsc=',
        },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.banner {
  color: white;
  text-align: center;
  padding: 50px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  margin: 40px 20px;
  border-radius: 10px; 
}

.gym-banner {
  background-image: url('https://cdn.static.aptavs.com/imagenes/ejercicios-basicos-de-gimnasio-cuales-son-y-su-importancia/ejercicios-basicos-de-gimnasio.jpg');
  height: 300px;
}

.restaurant-banner {
  background-image: url('https://imagenes.eltiempo.com/files/image_1200_600/uploads/2022/11/11/636ec9b036dfd.png');
  height: 300px;
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

.training-title{
  font-size: 1.2em;
  margin: 10px 0;
}

.food-title{
  font-size: 1.2em;
  margin: 10px 0;
}
</style>


