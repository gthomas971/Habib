<template>
  <div class="question-reasons">
    <h3>{{ question }}</h3>

    <ul>
      <li v-for="(reason, index) in reasons" :key="index">
        {{ reason }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: String,
    required: true
  },
  reasons: {
    type: Array,
    required: true
  }
})
</script>



<style scoped>

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

.block ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
}

.block li {
  padding-left: 1.5rem;
  position: relative;
}

.block li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
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