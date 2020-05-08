<template>
  <header>
    <div class="header-container">
      <div id="logo">
        <img alt="Optical Delusion" src="../assets/logo.png">
      </div>
      <div class="toggle">  <!-- id = switch=mytoggle  |  name = theme=toggle   -->
        <input type="checkbox" name="toggle" class="check-checkbox" id="mytoggle">
        <label class="check-label" for="mytoggle">
          <div id="background"></div>
          <span class="face">
        <span class="face-container">
          <span class="eye left"></span>
          <span class="eye right"></span>
          <span class="mouth"></span>
        </span>
      </span>
        </label>
      </div>
      <div>
        <a class="button"><button>CONTACT</button></a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat');
  $background:#B2B1CF;
  $white:#fff;
  header {
  background-color: white;
}
  .header-container {
    height: 10vh;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #F2F2F2;
    justify-content: space-between;
    #logo {
      width: 8vh;
      height: 8vh;
      margin-top: 1vh;
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
    .toggle {
      transform: scale(0.5);
      width: 12.25rem;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    [type="checkbox"] {
      display: none;
    }

    .check-label {
      display: block;
      width: 12.25rem;
      height: 5.5rem;
      border: none;
      border-radius: 0.5rem;
      background: purple;
      cursor: pointer;
      overflow: hidden;
      .face {
        display: block;
        position: absolute;
        content: '';
        top: 0.45rem;
        bottom: 0;
        right: 7.25rem;
        width: 4.5rem;
        height: 4.5rem;
        margin: 0;
        border: none;
        border-radius: 0.5rem;
        background: -webkit-linear-gradient(45deg, #dedede 0%, #fff 70%);
        background: -o-linear-gradient(45deg, #dedede 0%, #fff 70%);
        background: linear-gradient(45deg, #dedede 0%, #fff 70%);
        -webkit-transition: all 0.45s ease-in-out;
        -o-transition: all 0.45s ease-in-out;
        transition: all 0.45s ease-in-out;
        overflow: hidden;
      }
    }

    [type="checkbox"] {
      + .check-label #background {
        width: inherit;
        height: inherit;
        border: none;
        border-radius: inherit;
        background: palevioletred;
        opacity: 0;
        -webkit-transition: all 0.45s ease-in-out;
        -o-transition: all 0.45s ease-in-out;
        transition: all 0.45s ease-in-out;
      }
      &:checked + .check-label #background {
        opacity: 1;
      }
    }

    .face-container {
      position: absolute;
      width: 4.5rem;
      height: 4.5rem;
    }

    .face {
      -webkit-box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
      box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.25);
    }

    .eye {
      position: absolute;
      top: 2.25rem;
      height: 0.25rem;
      width: 0.625rem;
      background: #8e8e8e;
      border-radius: 0 0 100% 50%;
      &.left {
        left: 0.75rem;
      }
      &.right {
        left: 2.125rem;
      }
    }

    .mouth {
      position: absolute;
      top: 3.125rem;
      left: 1.45rem;
      width: 0.475rem;
      height: 0.25rem;
      background: #8e8e8e;
      border-radius: 40% 40% 100% 50%;
    }

    [type="checkbox"] {
      &:checked {
        + .check-label .face {
          right: 0.6rem;
          .face-container {
            -webkit-animation: rotateElement forwards 0.3s;
            animation: rotateElement forwards 0.3s;
          }
          .eye {
            &.left, &.right {
              -webkit-animation: changeFace forwards 0.3s 0.075s;
              animation: changeFace forwards 0.3s 0.075s;
            }
          }
          .mouth {
            -webkit-animation: changeMouth forwards 0.3s 0.075s;
            animation: changeMouth forwards 0.3s 0.075s;
          }
        }
        + .check-label .face .eye {
          &.left {
            left: 1rem;
          }
          &.right {
            left: 2.5rem;
          }
        }
      }
      + .check-label .face {
        .face-container {
          -webkit-animation: rotateElementReverse forwards 0.3s;
          animation: rotateElementReverse forwards 0.3s;
        }
        .eye {
          &.left, &.right {
            -webkit-animation: changeFaceReverse forwards 0.3s;
            animation: changeFaceReverse forwards 0.3s;
          }
        }
        .mouth {
          -webkit-animation: changeMouthReverse forwards 0.3s;
          animation: changeMouthReverse forwards 0.3s;
        }
      }
    }

    @-webkit-keyframes rotateElement {
      0% {
        left: 0;
      }

      25% {
        left: 4rem;
      }

      30% {
        opacity: 0;
      }

      50% {
        opacity: 0;
        left: -4rem;
      }

      90% {
        opacity: 1;
      }

      100% {
        left: 1rem;
        opacity: 1;
      }
    }


    @keyframes rotateElement {
      0% {
        left: 0;
      }

      25% {
        left: 4rem;
      }

      30% {
        opacity: 0;
      }

      50% {
        opacity: 0;
        left: -4rem;
      }

      90% {
        opacity: 1;
      }

      100% {
        left: 1rem;
        opacity: 1;
      }
    }


    @-webkit-keyframes changeFace {
      100% {
        top: 1.7rem;
        width: 0.375rem;
        height: 0.375rem;
        background: #8e8e8e;
        border: none;
        border-radius: 100%;
      }
    }


    @keyframes changeFace {
      100% {
        top: 1.7rem;
        width: 0.375rem;
        height: 0.375rem;
        background: #8e8e8e;
        border: none;
        border-radius: 100%;
      }
    }


    @-webkit-keyframes changeMouth {
      100% {
        top: 2.55rem;
        left: 1.125rem;
        height: 0.625rem;
        width: 1.625rem;
        background: #8e8e8e;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#8e8e8e), to(#a4a4a4));
        background-image: -webkit-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: -o-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: linear-gradient(to bottom, #8e8e8e, #a4a4a4);
        border-radius: 0.2rem 0.2rem 1rem 1rem;
      }
    }


    @keyframes changeMouth {
      100% {
        top: 2.55rem;
        left: 1.125rem;
        height: 0.625rem;
        width: 1.625rem;
        background: #8e8e8e;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#8e8e8e), to(#a4a4a4));
        background-image: -webkit-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: -o-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: linear-gradient(to bottom, #8e8e8e, #a4a4a4);
        border-radius: 0.2rem 0.2rem 1rem 1rem;
      }
    }


    @-webkit-keyframes rotateElementReverse {
      0% {
        left: 0;
      }

      25% {
        left: -4rem;
      }

      30% {
        opacity: 0;
      }

      50% {
        opacity: 0;
        left: 4rem;
      }

      90% {
        opacity: 1;
      }

      100% {
        left: 0;
        opacity: 1;
      }
    }


    @keyframes rotateElementReverse {
      0% {
        left: 0;
      }

      25% {
        left: -4rem;
      }

      30% {
        opacity: 0;
      }

      50% {
        opacity: 0;
        left: 4rem;
      }

      90% {
        opacity: 1;
      }

      100% {
        left: 0;
        opacity: 1;
      }
    }


    @-webkit-keyframes changeFaceReverse {
      0% {
        top: 1.7rem;
        width: 0.375rem;
        height: 0.375rem;
        border: none;
        border-radius: 100%;
        background: #8e8e8e;
      }
    }


    @keyframes changeFaceReverse {
      0% {
        top: 1.7rem;
        width: 0.375rem;
        height: 0.375rem;
        border: none;
        border-radius: 100%;
        background: #8e8e8e;
      }
    }


    @-webkit-keyframes changeMouthReverse {
      0% {
        top: 2.55rem;
        left: 0.9rem;
        height: 0.625rem;
        width: 1.625rem;
        background: #8e8e8e;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#8e8e8e), to(#a4a4a4));
        background-image: -webkit-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: -o-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: linear-gradient(to bottom, #8e8e8e, #a4a4a4);
        border: none;
        border-radius: 0.2rem 0.2rem 1rem 1rem;
      }

      25% {
        left: 1.125rem;
      }
    }


    @keyframes changeMouthReverse {
      0% {
        top: 2.55rem;
        left: 0.9rem;
        height: 0.625rem;
        width: 1.625rem;
        background: #8e8e8e;
        background-image: -webkit-gradient(linear, left top, left bottom, from(#8e8e8e), to(#a4a4a4));
        background-image: -webkit-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: -o-linear-gradient(top, #8e8e8e, #a4a4a4);
        background-image: linear-gradient(to bottom, #8e8e8e, #a4a4a4);
        border: none;
        border-radius: 0.2rem 0.2rem 1rem 1rem;
      }

      25% {
        left: 1.125rem;
      }
    }

    $color: #284cff;

    button {
      height: 6vh;
      width: 15vh;
      margin: 2.5vh 1vh 0 0;
      flex: 1;
      border-radius: 0.5vh;
      border: 2.5px solid $color;
      color: black;
      text-align: center;
      font-family: all-round-gothic, sans-serif;
      font-weight: bold;
      font-size: 2.5vh;
      background: transparent;
      background-image: url(https://web.archive.org/web/20160312084140im_/http://splatoon.nintendo.com/assets/img/nav-bg-fill-blue.png?1443460871);
      background-repeat: repeat-x;
      background-position: 0 -100%;
      transition: 1.5s ease-out;
      filter: saturate(0);
      &:hover {
        background-position: 500% 100%;
        color: white;
      }
    }
  }
</style>
