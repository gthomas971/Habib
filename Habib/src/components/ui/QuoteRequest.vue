<template>
  <div class="cta">
    <h3>Intervention à Romorantin et ses alentours</h3>
    <p>
      Devis gratuit, conseils personnalisés et intervention rapide.
    </p>
    <button @click="showEstimate">Demander un devis</button>
  </div>
</template>

<script setup>
import {useUIStore} from "@/store/ui.js";

const ui = useUIStore()
const showEstimate = ()=>{
  ui.closeMenu()
  ui.showEstimate()

  const el = document.getElementById('services-section')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.cta {
  background: #387b7e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background: white;
  color: #387b7e;
  border-radius: 5px;
  cursor: pointer;
}
</style>