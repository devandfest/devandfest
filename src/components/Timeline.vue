<template>
  <a-timeline id="timeline">
    <a-timeline-item class="time-item"> {{ kickoff }} </a-timeline-item>
    <a-timeline-item class="time-item"> {{ openc4p }} </a-timeline-item>
    <a-timeline-item class="time-item"> {{ opentickets }} </a-timeline-item>
    <a-timeline-item class="time-item"> {{ closec4p }} </a-timeline-item>
    <a-timeline-item class="time-item"> {{ closetickets }} </a-timeline-item>
    <a-timeline-item class="time-item">¡Dev&Fest!</a-timeline-item>
  </a-timeline>
</template>


<script>
    export default {
        name: "Timeline",
        data() {
            return {
                kickoff: "¡Lanzamos el evento!",
                openc4p: "Abrimos el call for papers [fecha]",
                opentickets: "Abrimos la compra de entradas [fecha]",
                closec4p: "Cierre del call for papers [fecha]",
                closetickets: "Cierre de la venta de entradas [fecha]"
            }
        }
    }
</script>

<style scoped>
    #timeline {
        width: 15%;
    }
    .time-item {
        text-align: left;
    }
    @media (max-width: 1720px) {
        #timeline {
            width: 30%;
        }
    }

    @media (max-width: 750px) {
        #timeline {
            width: 50%;
        }
    }

    @media (max-width: 450px) {
        #timeline {
            width: 80%;
        }
    }

</style>
