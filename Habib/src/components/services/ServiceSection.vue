<template>
  <section class="roofing">

    <h2>{{ data.title }}</h2>

    <p class="intro">
      {{ data.intro }}
    </p>

    <QuestionWithReasons  class="block"  v-for="part in data.parts" :question="part.question" :reasons="part.reasons"/>

    <advice-solution class="block" :title="data.advices.title" :advices="data.advices.advices"/>

    <QuoteRequest class="hide-desktop"/>

  </section>
</template>

<script setup>
import QuestionWithReasons from "@/components/ui/QuestionWithReasons.vue";
import QuoteRequest from "@/components/ui/QuoteRequest.vue";
import AdviceSolution from "@/components/ui/AdviceSolution.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>
.roofing {
  max-width: 1280px;
  margin: auto;
  width: 100%;
}
.questions-reasons{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
h2 {
  text-align: center;
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.intro {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  font-style: italic;
  color: #666;
}

.block  {
  background: var(--white);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

@media (min-width: 768px) {
  .block-desktop{
    display: flex;
    gap: 20px;
    width: 100%;
  }

  .left,.right {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .block{
    margin-bottom: 30px;
  }

  h2{
    margin-top: 0;
  }
}
</style>