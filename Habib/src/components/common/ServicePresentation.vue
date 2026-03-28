<template>
  <div class="card">
    <div class="image-wrapper">
      <img :src="image" alt="" class="image" />

      <div class="image-title">
        {{ title }}
      </div>
    </div>

    <div class="content">
      <p>{{ description }}</p>

      <button @click="$emit('click')" class="hide-desktop">
        {{ props.isOpen ? "-" : "+" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  image: String,
  title: String,
  description: String,
  isOpen: Boolean
})

defineEmits(['click'])

</script>

<style scoped>

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow);
  margin-bottom: 3rem;
  border-left: 6px solid var(--accent);
}

.image-wrapper {
  position: relative;
  flex: 1;
  width: 100%;
  min-height: 200px;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

p {
  font-size: 20px;
  margin-bottom: 1rem;
}

button {
  background-color: #387b7e;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  align-self: start;
}

.image-title {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #2e4a50;
  color: white;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

.content {
  flex: 1.5;
  padding: 2rem;
}

@media (min-width: 768px) {
  .card{
    flex-direction: row;
  }
  .image-wrapper{
    min-height: 250px;
  }
}
</style>