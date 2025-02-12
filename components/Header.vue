<script lang="ts" setup>
import { NuxtLinkLocale, SwitchLocalePathLink } from '#components'

const router = useRouter()
const color = useColorMode()
function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
function goRouter(path: string) {
  console.log('path', path)
  router.push({ path })
}
</script>

<template>
  <!-- 网站头部 -->
  <header class="header">
    <div class="hd-left">
      <div class="hd-left-img" />
      <div class="hd-left-list">
        <div class="hd-left-list-div">
          <li><a @click="goRouter('/')">首页(到英文,观察cookie发生被覆写)- router跳转(直接跳转,跳转到其他语言地址会导致i18n设置被覆写)</a></li>
          <li>
            <NuxtLinkLocale to="/about">
              兼顾I18n跳转(自动补全当前语言url)
            </NuxtLinkLocale>
          </li>
        </div>
        <div style="font-size: 14px;">
          <SwitchLocalePathLink locale="en">
            切换语言到en
          </SwitchLocalePathLink>
          <SwitchLocalePathLink locale="zh-cn">
            切换语言到zh-cn
          </SwitchLocalePathLink>
          <SwitchLocalePathLink locale="de">
            切换语言到de
          </SwitchLocalePathLink>
        </div>
      </div>
    </div>
    <div class="hd-right">
      <li class="declare">
        <a>[这是默认layout]</a>
      </li>
      <div class="hd-right-btn" @click="toggleDark">
        {{ color.value }}
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.declare{
  font-size: .16rem;
  list-style-type: none;
}
.header {
  height: 2.5rem;
  backdrop-filter: saturate(182%) blur(5px);
  background: rgba(255, 255, 255, .4);
  border-bottom: .02rem solid rgba(255, 255, 255, .7);
  border-radius: 0px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: .3s ease-in-out;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 9999;
  font-size: 14px;
}

.header:hover {
  background: rgba(255, 255, 255);
  border-bottom: .02rem solid rgba(204, 204, 204, .5);
  transition: .3s ease-in-out;
}

.header .hd-left {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  height: .8rem;
}

