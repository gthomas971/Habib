<template>
  <section class="facade">

    <h2>Entretenir votre façade : valorisez et protégez votre habitation</h2>

    <p class="intro">
      La façade est la première chose que l’on voit de votre maison.
      Elle reflète son état, sa valeur et son entretien.
    </p>

    <QuestionWithReasons  class="block" :question="data.partOne.question" :reasons="data.partOne.reasons"/>

    <advice-solution class="block" :title="data.advices.title" :advices="data.advices.solutions"/>

    <QuestionWithReasons  class="block" :question="data.partTwo.question" :reasons="data.partTwo.reasons"/>
    <QuestionWithReasons  class="block" :question="data.partThree.question" :reasons="data.partThree.reasons"/>
    <QuoteRequest @action="openContactModal" />

  </section>
</template>

<script setup>
import QuestionWithReasons from "@/components/ui/QuestionWithReasons.vue";
import QuoteRequest from "@/components/ui/QuoteRequest.vue";
import { data } from "@/components/data/FacadeData.js"
import AdviceSolution from "@/components/ui/AdviceSolution.vue";

defineEmits(['contact'])

const openContactModal = ()=>{
  console.log("8888888888888::")
}
</script>

<style scoped>
.facade {
  padding: 40px 20px;
  max-width: 900px;
  margin: auto;
}

.intro {
  margin-bottom: 30px;
  color: #555;
}

.block  {
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #f2f2f2;
}

</style>