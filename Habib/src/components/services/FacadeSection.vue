<template>
  <section class="facade">

    <h2>Entretenir votre façade : valorisez et protégez votre habitation</h2>

    <p class="intro">
      La façade est la première chose que l’on voit de votre maison.
      Elle reflète son état, sa valeur et son entretien.
    </p>

    <!-- Importance -->
    <div class="block">
      <h3>Pourquoi entretenir sa façade est indispensable ?</h3>
      <ul>
        <li>Protection contre les intempéries (pluie, gel, pollution, UV)</li>
        <li>Prévention des infiltrations et de l’humidité</li>
        <li>Amélioration de l’isolation thermique</li>
        <li>Valorisation du bien immobilier</li>
      </ul>
    </div>

    <!-- Solutions -->
    <div class="block">
      <h3>Nos solutions d’entretien et de ravalement</h3>

      <div class="grid">
        <div class="card">
          <h4>🧼 Nettoyage de façade</h4>
          <p>Élimination des salissures, mousses et pollution.</p>
        </div>

        <div class="card">
          <h4>🌿 Traitement anti-mousse</h4>
          <p>Protection durable contre les végétaux.</p>
        </div>

        <div class="card">
          <h4>🧱 Ravalement de façade</h4>
          <p>Remise en état complète avec réparation et finition.</p>
        </div>

        <div class="card">
          <h4>💧 Hydrofugation</h4>
          <p>Imperméabilisation pour éviter les infiltrations.</p>
        </div>

        <div class="card">
          <h4>🛠 Réparation des fissures</h4>
          <p>Correction des défauts pour garantir solidité et étanchéité.</p>
        </div>
      </div>
    </div>

    <!-- Pro -->
    <div class="block">
      <h3>Pourquoi faire appel à un professionnel ?</h3>
      <ul>
        <li>Diagnostic précis</li>
        <li>Produits adaptés à chaque surface</li>
        <li>Intervention rapide et durable</li>
        <li>Respect des obligations légales</li>
      </ul>
    </div>

    <!-- Valeur -->
    <div class="block">
      <h3>Donnez une nouvelle jeunesse à votre façade</h3>
      <ul>
        <li>Maison plus esthétique</li>
        <li>Valeur immobilière renforcée</li>
        <li>Moins de dégradations à long terme</li>
        <li>Meilleure protection contre l’humidité</li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="cta">
      <h3>Intervention à Romorantin et alentours</h3>
      <p>
        Devis gratuit et conseils personnalisés.
      </p>
      <button @click="$emit('contact')">
        Demander un devis
      </button>
    </div>

  </section>
</template>

<script setup>
defineEmits(['contact'])
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

.block {
  margin-bottom: 30px;
}

ul {
  padding-left: 20px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.card {
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.cta {
  background: #387b7e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background: white;
  color: #387b7e;
  border-radius: 5px;
  cursor: pointer;
}
</style>