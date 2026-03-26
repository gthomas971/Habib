<template>
  <div class="form-container">

    <h2>Devis</h2>

    <div class="form-intro">
      <p>Remplissez le formulaire ci-dessous. Un conseiller traitera votre demande dans les meilleurs délais.</p>
    </div>

    <h2 class="form-section-title">
      <span class="section-dot"></span>
      Informations de contact
    </h2>

    <form @submit.prevent="submitForm" class="form-main">

      <div class="form-row">
        <div class="form-field">
          <label for="lastName">Nom *</label>
          <input id="lastName" v-model="form.lastName" type="text" placeholder="Durand" required>
        </div>
        <div class="form-field">
          <label for="firstName">Prénom</label>
          <input id="firstName" v-model="form.firstName" type="text" placeholder="Bernard">
        </div>
      </div>

      <div class="form-row">
        <!-- Code Postal -->
        <div class="form-field">
          <label for="postalCode">Code postal *</label>
          <input
              id="postalCode"
              v-model="form.postalCode"
              type="text"
              placeholder="49000"
              required
          >
        </div>

        <!-- Ville -->
        <div class="form-field">
          <label for="city">Ville *</label>
          <input
              id="city"
              v-model="form.city"
              type="text"
              placeholder="Angers"
              required
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-field">
          <label for="phone">Numéro de téléphone *</label>
          <input id="phone" v-model="form.phone" type="tel" placeholder="+33 2 41 53 90 87" required>
        </div>
        <div class="form-field">
          <label for="email">Email *</label>
          <input id="email" v-model="form.email" type="email" placeholder="durand.b@gmail.com" required>
        </div>
      </div>

      <div class="form-field">
        <label>Vous êtes *</label>
        <div class="button-radio-group">
          <button
              type="button"
              :class="{ active: form.isOwner === 'owner' }"
              @click="form.isOwner = 'owner'"
          >
            Propriétaire
          </button>
          <button
              type="button"
              :class="{ active: form.isOwner === 'tenant' }"
              @click="form.isOwner = 'tenant'"
          >
            Locataire
          </button>
        </div>
      </div>

      <div class="form-field">
        <label>Vos travaux concernent *</label>
        <div class="button-radio-group">
          <button
              type="button"
              :class="{ active: form.houseType === 'house' }"
              @click="form.houseType = 'house'"
          >
            Maison
          </button>
          <button
              type="button"
              :class="{ active: form.houseType === 'apartment' }"
              @click="form.houseType = 'apartment'"
          >
            Appartement
          </button>
        </div>
      </div>

      <div class="form-field">
        <label>Votre demande concerne (plusieurs choix possibles)</label>
        <div class="multi-button-grid">
          <button
              v-for="option in productOptions"
              :key="option.value"
              type="button"
              :class="{ active: form.products.includes(option.value) }"
              @click="toggleProduct(option.value)"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <div class="form-field">
        <label for="comment">Compléter votre demande</label>
        <textarea id="comment" v-model="form.comment" placeholder="Décrivez plus en détail votre projet ici…"></textarea>
      </div>

      <div class="form-submit">
        <button type="submit">Obtenir un devis gratuitement</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  lastName: '',
  firstName: '',
  postalCode : '',
  city: '',
  phone: '',
  email: '',
  isOwner: '',
  houseType: '',
  products: [] as string[],
  comment: '',
  companySharingConsent: false,
})

const productOptions = [
  { label: 'Toiture', value: 'roof' },
  { label: 'Façade', value: 'facade' },
  { label: "Isolation", value: 'insulation' }
]

function toggleProduct(value: string) {
  const index = form.products.indexOf(value)
  if (index > -1) {
    form.products.splice(index, 1)
  } else {
    form.products.push(value)
  }
}

function submitForm() {
  console.log('Form submitted', form)
  alert('Votre demande a été envoyée !')
}
</script>

<style scoped>
.form-container {
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 3rem;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: sans-serif;
}

.form-intro {
  margin-bottom: 2rem;
}

.form-section-title {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.section-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #387b7e;
  border-radius: 4px;
}

.form-main {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.form-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.form-field input,
.form-field textarea,
.form-field select {
  border: 1px solid #bbb;
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
}

.form-radio-group {
  display: flex;
  gap: 1.5rem;
}

.form-radio-group input {
  margin-right: 0.25rem;
}

.form-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-submit {
  display: flex;
  justify-content: flex-end;
}

button {
  background-color: #387b7e;
  width: 100%;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.form-submit > button:hover {
  opacity: 0.9;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

.button-radio-group {
  display: flex;
  gap: 1rem;
}

.button-radio-group button {
  height: 40px;
  background-color: transparent;
  border: #387b7e 1px solid;
  cursor: pointer;
  transition: all 0.2s;
  color: #387b7e;
}

.button-radio-group button:not(.active):hover {
  background-color: #387b7e;
  opacity: 0.6;
  color: white;
}

.button-radio-group button.active {
  background-color: #387b7e;
  color: white;
}


.multi-button-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 colonnes */
  gap: 1rem;
}

.multi-button-grid button {
  height: 40px;
  background-color: transparent;
  border: 1px solid #387b7e;
  color: #387b7e;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 0.25rem;
}

.multi-button-grid button:not(.active):hover {
  background-color: #387b7e;
  opacity: 0.6;
  color: white;
}

.multi-button-grid button.active {
  background-color: #387b7e;
  color: white;
}
</style>