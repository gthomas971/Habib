<template>
  <div :class="[ 'floating-contact' , { 'menu-color' : menuColor } ]" @click="isOpen = !isOpen">
    <Phone class="icon" />
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

const props = defineProps({
  menuColor : {
    type : Boolean,
    default :false
  }
})

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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  z-index: 998;
}

.menu-color{
  background-color: #faf5ee;
}
.menu-color > .icon {
  color: #387b7e;
}
</style>