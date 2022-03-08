<template>
  <div id="thankyou-page">
    <section class="title-logo">
      <svg
        width="254"
        height="70"
        viewBox="0 0 254 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M247.185 35C247.185 38.8015 244.423 42.8824 238.287 46.9576C232.228 50.9818 223.328 54.6836 212.152 57.8233C189.826 64.0949 158.868 68 124.592 68C90.3164 68 59.3588 64.0949 37.0332 57.8233C25.8565 54.6836 16.9568 50.9818 10.8976 46.9576C4.76174 42.8824 2 38.8015 2 35C2 31.1985 4.76174 27.1176 10.8976 23.0424C16.9568 19.0182 25.8565 15.3164 37.0332 12.1767C59.3588 5.9051 90.3164 2 124.592 2C158.868 2 189.826 5.9051 212.152 12.1767C223.328 15.3164 232.228 19.0182 238.287 23.0424C244.423 27.1176 247.185 31.1985 247.185 35Z"
          fill="white"
          fill-opacity="0.12"
          stroke="#572A00"
          stroke-width="4"
        />
        <path
          d="M46.1248 29.5289V43.8649H39.9368V29.5289H33.6088V24.6009H52.4248V29.5289H46.1248ZM68.2359 43.8649V36.5569H61.4319V43.8649H55.2439V24.6009H61.4319V31.6289H68.2359V24.6009H74.4239V43.8649H68.2359ZM91.4761 43.8649L90.6641 41.1489H83.9161L83.1041 43.8649H76.7761L83.8041 24.6009H91.0001L98.0281 43.8649H91.4761ZM85.2041 36.8369H89.3761L87.3601 29.9769H87.2481L85.2041 36.8369ZM114.137 43.8649L106.045 34.5129V43.8649H100.361V24.6009H105.765L113.857 34.0929V24.6009H119.541V43.8649H114.137ZM136.733 24.6009H144.405L137.489 32.5249L144.545 43.8649H137.237L133.233 36.8089L129.873 39.5529V43.8649H123.685V24.6009H129.873V32.8329L136.733 24.6009ZM168.29 43.8649H162.102V36.3889L154.458 24.6009H161.57L165.266 31.0129H165.378L169.074 24.6009H175.822L168.29 36.3889V43.8649ZM186.035 24.2649C189.357 24.2649 191.924 25.1142 193.735 26.8129C195.545 28.5115 196.451 30.9849 196.451 34.2329C196.451 37.4809 195.545 39.9542 193.735 41.6529C191.924 43.3515 189.357 44.2009 186.035 44.2009C182.712 44.2009 180.145 43.3609 178.335 41.6809C176.543 39.9822 175.647 37.4995 175.647 34.2329C175.647 30.9662 176.543 28.4929 178.335 26.8129C180.145 25.1142 182.712 24.2649 186.035 24.2649ZM186.035 28.8849C184.709 28.8849 183.701 29.2862 183.011 30.0889C182.32 30.8915 181.975 31.9742 181.975 33.3369V35.1289C181.975 36.4915 182.32 37.5742 183.011 38.3769C183.701 39.1795 184.709 39.5809 186.035 39.5809C187.36 39.5809 188.368 39.1795 189.059 38.3769C189.768 37.5742 190.123 36.4915 190.123 35.1289V33.3369C190.123 31.9742 189.768 30.8915 189.059 30.0889C188.368 29.2862 187.36 28.8849 186.035 28.8849ZM218.963 36.1089C218.963 38.7409 218.132 40.7475 216.471 42.1289C214.81 43.5102 212.448 44.2009 209.387 44.2009C206.326 44.2009 203.955 43.5102 202.275 42.1289C200.614 40.7475 199.783 38.7409 199.783 36.1089V24.6009H205.971V36.0249C205.971 37.1075 206.26 37.9755 206.839 38.6289C207.418 39.2635 208.258 39.5809 209.359 39.5809C210.46 39.5809 211.3 39.2542 211.879 38.6009C212.476 37.9475 212.775 37.0889 212.775 36.0249V24.6009H218.963V36.1089Z"
          fill="#572A00"
        />
      </svg>
    </section>
    <section class="content " data-aos="fade-up" data-aos-offset="200" data-duration="3000">
      직접 만날 수 없지만, <br />
      너무나도 마음을 전하고 싶은 분들은 <br />
      편한 마음으로 축복해주세요. <br />
      어려운 시기에 축복해 주셔서 <br />
      감사합니다.
    </section>
    <article class="" data-aos="fade-up" data-aos-offset="00" data-duration="3000">
      <section v-for="(brideGroom, idx) in accountData" class="contact-detail" :key="idx">
        <div v-for="(data, idx2) in brideGroom" :key="idx2" class="contact-detail-contents">
          <span>
            {{ data.title }} <span class="contact-detail__title">{{ data.name }}</span>
            {{ data.bankAccount }}
          </span>
          <span class="copy-btn" @click="copy(data)">복사</span>
        </div>
      </section>
    </article>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class ThankYou extends Vue {
  accountData = {
    bride: [
      { title: '신랑', name: '유영규', bankAccount: '카카오뱅크 3333192368145' },
      { title: '혼주', name: '최미경', bankAccount: '우리은행 31411432302001' },
    ],
    groom: [
      { title: '신부', name: '이재의', bankAccount: '카카오뱅크 3333031904273' },
      { title: '혼주', name: '이석원', bankAccount: '국민은행 71790201042008' },
    ],
  };
  copy(data: any) {
    const temp = document.createElement('textarea');
    temp.value = data.bankAccount;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

    alert('복사 되었습니다');
  }
}
</script>

<style lang="scss">
#thankyou-page {
  .contact-detail {
    margin: 40px 0;
  }
  .contact-detail .contact-detail-contents {
    display: flex;
    font-size: 0.9rem;
    margin: 10px 0;
    justify-content: center;
    span {
      &:nth-child(1) {
        width: 280px;
        margin: 0 10px;
      }
    }
  }
  .contact-detail__title {
    font-size: 1rem;
  }
}
.logo {
  svg {
    width: 211px;
  }
}
.content {
  margin: 65px auto;
  font-size: 1rem;
  line-height: 2;
}
.copy-btn {
  cursor: pointer;
  border-radius: 5px;
  padding: 0.25rem 0.6rem;
  font-size: 10px;
  background-color: #572a0024;
  // transition: 0.5s;
  &:active {
    background-color: #572a0010;
  }
}
</style>
