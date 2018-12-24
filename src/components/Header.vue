<template>
  <a-layout-header id="content">
    <header>
      <h1>
        <a href="#">&#60;DevAndFest&#62;</a>
      </h1>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="home">
          <router-link :to="{ name: 'Home' }">
            <a-icon type="home"/>Home
          </router-link>
        </a-menu-item>
        <a-menu-item key="about">
          <router-link :to="{ name: 'About' }">
            <a-icon type="smile" theme="outlined"/>About
          </router-link>
        </a-menu-item>
      </a-menu>
    </header>
  </a-layout-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      current: ["home"]
    };
  }
};
</script>

<style scoped>
#content {
  background-color: #0b3b0b;
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