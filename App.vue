
<template>
  <div id= "app">
    <Header/>
    <Waves/>
    <About/>
    <Description/>
    <Projects/>
  </div>
</template>

<script>
  import ResizeText from 'vue-resize-text';
  import Header from '@/components/Header.vue';
  import Waves from '@/components/Waves.vue';
  import About from '@/components/About.vue';
  import Description from '@/components/Description.vue'
  import Projects from "@/components/Projects.vue";

  export default {
    name: 'App',
    components: {
      Header,
      Waves,
      About,
      Description,
      Projects,
    },
    directives: {
      ResizeText
    }
  }
</script>

<style lang="scss">
  @import url('https://use.typekit.net/dhd0tph.css');

  body {
    margin: 0;
  }
  h1 {
    font-family: prohibition, sans-serif;
    font-style: oblique;
  }
  h2 {
    font-size: 2vh;
  }
  h3 {
    font-family: all-round-gothic, sans-serif;
    font-weight: 200;
    font-style: normal;
  }
</style>
