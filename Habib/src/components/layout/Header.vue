<template>
  <header>
    <nav :class="['navbar' , { 'scrolled': isSticky }]">
      <Logo  class="logo" />
      <button class="burger-menu" @click="toggleMenu">☰</button>
    </nav>

    <div class="content">
      <h1 class="title">LES ARTISANS DU VAL DE LOIRE</h1>
    </div>

    <div class="overlay" v-if="isMenuOpen" @click="toggleMenu"></div>

    <div class="side-menu" :class="{ open: isMenuOpen }">
      <ul>
        <li><a href="#">Toiture</a></li>
        <li><a href="#">Façade</a></li>
        <li><a href="#">Isolation</a></li>
        <li><a href="#">Qui sommes-nous ?</a></li>
      </ul>
    </div>

  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '@/assets/svgs/logo.svg';

const isSticky = ref(false)

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 100 // seuil du scroll
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

.navbar.scrolled > .burger-menu ,.navbar.scrolled > .logo {
  color: black;
}


.logo {
  height: 60px;
  width: 60px;
  color: white;
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


.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  background: white;
  color: black;
  z-index: 100;
  transition: right 0.3s ease;
  padding: 50px 20px;
}

.side-menu.open {
  right: 0;
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu li {
  margin: 20px 0;
}

.side-menu a {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
}

</style>
