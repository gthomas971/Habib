<template>
  <div class="cta">
    <h3>Intervention à Romorantin et ses alentours</h3>
    <p>
      Devis gratuit, conseils personnalisés et intervention rapide.
    </p>
    <button @click="goToSection('estimate-section',ui)">Demander un devis</button>
  </div>
</template>

<script setup>
import {useUIStore} from "@/store/ui.js";
import { goToSection } from '@/util/common.js'

const ui = useUIStore()

</script>

<style scoped>
.cta {
  background: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background: #387b7e;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

</style>