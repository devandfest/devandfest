<!--
@license
Copyright (c) 2018 The DevAndFest creators.
This code may only be used under the MIT style license.
-->
<template>
  <a-layout-content>
    <div id="content">
      <section>
        <header>
          <h1>Welcome to the DevAndFest website</h1>
        </header>
        <Timepath id="timeline"/>
      </section>
    </div>
  </a-layout-content>
</template>


<script>

import Timepath from './Timepath.vue'

export default {
  name: 'Home',
  components:{
    Timepath
  }
}
</script>

<style scoped>
  #content {
    margin-top: 4%;
  }

  #timeline {
    margin: 0 auto;
  }
</style>
