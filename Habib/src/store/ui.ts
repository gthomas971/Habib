import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
    const estimateShow = ref(false)
    const isMenuOpen = ref(false)
    const showRoofing = ref(false);
    const showFacade = ref(false);
    const showInsulation = ref(false);

    function setShowRoofing(value: boolean) {
        showRoofing.value = value
    }
    function setShowFacade(value: boolean) {
        showFacade.value = value
    }
    function setShowInsulation(value: boolean) {
        showInsulation.value = value
    }

    function openMenu() {
        isMenuOpen.value = true
    }

    function closeMenu() {
        isMenuOpen.value = false
    }

    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value
    }

    function showEstimate() {
        estimateShow.value = true
    }

    function hideEstimate() {
        estimateShow.value = false
    }

    function toggleEstimate() {
        estimateShow.value = !estimateShow.value
    }

    return {
        showRoofing,
        setShowRoofing,
        showFacade,
        setShowFacade,
        showInsulation,
        setShowInsulation,
        isMenuOpen,
        estimateShow,
        openMenu,
        closeMenu,
        toggleMenu,
        showEstimate,
        hideEstimate,
        toggleEstimate
    }
})