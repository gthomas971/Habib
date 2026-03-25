<template>
  <div v-if="modelValue" class="overlay" @click.self="close">
    <div class="modal">

      <div v-if="title" class="header">
        <h3>{{ title }}</h3>
        <CrossClose class="close" @click="close"/>
      </div>

      <div class="content">
        <slot />
      </div>

      <div v-if="$slots.footer" class="footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import  CrossClose from '@/assets/svgs/crossClose.svg'
defineProps({
  modelValue: Boolean,
  title: String
})

const emit = defineEmits(['update:modelValue'])

const close = () => {
  emit('update:modelValue', false)
}

</script>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal {
  background: white;
  border-radius: 10px;
  width: 80%;
  max-width: 90%;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.content {
  margin: 15px 0;
}

.footer {
  margin-top: 10px;
  text-align: right;
}

.close {
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>