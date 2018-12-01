<template>
    <a-layout-header id="content">
        <header>
            <h1><a href="#">Dev&Fest</a></h1>
        <a-menu
                id="menu"
                v-model="current"
                mode="horizontal"
        >
            <a-menu-item class="menu-item" key="mail">
                <router-link :to="{ name: 'Home' }">
                    <a-icon type="mail" />Home
                </router-link>
            </a-menu-item>
            <a-menu-item class="menu-item" key="mail">
                <router-link to="/about">
                    <a-icon type="mail" />About
                </router-link>
            </a-menu-item>
        </a-menu>
        </header>
    </a-layout-header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    #content {
        background-color: #0B3B0B;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    }

    header {
        text-align: left;
    }

    header h1 a {
        color: white;
        padding-left: 2.5%;
    }

    header h1 a:hover {
        color: #aaa;
    }

</style>