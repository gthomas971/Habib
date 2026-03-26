<template>
  <header>
    <nav :class="['navbar' , { 'scrolled': isSticky }]">
      <div class="block-logo">
        <Logo  class="logo"  @click="resetPage"/>
        <span class="title-logo">Les <br> Artisans  <br> du Val de Loire</span>
      </div>
      <button class="burger-menu" @click="ui.toggleMenu">☰</button>
    </nav>

    <div class="content">
      <h1 class="title">LES ARTISANS DU VAL DE LOIRE</h1>
    </div>

    <div class="overlay" v-if="ui.isMenuOpen" @click="ui.toggleMenu"></div>

    <SideMenu />


  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import SideMenu from "@/components/ui/SideMenu.vue";
import Logo from '@/assets/svgs/logo.svg';
import { useUIStore } from '@/store/ui'

const ui = useUIStore()

const isSticky = ref(false)

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}
const resetPage =()=>{
  ui.hideEstimate()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
header {
  width: 100%;
  height: 80vh;
  background-image: url('@/assets/images/maison.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  color: white;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
}

.navbar {
  position: absolute;
  height: 60px;
  background: transparent;
  border: none;
  top: 0;
  left: 0;
  width: calc( 100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.block-logo{
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar.scrolled > .burger-menu  {
  color: black;
}
.navbar.scrolled  .logo {
  color: #387b7e;
}

.title-logo{
  color: transparent;
  font-size: 18px;
}

.navbar.scrolled .title-logo{
  color: #387b7e;
}

.logo {
  height: 60px;
  width: 60px;
  color: white;
  cursor: pointer;
}

.burger-menu {
  color: white;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

.title {
  font-size: 3rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.5);
}

.content.hidden {
  display: none;
}


.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 90;
}



</style>
