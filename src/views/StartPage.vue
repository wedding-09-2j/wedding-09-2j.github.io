<template>
  <div id="start-page">
    <div class="second background-photo">
      <canvas id="canvas"></canvas>

      <section class="neon neon-title">
        <h1>wedding fiesta</h1>
        <h6>D-{{ dday }}</h6>
      </section>
      <div class="bottom">
        <h1>
          2022.04.17 SUN PM 01:30 <br />
          빌라드지디 수서
        </h1>
      </div>
    </div>
    <div class="third"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

@Component({})
export default class StartPage extends Vue {
  get dday() {
    const today = new Date();
    const targetDate = new Date(2022, 3, 17);
    console.log(today, targetDate);

    const gap = targetDate.getTime() - today.getTime();

    return Math.ceil(gap / (1000 * 60 * 60 * 24));
  }
  mounted() {
    $(window).scroll(() => {
      const scrollTop = $(window).scrollTop() as number;
      $('canvas').css('opacity', scrollTop / 1200);
      const secondPage = document.getElementById('contact-page') as HTMLElement;
      if (secondPage.getBoundingClientRect().top < 100) {
        $('canvas').css('opacity', 1 - scrollTop / 1200);
      } else {
        $('canvas').css('opacity', scrollTop / 1200);
      }
    });
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');

$global-font: 'Nanum Myeongjo', serif;
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');
canvas {
  z-index: 1;
  pointer-events: none;
  position: fixed;
  top: 0;
  transform: scale(1.1);
  min-width: 340px;
  height: 100vh;
  opacity: 0;
  left: 0;
}
// @keyframes blink-effect {
//   50% {
//     opacity: 0;
//   }
// }
// .blink {
//   animation: blink-effect 1s step-end infinite; /* animation-name: blink-effect; animation-duration: 1s; animation-iteration-count:infinite; animation-timing-function:step-end; */
// }
.first,
.second {
  max-width: 840px;
  width: 100%;
  min-width: 340px;
  height: 100vh;
}
#start-page {
  // height: 300vh;
  left: 0px;
  top: 0px;

  font-family: 'Archivo Black', sans-serif;
  .title-logo {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 3%;
    svg {
      width: 80% !important;
      display: block;
      margin-left: auto;
      margin-right: auto;
      height: auto;
      top: 0px;
    }
    justify-items: center;

    h1 {
      text-align: center;
      width: 100%;
      color: #8400ae;
      font-size: 2vh;
    }
  }
}
.title-logo {
  text-align: center;
  width: 100%;
  color: #8400ae;
  font-size: 2vh;
}
.first {
  background-image: url('../assets/shell.png');
  background-size: contain;
  background-position-x: center;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-color: #1f2430;
}
.background-photo {
  // position: fixed;
  height: 100vh;
  width: 100%;
  background-position-x: 60%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('../assets/photos/start_image.jpg');
}
.third {
  position: relative;
  top: 100vh;
  min-height: 100vh;
  box-sizing: border-box;
  background: url('../assets/photos/contact_image.jpg');
  background-size: cover;
  opacity: 0;
}
.neon-title {
  position: relative;
  top: 8%;
}
#logo {
  background-image: url('../assets/wedding_fiesta.png');

  width: 337px;
  height: 76px;
  position: absolute;
  background-size: cover;
  top: 49px;
  left: 21px;
}

.bottom {
  position: absolute;
  width: 100%;
  height: 10em;
  bottom: 0px;
  background: rgba(255, 255, 255, 0.19);
  display: flex;
  align-items: center;
  justify-content: space-around;
  h1 {
    font-family: $global-font;
    font-weight: 800;
    color: white;
    font-size: 1.3rem;
  }
}
</style>
