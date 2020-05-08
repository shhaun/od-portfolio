<template>
  <div class="body">
    <div class="text">
    <h1 id="get-to" v-resize-text="{ratio: 0.7,  maxFontSize: '90px'}">get to</h1>
    <h1 id="know-me" v-resize-text="{ratio: 0.7,  maxFontSize: '90px'}">know me</h1>
    </div>
    <div class="container">
      <div class="item" id="item2">
        <div class="split"><h3 class="names">NAMES & BIRTHDAY</h3>
          <h2 style="line-height: 0.8;margin-top: -1px;font-size: 33px; color: white;"><span style="color:black">O</span>LIVIA <span style="color: black">D</span>ARIA</h2>
          <h2 style="line-height: 0.8;font-size: 25px; color: white;"><i class="fas fa-fish"></i> 0<span style="margin-left:2px;font-size: 33px; font-weight: 700;">4</span>-03-<span style="margin-left:2px;font-size: 33px; font-weight: 700;">20</span>00 <i class="fas fa-fish fa-flip-horizontal"></i> </h2>
        </div>
        <div class="split">
          <h3 class="social">SOCIAL MEDIA</h3>
          <div id="social">
            <a href="https://facebook.com/owczarczykolivia" target="_blank"><i class="fab fa-facebook-square" onmouseover="this.style.color='#E0CC81'" onmouseout="this.style.color='#000000'" onclick="this.style.color='#FFFFFF'"></i></a>
            <a href="hhttps://github.com/shhaun" target="_blank"><i class="fab fa-linkedin" onmouseover="this.style.color='#9879a7'" onmouseout="this.style.color='#000000'" onclick="this.style.color='#FFFFFF'"></i></a>
            <a href="https://github.com/shhaun" target="_blank"><i class="fab fa-github-square" onmouseover="this.style.color='#77B8B5'" onmouseout="this.style.color='#000000'" onclick="this.style.color='#FFFFFF'"></i></a>
            <a href="https://x-bad-blood.tumblr.com/" target="_blank"><i class="fab fa-tumblr-square" onmouseover="this.style.color='#d17ea4'" onmouseout="this.style.color='#000000'" onclick="this.style.color='#FFFFFF'"></i></a>
          </div>
        </div>
      </div>
      <div class="item" id="item1"></div>
      <div class="item" id="item3">
        <div class="split">
          <h3 class="loves"><span style="font-size:2vh">🤍</span> L <span style="font-size:2vh">💛</span> O <span style="font-size:2vh">💚</span> V  <span style="font-size:2vh">💙</span> E <span style="font-size:2vh">💜</span> S <span style="font-size:2vh">💗</span></h3>
          <div id="loves">
            <h2>&lt;/witty humour&gt;</h2>
            <h2>&lt;/aesthetic creations&gt;</h2>
            <h2>&lt;/pragmatic solutions&gt;</h2>
            <h2>&lt;/original ideas&gt;</h2>
          </div>
          </div>
        <div class="split">
          <h3 class="disdains">LOVES-NOT-SO-MUCH</h3>
          <div id="disdains">
            <h2>&gt;</h2>
            <h2>&lt;/exorbitant uptightness&gt;</h2>
            <h2>&lt;/unqualyity time&gt;</h2>
            <h2>&lt;/deadlines&gt;</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ResizeText from 'vue-resize-text';

  export default {
    name: 'About',
    directives: {
      ResizeText,
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  .body {
    width: 100%;
    height: auto;
    margin: auto;
background-color: white;
      background: linear-gradient(0deg, rgba(128,128,128,1) 0%, rgba(255,255,255,1) 25%);

    @media screen and (max-width: 800px) {
      .body {
        height: auto;
      }
      .container {
        align-items: center;
        justify-content: center;
        flex-direction: column;text-align:justify;

        .item {
          margin-bottom: 2.5vh;
          width: 90%;
        }
      }
      #item1 {
        margin-top: 2.5vh;
        height: 80vh;
        margin-bottom: 0px;
      }
      #item2 {
        margin-bottom: 0px;
        filter: brightness(90%);
      }
      #item3 {
        margin-top: -20px;
          filter: brightness(80%);
      }
    }
    @media screen and (max-width: 1125px) and (min-width: 800px) {
      .body {
          height: auto;
      }
        .item {
        transform: scale(0.8);
      }
      .container {
        justify-content: space-around;
      }
    }

    #get-to {
      height: 35%;
      color: #E0CC81;
      margin-top: 5vh;
      text-align: start;
      margin-left: 10%;
      margin-right: 10%;
      &:hover {
        text-align: end;
        color: #9879a7;
      }
    }
    #know-me {
      color: #77B8B5;
      text-align: end;
      margin-right: 10%;
      margin-left: 10%;
      &:hover {
        text-align: start;
        color: #d17ea4;
      }
    }
  }
  h1 {
    margin: 0px;
    text-align: center;
    font-family: all-round-gothic, sans-serif;
    font-weight: lighter;
    text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000, -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000, -2px 0px 0 #000000, 0px -2px 0 #000000;
  }
  h2 {
      font-family: marydale, sans-serif;
      font-weight: 400;
      font-style: normal;
      line-height: 0.95;
  }
  h3 {
    font-weight: normal;
    text-align: center;
    font-size: 3vh;
  }
  .container {
      width: 95%;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      align-content: center;

      .item {
          width: 50vh;
          height: 60vh;
          align-items: center;
          justify-content: center;
          text-align: center;

          #name {
              display: flex;
              align-items: center;
              justify-content: center;
              text-align: center;
              align-self: flex-end;
              background: slategrey;
              height: 10%;
              width: 100%;
          }
      }

      #item1 {
          background-image: url("../assets/prof.jpg");
          background-size: cover;
          background-position: center;
          display: flex;
        transform: scale(0.9);
          transition: all 0.3s ease-in-out;
          &:hover {
              filter: invert(0.8);
          }
      }

      #item2 {

      }
      #item3 {

      }
      .split {
          height: 42.5%;
          background: linear-gradient(0deg, rgba(185,134,157,1) 14%, rgba(152,127,164,1) 34%, rgba(111,120,143,1) 57%, rgba(135,158,177,1) 77%, rgba(130,163,155,1) 100%);
          opacity: 0.95;
          border-radius: 0.5vh;
          &:hover {
              background: linear-gradient(180deg, rgba(185,134,157,1) 14%, rgba(152,127,164,1) 34%, rgba(111,120,143,1) 57%, rgba(135,158,177,1) 77%, rgba(130,163,155,1) 100%);
          }
          h3 {
          padding-top: 1.5vh;
          }
      }
      .names, .social, .loves, .disdains {
          background-color: rgba(0, 0, 0, 0.33);
          padding-bottom: 7.5px;
          border-radius: 0 0 3vh 3vh;
          color: white;
          text-shadow: 1px 1px 0 #000000, -1px -1px 0 #000000, -1px 1px 0 #000000, 1px -1px 0 #000000, 1px 0px 0 #000000, 0px 1px 0 #000000, -1px 0px 0 #000000, 0px -1px 0 #000000;
      }

      #social {
          margin-top: 27.5px;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: space-evenly;
          text-align: center;
          font-size: 10vh;
          a {
              color: rgb(255, 255, 255);
              &:active {
                  color: black;
              }
          }
          #fa-facebook-square:hover {
              color: #E0CC81;
          }
          #fa-linkedin:hover {
              color: #9879a7;
          }
          #fa-github-square:hover {
              color: #77B8B5;
          }
          .fa-tumblr-square:hover {
              color: #d17ea4;
          }
      }
      #disdains, #loves {
          margin-top: -5px;
          h2 {
              font-size: 16px;
          }
      }
      span {
          font-weight: 900;
          font-size: 40px;
      }
  }
</style>
