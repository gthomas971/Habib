<template>
  <div :class="['side-menu', { 'open' : ui.isMenuOpen }]">
    <span class="">Les <br> Artisans  <br> du Val de Loire</span>
    <ul>
      <li><a href="#roofing-block" @click.prevent="goToSection('roofing-block',ui,true)" >Toiture</a></li>
      <li><a href="#facade-block" @click.prevent="goToSection('facade-block',ui,true)">Façade</a></li>
      <li><a href="#insulation-block" @click.prevent="goToSection('insulation-block',ui,true)">Isolation</a></li>
      <li><a href="#">Qui sommes-nous ?</a></li>
    </ul>
    <button @click="goToSection('estimate-section',ui,true)">Devis</button>
  </div>
</template>


<script setup>
import { useUIStore } from '@/store/ui'
import { goToSection } from '@/util/common.js'
const ui = useUIStore()

</script>



<style scoped>
.side-menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 250px;
  height: 100%;
  background: #387b7e;
  color: white;
  z-index: 100;
  transition: right 0.4s ease, box-shadow 0.4s ease;
  padding: 60px 30px;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.side-menu.open {
  right: 0;
}

.side-menu span {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 40px;
  line-height: 1.3;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  color: #fff;
}

.side-menu ul {
  list-style: none;
  padding: 0;
}

.side-menu li {
  margin: 20px 0;
}

.side-menu a {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;
}

.side-menu a:hover {
  color: #ffd700;
  transform: scale(1.2);
}

.side-menu a:hover::after {
  width: 100%;
}

button{
  background-color: #faf5ee;
  font-size: 1.2rem;
  margin-top: 30px;
  height: 40px;
  border: none;
  color: #387b7e;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>