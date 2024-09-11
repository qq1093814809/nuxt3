<template>
  <div class="content-boxs">
    <div class="banner">
      <img alt="" src="~/assets/img/index/banner.png">
    </div>
    <IndexApiin/>
    <IndexFourbig/>
    <IndexService/>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import {pagesStore} from '@/stores/pages'

const store = pagesStore()
const {data, error, execute, pending, status} = await req({
  url: 'Public_fun/login_password',
  data: {phone: "18251983962", password: 'liuminwei981017'}
})

</script>

<style lang="scss" scoped>
.glass-container {
  --x: 0;
  --y: 0;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) perspective(1000px) rotateX(var(--x)) rotateY(var(--y));
  width: 50vmin;
  height: 80vmin;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 4px;
  backdrop-filter: blur(30px);
  background-color: rgba(225, 102, 102, 0.142);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 1px solid #FFF;

}


.content-boxs {
  width: 100%;
  height: 100%;

  .banner {
    width: 100%;
    overflow: hidden;


  }
}
</style>