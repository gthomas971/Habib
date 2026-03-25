<template>
  <section class="roofing">

    <h2>Protéger votre toiture : un enjeu essentiel</h2>

    <p class="intro">
      La toiture est l’un des éléments les plus cruciaux de votre habitation.
      Elle protège, isole et valorise votre maison.
    </p>

    <div class="block why">
      <h3>Pourquoi la toiture est-elle si importante ?</h3>
      <ul>
        <li>Protection contre les intempéries</li>
        <li>Prévention des infiltrations et moisissures</li>
        <li>Isolation thermique et efficacité énergétique</li>
        <li>Esthétique de la maison</li>
        <li>Durabilité et valeur du bien</li>
      </ul>
    </div>

    <div class="block">
      <h3>Nos conseils pour entretenir votre toiture</h3>

      <div class="grid">
        <div class="card">
          <h4>Nettoyage régulier</h4>
          <p>Éliminez mousses, lichens et saletés qui retiennent l’humidité.</p>
        </div>

        <div class="card">
          <h4>Traitement hydrofuge</h4>
          <p>Protège contre l’eau et prolonge la durée de vie du toit.</p>
        </div>

        <div class="card">
          <h4>Inspections</h4>
          <p>Détectez rapidement les tuiles cassées et zones fragiles.</p>
        </div>

        <div class="card">
          <h4>Réparations rapides</h4>
          <p>Évitez les dégâts plus graves et coûteux.</p>
        </div>
      </div>
    </div>

    <div class="block">
      <h3>Pourquoi faire appel à un professionnel ?</h3>
      <ul>
        <li>Démoussage efficace</li>
        <li>Traitements adaptés</li>
        <li>Détection de problèmes invisibles</li>
        <li>Conseils personnalisés</li>
      </ul>
    </div>

    <div class="block">
      <h3>Préservez la valeur de votre bien</h3>
      <ul>
        <li>Améliore l’aspect extérieur</li>
        <li>Augmente la valeur immobilière</li>
        <li>Réduit les coûts énergétiques</li>
      </ul>
    </div>

    <div class="cta">
      <h3>Intervention à Romorantin et ses alentours</h3>
      <p>
        Devis gratuit, conseils personnalisés et intervention rapide.
      </p>
      <button @click="$emit('contact')">Demander un devis</button>
    </div>

  </section>
</template>

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

.block {
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: #f2f2f2;
}

.why{
  background-color: #f2f2f2;
}

ul {
  list-style: none;
  padding-left: 0;
}

li{
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #387b7e;
  border-radius: 2px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.card {
  background: white;
  padding: 15px;
  border-radius: 8px;
}
.card > h4, .card > p{
  margin: 15px;
}

h4{
  display: inline-block;
  background-color: #387b7e;
  border-radius: 5px;
  padding: 10px;
  color: white;
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