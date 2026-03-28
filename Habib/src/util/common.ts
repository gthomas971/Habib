import { nextTick } from 'vue'

export async function goToSection(id, ui, mobile = false) {

    if( mobile) ui.closeMenu()
    ui.hideEstimate()

    const actions = {
        "estimate-section": () => ui.showEstimate(),
        "roofing-block": () => ui.setShowRoofing(true),
        "insulation-block": () => ui.setShowInsulation(true),
        "facade-block": () => ui.setShowFacade(true)
    }

    actions[id]?.()

    await nextTick()

    const el = document.getElementById(id)

    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 100

        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
}