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

      <button @click="toggle">
        {{ currentButtonText }}
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
  buttonText: {
    type: String,
    default: "+"
  }
})

const emit = defineEmits(['click'])

const isOpen = ref(false)
const currentButtonText = ref(props.buttonText)
const toggle = () => {
  isOpen.value = !isOpen.value
  currentButtonText.value = isOpen.value ? "-" : "+"
  emit('click', isOpen.value)
}
</script>

<style scoped>
.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.image {
  width: 100%;
  object-fit: cover;
}

.content {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

h3 {
  margin-bottom: 10px;
}

p {
  color: #555;
  margin-bottom: 15px;
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

button:hover {
  opacity: 0.9;
}


.image-wrapper {
  position: relative;
}

.image {
  width: 100%;
  object-fit: cover;
  display: block;
}

/* 🔥 Le titre en overlay */
.image-title {
  position: absolute;
  bottom: -15px; /* 👈 chevauchement */
  left: 15px;

  background: #387b7e;
  color: white;
  padding: 8px 15px;
  border-radius: 6px;

  font-weight: bold;
}

/* Ajustement pour éviter que ça coupe */
.content {
  padding: 25px 15px 15px;
}
</style>