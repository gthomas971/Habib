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

.question-reasons{

}

ul {
  list-style: none;
  padding-left: 0;
}

li{
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #387b7e;
  border-radius: 2px;
}

</style>