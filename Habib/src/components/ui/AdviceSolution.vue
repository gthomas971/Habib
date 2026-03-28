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
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  background: var(--light-bg);
  padding: 1.5rem;
  border-radius: 8px;
  transition: var(--transition);
  border-bottom: 3px solid transparent;
}

.card:hover {
  transform: translateY(-5px);
  border-bottom: 3px solid var(--accent);
  box-shadow: var(--shadow);
}

.block h3 {
  color: var(--primary);
  position: relative;
  margin-bottom: 40px;
  padding-left: 0;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.block h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 40px;
  height: 3px;
  background: var(--accent);
  border-radius: 2px;
}

h4 {
  margin-top: 0;
  color: var(--accent);
}

@media (min-width: 768px) {
  .block h3 {
    margin-bottom: 40px;
    padding-left: 15px;
  }

  .block h3::before {
    top: 0;
    bottom: 0;
    width: 4px;
    height: auto;
  }
}

</style>