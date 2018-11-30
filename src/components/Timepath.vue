<template>
  <a-timeline id="timeline">
    <a-timeline-item>¡Lanzamos el evento!</a-timeline-item>
    <a-timeline-item>Abrimos el call for papers [fecha]</a-timeline-item>
    <a-timeline-item>Abrimos la compra de entradas [fecha]</a-timeline-item>
    <a-timeline-item>Cierre del call for papers [fecha]</a-timeline-item>
    <a-timeline-item>Cierre de la venta de entradas [fecha]</a-timeline-item>
    <a-timeline-item>¡Dev&Fest!</a-timeline-item>
  </a-timeline>
</template>


<script>
    export default {
        name: "Timepath"
    }
</script>

<style scoped>
  #timeline{
    width: 15%;
  }

</style>
