<!--
@license
Copyright (c) 2018 The DevAndFest creators.
This code may only be used under the MIT style license.
-->

<template>
    <a-layout-header id="app-header">
        <h1>
            <a id="web-title" href="#">{{title}}</a>
        </h1>
    </a-layout-header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: String
        }
    }
</script>

<style scoped>
    #app-header{
        background-color: #2e7d32;
    }

    #app-header{
        text-align: left;
    }

    #web-title {
        color: white;
    }

    #web-title:hover{
        color: #ccc;
    }
</style>