<template>
  <section class="about-us">
    <h1>Bienvenidos a LocalSound</h1>
    <p>
      Nuestra página web busca crear un espacio de encuentro entre músicos y seguidores de la música de la provincia de
      Buenos Aires, proporcionando información sobre próximos conciertos, perfiles detallados de bandas y artistas, y la
      posibilidad de escuchar su música.
    </p>
    <p>
      Además, nos esforzamos por mantener a la comunidad informada sobre eventos musicales, festivales y oportunidades
      para apoyar a las bandas locales. LocalSound es la plataforma ideal para explorar la riqueza musical de la región,
      celebrar la creatividad local y construir puentes que fortalezcan la escena musical bonaerense.
    </p>
    <p class="call-to-action">
      <strong>¡Unite a nosotros para dar vida a la música de Buenos Aires!</strong>
    </p>
    <img src="@/assets/concert_01.jpg" alt="bandas">
  </section>

</template>
<style>
/* Contenedor principal */
.about-us {
  max-width: 800px;
  margin: 30px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
}

/* Título principal */
.about-us h1 {
  text-align: center;
  font-size: 2.2em;
  margin-bottom: 20px;
  color: blueviolet;
  /* Verde inspirador */
}

/* Párrafos */
.about-us p {
  margin-bottom: 20px;
  font-size: 1.1em;
}

/* Llamado a la acción */
.about-us .call-to-action {
  text-align: center;
  font-size: 1.3em;
  color: #4CAF50;

}

.about-us .call-to-action strong {
  color: #e91e63;
  /* Un color que destaque */
}

img {
  width: 800px;
  height: 300px;
}
</style>

<script>

export default {
  name: 'HomeComponent'
}


</script>