.header .hd-left-img {
  width: .5rem;
  height: .5rem;
  border-radius: 100%;
  margin-right: .46rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.header .hd-left-list {
  height: .8rem;
}

.header .hd-left-list-div {
  display: flex;
  height: .8rem;
}

.header .hd-left-list-div li {
  height: .8rem;
  display: block;
  float: left;
  cursor: pointer;
  font-size: .16rem;
  font-weight: 400;
  line-height: .8rem;
  ;
  box-sizing: border-box;
  transition: .2s ease-in-out;
  border-bottom: .04rem solid transparent;
}

.header .hd-left-list-div li a {
  color: #222222;
  display: block;
  height: 100%;
}

.header .hd-left-list-div li+li {
  margin-left: .32rem;
}

.hd-left-list-div>li:hover {
  border-bottom: .04rem solid #006CFF;
  transition: .2s ease-in-out;
}

.header .hd-right {
  display: flex;
  margin-right: 3.2rem;
  align-items: center;
}

.hd-right-tel {
  height: .14rem;
  font-size: .16rem;
  font-weight: 400;
  color: #006CFF;
  line-height: .14rem;
}

.hd-right-btn {
  cursor: pointer;
  margin-left: .6rem;
  width: 1.2rem;
  height: .4rem;
  background: #006CFF;
  border-radius: .04rem;
  opacity: 1;
  font-size: .16rem;
  font-weight: 400;
  color: #FFFFFF;
  line-height: .4rem;
  text-align: center;
}

.hover:hover>.header-menu {
  height: 3.16rem;
  transition: .3s ease-in-out;
  opacity: 1;
  visibility: visible;
}

.header-menu {
  position: fixed;
  left: 0;
  top: .81rem;
  width: 100%;
  height: 0rem;
  display: flex;
  transition: .3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 24px -15px rgba(140, 140, 140, 0.91);
}

.header-menu>div {
  flex-basis: 3.2rem;
  background: #F6F9FE;
}

.header-menu .menu-content {
  flex-grow: 1;
  background: #FFFFFF;
}

.menu-links {
  margin-top: .6rem;
  display: flex;
  flex-wrap: wrap;
}

.menu-links a {
  display: block;
  margin: 0 .48rem;
  margin-bottom: .4rem;
  height: .16rem;
  font-size: .16rem;
  font-weight: 400;
  color: #222222;
  line-height: .16rem;
}

.menu-links a:hover {
  color: #006CFF !important;
}

.header-swiper {
  width: 100%;
  height: 6.79rem;
  position: relative;
}

.header-swiper-bg {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-swiper-bg1 {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.header-swiper-container {
  padding-top: 2.2rem;
  padding-left: 3.2rem;
  position: absolute;
  z-index: 100;
  top: 0px;
  left: 0px;
}

.swiper-bottom-bar {
  height: .8rem;
  width: 100%;
  position: absolute;
  z-index: 100;
  bottom: 0px;
  left: 0px;
  backdrop-filter: saturate(182%) blur(5px);
  background: rgba(255, 255, 255, .4);
  padding-left: 3.2rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: .3s ease-in-out;
  width: 100%;
  z-index: 100;
}

.swiper-bottom-bar-item {
  padding-left: .3rem;
  display: flex;
  align-items: center;
  height: 100%;
  width: 3rem;
  transition: .3s ease-in-out;
}

.swiper-bottom-bar-item:hover {
  height: 100%;
  background: #FFFFFF;
  transition: .3s ease-in-out;
}

.swiper-bottom-bar-item i {
  color: #006CFF;
  position: relative;
  top: -.13rem;
}

.swiper-bottom-bar-item span {

  margin-left: .16rem;
  height: .14rem;
  font-size: .16rem;
  font-weight: 400;
  color: #222222;
  line-height: .14rem;
}

.swiper-bottom-bar-item:hover,
.swiper-bottom-bar-item:hover span {
  transition: .3s ease-in-out;
  color: #006CFF;
}

.header-swiper-title {

  height: .54rem;
  font-size: .54rem;
  font-weight: 500;
  color: #222222;
  line-height: .54rem;

}

.header-swiper-descript {
  margin-top: .3rem;
  height: .24rem;
  font-size: .24rem;
  font-weight: 400;
  color: #383838;
  line-height: .24rem;
}

.header-swiper-title-btns {
  margin-top: .7rem;
  display: flex;
}

.header-swiper-title-btn1 {
  display: block;
  cursor: pointer;
  margin-right: .2rem;
  width: 1.51rem;
  height: .48rem;
  background: #006CFF;
  border-radius: .04rem;
  text-align: center;
  font-size: .18rem;
  font-weight: 500;
  color: #FFFFFF;
  line-height: .48rem;
  transition: .3s ease-in-out;
}

.header-swiper-title-btn2 {
  transition: .3s ease-in-out;
  display: block;
  cursor: pointer;
  width: 1.51rem;
  height: .48rem;
  border-radius: .04rem;
  border: .02rem solid #006CFF;
  text-align: center;
  font-size: .18rem;
  font-weight: 500;
  color: #006CFF;
  line-height: .48rem;
  box-sizing: border-box;
}

.header-swiper-title-btn1:hover {
  font-size: .19rem;
  transition: .3s ease-in-out;
}

.header-swiper-title-btn2:hover {
  font-size: .19rem;
  transition: .3s ease-in-out;
}

.actives {
  margin-top: .8rem;
  display: flex;
}

.inactive {
  cursor: pointer;
  width: .42rem;
  height: .04rem;
  background: #B8BABF;
  transition: .4s ease-in-out;
}

.inactive+.inactive {
  margin-left: .16rem;
}

.active {
  background: #006CFF !important;
  transition: .4s ease-in-out;
}
</style>
