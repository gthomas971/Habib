<template>
  <div class="select-button-group">
    <button
        v-for="option in options"
        :key="option"
        type="button"
        :class="['option-button', { selected: modelValue === option }]"
        @click="$emit('update:modelValue', option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  modelValue: String,
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.select-button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.option-button {
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}


.option-button:hover {
  background-color: #cceaff;
}

.option-button.selected {
  background-color: deepskyblue;
  color: white;
  border-color: deepskyblue;
}


</style>