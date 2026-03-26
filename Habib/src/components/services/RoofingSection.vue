<template>
  <section class="roofing">

    <h2>Protéger votre toiture : un enjeu essentiel</h2>

    <p class="intro">
      La toiture est l’un des éléments les plus cruciaux de votre habitation.
      Elle protège, isole et valorise votre maison.
    </p>

    <QuestionWithReasons  class="block" :question="data.partOne.question" :reasons="data.partOne.reasons"/>

    <advice-solution class="block" :title="data.advices.title" :advices="data.advices.advices"/>

    <QuestionWithReasons  class="block" :question="data.partTwo.question" :reasons="data.partTwo.reasons"/>
    <QuestionWithReasons  class="block" :question="data.partThree.question" :reasons="data.partThree.reasons"/>

    <QuoteRequest @action="openContactModal" />

  </section>
</template>

<script setup>
import QuestionWithReasons from "@/components/ui/QuestionWithReasons.vue";
import QuoteRequest from "@/components/ui/QuoteRequest.vue";
import AdviceSolution from "@/components/ui/AdviceSolution.vue";
import { data } from "@/data/RoofingData.js"

const openContactModal = ()=>{
  console.log("YOOOOOOOOOO::")
}
</script>

<style scoped>
.roofing {
  max-width: 900px;
  margin: auto;
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
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