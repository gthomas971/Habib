<template>
  <div class="min-h-screen">
    <Header />
    <main>
      <Estimate id="estimate-section" v-show="ui.estimateShow" />
      <section id="services-section" v-show="!ui.estimateShow" >
        <div class="title">
          <div class="square"></div>
          <h2>Toutes <br class="mobile-br" > nos prestations</h2>
        </div>

        <div id="roofing-block">
          <div class="desktop">
            <ServicePresentation
                :image="RoofingImage"
                title="Toiture"
                description="Protégez votre maison des intempéries et des infiltrations grâce à un entretien régulier."
                :isOpen="ui.showRoofing"
                @click="ui.setShowRoofing(!ui.showRoofing)"
            />
          </div>
          <ServiceSection :data="dataRoofing" class="desktop-only"/>
          <div class="mobile-only">
            <transition name="dropdown">
              <div v-if="ui.showRoofing">
                <ServiceSection :data="dataRoofing" />
              </div>
            </transition>
          </div>

        </div>

        <div id="facade-block">
          <div class="desktop">
            <ServicePresentation
                :image="FacadeImage"
                title="Façade"
                description="Préservez l’esthétique et la solidité de votre façade toute l’année."
                :isOpen="ui.showFacade"
                @click="ui.setShowFacade(!ui.showFacade)"
            />
          </div>
          <ServiceSection :data="dataFacade" class="desktop-only"/>
          <div class="mobile-only">
            <transition name="dropdown">
              <div v-if="ui.showFacade">
                <ServiceSection :data="dataFacade" />
              </div>
            </transition>
          </div>
        </div>

        <div id="insulation-block">
          <div class="desktop">
            <ServicePresentation
                :image="InsulationImage"
                title="Isolation"
                description="Améliorez le confort et réduisez vos factures d’énergie grâce à une isolation performante."
                :isOpen="ui.showInsulation"
                @click="ui.setShowInsulation(!ui.showInsulation)"
            />
          </div>
          <ServiceSection :data="dataInsulation" class="desktop-only"/>
          <div class="mobile-only">
            <transition name="dropdown">
              <div v-if="ui.showInsulation">
                <ServiceSection :data="dataInsulation" />
              </div>
            </transition>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    <ContactButton :menu-color="ui.isMenuOpen" />

  </div>
</template>

<script setup lang="ts">
import ServiceSection from "@/components/services/ServiceSection.vue";
import ServicePresentation from "@/components/common/ServicePresentation.vue";
import Estimate from "@/components/common/Estimate.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import ContactButton from "@/components/common/ContactButton.vue";
import RoofingImage from '@/assets/images/toiture.png';
import FacadeImage from '@/assets/images/facade.png';
import InsulationImage from '@/assets/images/isolation.png';
import {useUIStore} from "@/store/ui";
import {dataRoofing} from "@/data/RoofingData.js"
import {dataFacade} from "@/data/FacadeData.js"
import {dataInsulation} from "@/data/InsulationData";

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
  color: var(--primary);
}

.square {
  background-color: #387b7e;
  border-radius: 4px;
  height: 20px;
  width: 20px;
}

.mobile-br {
  display: inline;
}

.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  *{
    font-size: 18px;
  }
  .title{
    justify-content: center;
    width: 100%;
  }
  .square {
    border-radius: 5px;
    height: 25px;
    width: 25px;
  }
  h2{
    font-size: 60px;
    margin-bottom: 40px;
  }
  .mobile-br {
    display: none;
  }
  #roofing-block, #facade-block, #insulation-block {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1100px;
    width: 100%;
  }
  .desktop{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mobile-only {
    display: none;
  }
  .desktop-only {
    display: block;
  }
}
</style>