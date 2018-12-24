<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <welcome-carousel/>
    </div>
</template>


<script>
    import WelcomeCarousel from "../components/WelcomeCarousel.vue"

    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Hello'
            }
        },
        components: {
            WelcomeCarousel
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
