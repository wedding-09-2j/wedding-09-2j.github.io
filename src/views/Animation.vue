<template>
  <section id="animation" class="scroll-content">
    <div class="scroll-graphic">
      <div class="graphic-item">
        <img class="scene-img" src="@/assets/photos/kyu1.gif" alt="" />
      </div>
      <div class="graphic-item">
        <!-- <img class="scene-img" src="@/assets/photos/kyu1.gif" alt="" /> -->
        <img class="scene-img" src="@/assets/photos/jay1.png" alt="" />
      </div>
      <div class="graphic-item">
        <img class="scene-img" src="@/assets/photos/jaykyu2.gif" alt="" />
      </div>
      <div class="graphic-item">
        <img class="scene-img" src="@/assets/photos/jaykyu3.gif" alt="" />
      </div>
      <div class="graphic-item">
        <img class="scene-img" src="@/assets/photos/jaykyu4.gif" alt="" />
      </div>
    </div>
    <div class="scroll-text">
      <div class="step">
        <p>
          2016년 3월, 전역 후 복학한 23살의 한 청년이 있었다.
        </p>
      </div>
      <div class="step">
        <p>
          같은 해, 역시 휴학 후 복학한 23살의 한 여학생이 있었다. <br />
          그들의 이야기는 2016년 3월에 시작되었다.
        </p>
      </div>
      <div class="step">
        <p>
          그 둘은 같은 과 친구가 친목도모를 하자 하여 <br />
          함께 셋이서 불판스토리 라는 고깃집에서 밥을 먹게되었다.
          <br />
          이날이 그들의 러브스토리가 될줄도 모르고...
        </p>
      </div>
      <div class="step">
        <p>
          연애를 처음 했던 23살의 영규는 여자에게 다가가는 법이 서툴렀고, <br />
          역시 재의는 영규의 서투른 방식에<br />
          영규가 본인에게 호감이 있는지 조차 모르고있었다.
          <br />
          한마디로..! 영규 혼자 썸을 타고 있었던 것이다.
        </p>
      </div>
      <div class="step">
        <p>
          하지만 영규의 노력과 재의의 이해 끝에 <br />
          영규는 23살 인생 처음으로 여자에게 고백을 했고, <br />
          재의는 그 마음을 받아 주었다
        </p>
      </div>
      <!-- <div class="step">
          <p>함께 학교생활을 하면서 과제도 같이했고, 학식도 같이 먹고, <br>
            시험공부도 같이하고, 그렇게 그 둘은 3년이라는 시간을 학교에서<br>
            함께 보냈다.
          </p>
        </div>
         <div class="step">
          <p>취업의 시기가 다가왔고, 영규는 먼저 회사에 취업을 했고, <br>
          재의 또한 약 6개월 뒤 영규가 다니는 회사에 취업을 하게 되었다.<br>
          (계란은 한바구니에 담는것이 아니라던데..)</p>
        </div>
        <div class="step">
          <p>그렇게 그 둘은 3년 열심히 돈을 벌었고, <br>
          드디어 6년 연애 끝에 웨딩 마치를 울리게 되었다!
          </p>
        </div> -->
    </div>
  </section>
</template>
<script lang="ts">
// @ts-nocheck
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Animation extends Vue {
  activate(currentItem) {
    currentItem.classList.add('visible');
  }
  inactivate(currentItem) {
    currentItem.classList.remove('visible');
  }
  get stepElems() {
    return document.querySelectorAll('.step');
  }
  get graphicElems() {
    return document.querySelectorAll('.graphic-item');
  }
  mounted() {
    let currentItem = this.graphicElems[0];

    let ioIndex;

    const io = new IntersectionObserver((entries, observer) => {
      ioIndex = entries[0].target.dataset.index * 1;
    });

    for (let i = 0; i < this.stepElems.length; i++) {
      io.observe(this.stepElems[i]);
      this.stepElems[i].dataset.index = i;
      this.graphicElems[i].dataset.index = i;
    }

    window.addEventListener('scroll', () => {
      let step;
      let boundingRect;

      for (let i = ioIndex - 1; i < ioIndex + 2; i++) {
        step = this.stepElems[i];
        if (!step) continue;
        boundingRect = step.getBoundingClientRect();

        if (
          boundingRect.top > window.innerHeight * 0.3 &&
          boundingRect.top < window.innerHeight * 0.8
        ) {
          this.inactivate(currentItem);
          currentItem = this.graphicElems[step.dataset.index];
          this.activate(currentItem);
        }
      }
    });

    window.addEventListener('load', () => {
      setTimeout(() => scrollTo(0, 0), 100);
    });
  }
}
</script>
<style lang="scss">
.graphic-item {
  // height: 100vh;
  img {
    width: 100%;
  }
  &:nth-child(-n + 2) {
    img {
      width: 50%;
    }
  }
}
img {
  max-width: 100%;
  height: auto;
}
.global-width {
  max-width: 620px;
  margin: 0 auto;
  padding: 0 1rem;
}
.scroll-graphic {
  overflow-x: hidden;
  position: sticky;
  top: 0;
  height: 100vh;
}
.graphic-item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
  will-change: opacity;
}
.visible {
  opacity: 1;
}
.scene-img {
  max-height: 100vh;
}
.scroll-text {
  position: relative;
  padding-bottom: 1px;
}
.step {
  margin-bottom: 60vh;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 3px;
}
</style>
