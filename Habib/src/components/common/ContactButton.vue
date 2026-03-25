<template>
  <div class="floating-contact" @click="isOpen = !isOpen">
    <Phone class="icon"/>
  </div>

  <Modal v-model="isOpen" title="PRENDRE CONTACT">
    <ContactForm />
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import Phone from '@/assets/svgs/phone.svg'
import Modal from '@/components/ui/Modal.vue'
import ContactForm from '@/components/ui/ContactForm.vue'

const isOpen = ref(false)

</script>

<style scoped>

.icon{
  width: 30px;
  color: honeydew;
}

.floating-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #387b7e;
  border-radius: 5px;
  z-index: 998;
}

/**********************/

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input, select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: deepskyblue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>