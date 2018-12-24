
<template>
    <section>
        <h1>{{ welcome }}</h1>
        <Timeline id="timeline"/>
    </section>
</template>


<script>
    import Timeline from '../components/Timeline.vue'

    export default {
        name: 'Home',
        components: {
            Timeline
        },
        data () {
            return {
                welcome: "Bienvenido"
            }
        }
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    #timeline {
        margin: 0 auto;
    }
</style>
