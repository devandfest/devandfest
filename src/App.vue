<!--
@license
Copyright (c) 2018 The DevAndFest creators.
This code may only be used under the MIT style license.
-->
<template>
  <div id="app">
    <a-layout>
      <Header title="DevAndFest"/>
      <Home/>
      <a-layout-footer>
        <Footer/>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
