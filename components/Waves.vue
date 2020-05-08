<template>
    <div>
    <div class="waves">
      <div class="txt">
        <h1 v-resize-text="{ratio: 0.6, minFontSize: '40px', maxFontSize: '110px'}">OPTICAL<br>DELUSION</h1>
        <h3 v-resize-text="{ratio: 2.0, maxFontSize: '30px', minFontSize: '10px'}">a piece of magic.<br>moves only in a mind.<br>not there physically at all.</h3>
      </div>
    </div>
        <div class="stripes"><img alt="stripes" src="../assets/triangle-deconstructed.png"></div>
    </div>
</template>

<script>
  import ResizeText from 'vue-resize-text';
  import FOG from 'vanta/dist/vanta.fog.min';
  import * as THREE from 'three';



  export default {
    directives: {
      ResizeText
    },
    mounted() {
      this.vantaEffect = FOG({
        el: ".waves",
        THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xfc3eae,
          midtoneColor: 0x21d7ff,
          lowlightColor: 0xfadf1b,
          baseColor: 0x1d1d1d,
          blurFactor: 0.27,
          speed: 0.60,
          zoom: 0.5
      });
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .body {
    width: 100vh;
    height: auto;
    background: white;

  }
  .waves {
    width: 95%;
    height: 90vh;
    display: flex;
    margin: auto;
    justify-content: flex-end;
      position: relative;
  }
  .stripes {
      position: absolute;
      height: 40vh;
      width: 40vh;
      bottom: 0;
      left: 0;
  }
  img {
      height: 100%;
      width: 100%;
      filter: invert(1);
  }
  .txt {
      color: white;
    width: 70%;
    margin-top: 10vh;
    text-align: end;
    padding-right: 5%;
      position:absolute;
      top:0;
  }
  h1 {
      text-shadow: 0 1px #808d93, 1px 0 #cdd2d5, 1px 2px #808d93, 2px 1px #cdd2d5, 2px 3px #808d93, 3px 2px #cdd2d5, 3px 4px #808d93, 4px 3px #cdd2d5, 4px 5px #808d93, 5px 4px #cdd2d5, 5px 6px #808d93, 6px 5px #cdd2d5, 6px 7px #808d93, 7px 6px #cdd2d5, 7px 8px #808d93, 8px 7px #cdd2d5;
      &:hover {
          transform: scale(1) rotate(0deg) translate(8px, 7px) skew(0deg, 0deg);
          text-shadow: 0 1px #808d93, 1px 0 #cdd2d5, 1px 2px #808d93, 2px 1px #cdd2d5, 2px 3px #808d93, 3px 2px #cdd2d5;
      }
  }
h3 {
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    animation: glow1 1s ease-in-out infinite alternate;
    transition: color 0.2s linear;
    &:hover {
        color: rgba(5, 75, 105, 0.52);
        animation: glow2 1s ease-in-out infinite alternate;
    }
}
  @-webkit-keyframes glow1 {
      from {
      text-shadow: -2px -2px 8px #FFFFFF, -2px -2px 8px #FFFFFF, -2px -2px 8px #FFFFFF;
      }
      to {
          text-shadow: 2px 2px 8px #FFFFFF, 2px 2px 8px #FFFFFF, 2px 2px 8px #FFFFFF;
      }
  }
  @-webkit-keyframes glow2 {
      from {
          text-shadow: 2px -2px 8px #FFFFFF, 2px -2px 8px #FFFFFF, 2px -2px 8px #FFFFFF;
      }
      to {
          text-shadow: -2px 2px 8px #FFFFFF, -2px 2px 8px #FFFFFF, -2px 2px 8px #FFFFFF;
      }
  }
</style>
