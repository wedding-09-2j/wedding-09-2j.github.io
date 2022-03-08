<template>
  <div id="app">
    <div class="first"></div>

    <StartPage />
    <!-- <Animation /> -->
    <ContactPage />
    <Gallery />
    <Info />
    <ThankYou />
    <CommentPage />
    <!-- <footer>
      © All rights reserved by 영규 ♥︎ 재의
    </footer> -->
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StartPage from './views/StartPage.vue';
import Animation from './views/Animation.vue';
import ContactPage from './views/ContactPage.vue';
import Gallery from './views/Gallery.vue';
import Info from './views/Info.vue';
import ThankYou from './views/ThankYou.vue';
import CommentPage from './views/CommentPage.vue';

@Component({
  components: { StartPage, Animation, ContactPage, Gallery, Info, ThankYou, CommentPage },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/style/main.scss';

footer {
  position: fixed;
  bottom: 0;
  font-size: 0.75rem;
  font-weight: bold;
  color: #717171;
  width: 100%;
  padding: 0.65rem;
  z-index: -1;
}
</style>
