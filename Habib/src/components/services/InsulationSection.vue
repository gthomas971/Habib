<template>
  <section class="insulation">

    <h2>Isolation des combles perdus : confort, économies et performance énergétique</h2>

    <p class="intro">
      Les combles non isolés sont responsables de jusqu’à 30 % des pertes de chaleur dans une maison.
      Une bonne isolation est donc cruciale.
    </p>

    <QuestionWithReasons
        class="block"
        :question="data.partOne.question"
        :reasons="data.partOne.reasons"
    />

    <AdviceSolution
        class="block"
        :title="data.advices.title"
        :advices="data.advices.advices"
    />

    <QuestionWithReasons
        class="block"
        :question="data.partTwo.question"
        :reasons="data.partTwo.reasons"
    />

    <QuoteRequest @action="openContactModal" />

  </section>
</template>

<script setup>
import QuestionWithReasons from "@/components/ui/QuestionWithReasons.vue";
import AdviceSolution from "@/components/ui/AdviceSolution.vue";
import QuoteRequest from "@/components/ui/QuoteRequest.vue";
import { data } from "@/data/InsulationData.js";

const openContactModal = () => {
  console.log("Ouverture modal contact isolation des combles");
};
</script>

<style scoped>
.attic-insulation {
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

.block {
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #f2f2f2;
}
</style>