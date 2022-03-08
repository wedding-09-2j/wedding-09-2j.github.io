<template>
  <div id="info-page">
    <section class="title-logo ">
      <svg
        width="175"
        height="62"
        viewBox="0 0 175 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M169.682 30.6872C169.682 34.108 167.749 37.6366 163.646 41.1046C159.552 44.5648 153.509 47.7712 145.867 50.5031C130.6 55.9607 109.378 59.3744 85.8412 59.3744C62.3042 59.3744 41.0821 55.9607 25.8156 50.5031C18.1736 47.7712 12.1309 44.5648 8.03686 41.1046C3.93369 37.6366 2 34.108 2 30.6872C2 27.2664 3.93369 23.7378 8.03686 20.2699C12.1309 16.8096 18.1736 13.6033 25.8156 10.8714C41.0821 5.41375 62.3042 2 85.8412 2C109.378 2 130.6 5.41375 145.867 10.8714C153.509 13.6033 159.552 16.8096 163.646 20.2699C167.749 23.7378 169.682 27.2664 169.682 30.6872Z"
          fill="white"
          fill-opacity="0.12"
          stroke="#572A00"
          stroke-width="4"
        />
        <path
          d="M51.7485 41.4171V22.1531H57.9365V41.4171H51.7485ZM76.1273 41.4171L68.0353 32.0651V41.4171H62.3513V22.1531H67.7553L75.8473 31.6451V22.1531H81.5313V41.4171H76.1273ZM85.6755 22.1531H101.244V26.7731H91.8635V30.0771H99.9275V34.5011H91.8635V41.4171H85.6755V22.1531ZM113.927 21.8171C117.25 21.8171 119.817 22.6664 121.627 24.3651C123.438 26.0637 124.343 28.5371 124.343 31.7851C124.343 35.0331 123.438 37.5064 121.627 39.2051C119.817 40.9037 117.25 41.7531 113.927 41.7531C110.605 41.7531 108.038 40.9131 106.227 39.2331C104.435 37.5344 103.539 35.0517 103.539 31.7851C103.539 28.5184 104.435 26.0451 106.227 24.3651C108.038 22.6664 110.605 21.8171 113.927 21.8171ZM113.927 26.4371C112.602 26.4371 111.594 26.8384 110.903 27.6411C110.213 28.4437 109.867 29.5264 109.867 30.8891V32.6811C109.867 34.0437 110.213 35.1264 110.903 35.9291C111.594 36.7317 112.602 37.1331 113.927 37.1331C115.253 37.1331 116.261 36.7317 116.951 35.9291C117.661 35.1264 118.015 34.0437 118.015 32.6811V30.8891C118.015 29.5264 117.661 28.4437 116.951 27.6411C116.261 26.8384 115.253 26.4371 113.927 26.4371Z"
          fill="#572A00"
        />
      </svg>
    </section>
    <article class="main-contents">
      <section class="content " data-aos="fade-up" data-aos-offset="200" data-duration="3000">
        2022년 04월 17일 일요일 오후 01:30 <br />빌라드지디 수서 5F
      </section>
      <!-- <section class="content"><img src="@/assets/calendar.png" width="200px" alt="" /></section> -->
      <div class="" data-aos="fade-up" data-aos-offset="200" data-duration="3000">
        <section class="content">
          <div id="map"></div>
          <div id="map_address">서울 강남구 밤고개로 21길 79(율현동)</div>
          <a class="app-icon" :href="tmapLink"><img src="@/assets/t_map.jpeg"/></a>
          <a class="app-icon" :href="kakaoLink"><img src="@/assets/kakao_map.png"/></a>
          <a class="app-icon" :href="naverLink"><img src="@/assets/naver_map.png"/></a>
          <!-- 지도를 클릭하시면 네이버 맵으로 연결됩니다. -->
        </section>
        <section class="content font-sm ">
          <div class="address">
            <div>지하철</div>
            <div>
              지하철 3호선 수서역 4번 출구로 나와 도보 30초 <br />거리에 있는 예식 당일 셔틀버스
              운행
            </div>
          </div>
          <div class="address">
            <div>버스</div>
            <div>강남한양수자인 아파트 정류장 하차 후 도보 10분 거리 <br />버스 번호 3426, 402</div>
          </div>
        </section>
      </div>
    </article>
  </div>
</template>
<script lang="ts">
// @ts-nocheck
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Info extends Vue {
  lat = 37.47420161500402;
  lon = 127.11509539867006;
  get tmapLink() {
    return `https://apis.openapi.sk.com/tmap/app/routes?appKey=l7xx02af9c76eb7b4feab1b2c701cd1ac676&name=빌라드지디 수서점&lat=${this.lat}&lon=${this.lon}`;
  }
  get kakaoLink() {
    return `https://map.kakao.com/link/to/빌라드지디 수서,${this.lat},${this.lon}`;
  }
  get naverLink() {
    return `nmap://place?lat=${this.lat}&lng=${this.lon}&name=빌라드지디 수서`;
  }
  mounted() {
    window.kakao && window.kakao.maps ? this.initMap() : this.addKakaoMapScript();
    // if (window.kakao && window.kakao.maps) {
    //   this.initMap();
    // } else {
    //   const script = document.createElement('script');
    //   /* global kakao */
    //   script.onload = () => kakao.maps.load(this.initMap);
    //   script.src =
    //     '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cbded3bc9818521bf94902ed10957d96';
    //   document.head.appendChild(script);
    // }
  }
  addKakaoMapScript() {
    const script = document.createElement('script');
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap);
    script.src =
      '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cbded3bc9818521bf94902ed10957d96';
    document.head.appendChild(script);
  }
  initMap() {
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(this.lat, this.lon), //지도의 중심좌표.
      level: 6, //지도의 레벨(확대, 축소 정도)
    };
    const imageSrc = 'https://www.pngfind.com/pngs/b/162-1626626_love-symbol-images-png.png', // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(30, 40), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(15, 45) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    // 마커가 표시될 위치입니다
    const markerPosition = new kakao.maps.LatLng(this.lat, this.lon);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);
  }
}
</script>

<style lang="scss">
@import '@/style/_variables.scss';

#info-page {
  // font-weight: 700;
  .main-contents {
    margin-top: 50px;
    .content {
      margin: 20px 0;
      font-weight: 900;
      font-size: 1em;
    }
  }
}

#map {
  width: 80%;
  height: 150px;
  margin: 10px auto;
}
#map_address {
  font-weight: 700;
  font-size: 0.9em;
}
.address {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  div:nth-child(1) {
    margin-bottom: 5px;
    width: 70px;
    padding: 0px 10px;
    border: 0.125rem solid #572a00;
    border-radius: 20px;
  }
}
.app-icon {
  margin: 0px 5px;
  img {
    width: 20px;
  }
}
</style>
