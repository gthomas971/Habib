<template>
  <div class="advices-solutions">
    <h3>{{ title }}</h3>

    <div class="grid">
      <div class="card" v-for="(advice, index) in advices" :key="index">
        <h4 v-html="advice.title"></h4>
        <p>{{ advice.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  advices: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.card > h4,
.card > p {
  margin: 10px;
}

h4 {
  display: inline-block;
  background-color: #387b7e;
  border-radius: 5px;
  padding: 10px;
  color: white;
}
</style>