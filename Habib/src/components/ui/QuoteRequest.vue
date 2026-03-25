<template>
  <div class="cta">
    <h3>Intervention à Romorantin et ses alentours</h3>
    <p>
      Devis gratuit, conseils personnalisés et intervention rapide.
    </p>
    <button @click="$emit('action')">Demander un devis</button>
  </div>
</template>

<script setup>
  defineEmits(['action'])
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