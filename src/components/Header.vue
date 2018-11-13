<template>
    <header>
        <div>
            <a-menu
                    v-model="current"
                    mode="horizontal"
            >
                <a-menu-item key="mail">
                    <router-link :to="{ name: 'Home' }">
                     <a-icon type="mail" />Home

                    </router-link>
                </a-menu-item>
                <a-menu-item key="mail">
                    <router-link to="/about">
                        <a-icon type="mail" />About
                    </router-link>
                </a-menu-item>
            </a-menu>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    header {
        color: white;
    }
</style>