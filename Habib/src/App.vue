<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <router-view />
      <ContactButton />

      <section id="services-section">
        <div class="title">
          <div class="square"></div>
          <h2>Toutes <br> nos prestations</h2>
        </div>
        <div class="roofing-block">
          <ServicePresentation
              :image="RoofingImage"
              title="Toiture"
              description="Protégez votre maison grâce à un entretien régulier."
              buttonText="+"
              @click="showRoofing = !showRoofing"
          />
          <transition name="dropdown">
            <div v-if="showRoofing" ref="roofingRef">
              <RoofingSection  class="roofing-section"/>
            </div>
          </transition>
        </div>

        <div class="facade-block">
          <ServicePresentation
              :image="FacadeImage"
              title="Façade"
              description="Protégez votre maison grâce à un entretien régulier."
              buttonText="+"
              @click="showFacade = !showFacade"
          />
          <transition name="dropdown">
            <div v-if="showFacade" ref="roofingRef">
              <FacadeSection  class="facade-section"/>
            </div>
          </transition>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { ref  } from 'vue'
import Header from "@/components/layout/Header.vue";
import ContactButton from "@/components/common/ContactButton.vue";
import RoofingSection from "@/components/services/RoofingSection.vue";
import ServicePresentation from "@/components/common/ServicePresentation.vue";
import FacadeSection from "@/components/services/FacadeSection.vue";
import RoofingImage from '@/assets/images/toiture.png';
import FacadeImage from '@/assets/images/facade.png'

const showRoofing = ref(false)
const showFacade = ref(false)
const roofingRef = ref(null)

</script>

<style scoped>
#services-section{
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

h2{
margin: 0;
}

.roofing-block, .facade-block{
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

.title{
  display: flex;
  margin: 20px 0 0 20px;
  align-items: baseline;
  font-size: 20px;
  gap: 20px;
  align-self: start;
}
.square{
  background-color: #387b7e;
  border-radius: 4px;
  height: 20px;
  width: 20px;
}
</style>