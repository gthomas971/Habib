<template>
  <form @submit.prevent="handleSubmit" class="form">
    <input v-model="form.nom" placeholder="Nom" required />
    <input v-model="form.prenom" placeholder="Prénom" required />
    <input v-model="form.telephone" placeholder="Téléphone" required/>
    <input v-model="form.codePostal" placeholder="Code postal" required />
    <input v-model="form.ville" placeholder="Ville" required />

    <SelectButton v-model="form.raison" :options="options" />

    <button type="submit">Valider</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import SelectButton from "@/components/ui/SelectButton.vue";

const options = ["Demande d'informations" , "SAV", "Autre"]

const form = reactive({
  nom: '',
  prenom: '',
  telephone: '',
  codePostal: '',
  ville: '',
  raison: ''
})

const handleSubmit = () => {
  console.log(form)
  alert("Formulaire envoyé ✅")
  // Ici tu peux émettre un événement ou appeler une API
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, select {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background-color: deepskyblue;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
</style>