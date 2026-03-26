<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Estimate  v-if="ui.estimateShow" />
      <section id="services-section" v-else >
        <div class="title">
          <div class="square"></div>
          <h2>Toutes <br> nos prestations</h2>
        </div>

        <div id="roofing-block">
          <ServicePresentation
              :image="RoofingImage"
              title="Toiture"
              description="Protégez votre maison des intempéries et des infiltrations grâce à un entretien régulier."
              buttonText="+"
              @click="ui.setShowRoofing(!ui.showRoofing)"
          />
          <transition name="dropdown">
            <div v-if="ui.showRoofing">
              <RoofingSection class="roofing-section"/>
            </div>
          </transition>
        </div>

        <div id="facade-block">
          <ServicePresentation
              :image="FacadeImage"
              title="Façade"
              description="Préservez l’esthétique et la solidité de votre façade toute l’année."
              buttonText="+"
              @click="ui.setShowFacade(!ui.showFacade)"
          />
          <transition name="dropdown">
            <div v-if="ui.showFacade">
              <FacadeSection class="facade-section"/>
            </div>
          </transition>
        </div>

        <div id="insulation-block">
          <ServicePresentation
              :image="InsulationImage"
              title="Isolation"
              description="Améliorez le confort et réduisez vos factures d’énergie grâce à une isolation performante."
              buttonText="+"
              @click="ui.setShowInsulation(!ui.showInsulation)"
          />
          <transition name="dropdown">
            <div v-if="ui.showInsulation">
              <InsulationSection class="insulation-section"/>
            </div>
          </transition>
        </div>
      </section>
    </main>
    <Footer/>
    <ContactButton :menu-color="ui.isMenuOpen" />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import ServicePresentation from "@/components/common/ServicePresentation.vue";
import RoofingSection from "@/components/services/RoofingSection.vue";
import FacadeSection from "@/components/services/FacadeSection.vue";
import Estimate from "@/components/common/Estimate.vue";
import InsulationSection from "@/components/services/InsulationSection.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ContactButton from "@/components/common/ContactButton.vue";
import RoofingImage from '@/assets/images/toiture.png';
import FacadeImage from '@/assets/images/facade.png';
import InsulationImage from '@/assets/images/isolation.png';
import {useUIStore} from "@/store/ui";

const ui = useUIStore()

</script>

<style scoped>

.min-h-screen {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#services-section {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

h2 {
  margin: 0;
}

#roofing-block, #facade-block, #insulation-block {
  padding: 0 20px;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.title {
  display: flex;
  margin: 20px 0 0 20px;
  align-items: baseline;
  font-size: 20px;
  gap: 20px;
  align-self: start;
}

.square {
  background-color: #387b7e;
  border-radius: 4px;
  height: 20px;
  width: 20px;
}

</style>