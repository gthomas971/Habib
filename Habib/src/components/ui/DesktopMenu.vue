<template>
  <ul>
    <li @click="goToSection('roofing-block',ui)">Toiture</li>
    <li @click="goToSection('facade-block',ui)">Façade</li>
    <li @click="goToSection('insulation-block',ui)">Isolation</li>
  </ul>
</template>


<script setup>
import { useUIStore } from '@/store/ui'
import {goToSection} from '@/util/common.js'
const ui = useUIStore()

</script>



<style scoped>
ul {
  display: flex;
  gap: 30px;
  list-style: none;
  color: white;
  cursor: pointer;
  font-size: 24px;
  padding: 0;
}

.navbar.scrolled .desktop-menu {
  color: black;
}
</style>