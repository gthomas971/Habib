<template>
  <footer class="footer">
    <div class="footer-container">

      <div class="enterprise">
        <img :src="Logo" alt="logo les artisants du val de loire" class="footer-logo">
        <div class="information-enterprise">
          <span>ZAC du patureau de la grange</span>
          <span>41200 Pruniers en sologne</span>
          <a href="mailto:Accueil.avdl41@gmail.com" class="contact">Accueil.avdl41@gmail.com</a>
        </div>
      </div>

      <div class="information-service">
        <div class="service-column">
          <h4>Services</h4>
          <ul>
            <li>Toiture</li>
            <li>Façade</li>
            <li>Isolation</li>
          </ul>
        </div>

        <div class="service-column">
          <h4>Zone <br class="hide-desktop"> d’intervention</h4>
          <p>Romorantin <br class="hide-desktop"> et ses alentours</p>
        </div>
      </div>

    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 Les Artisans du Val de Loire. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<script setup>
import Logo from '@/assets/images/logoFull.png'
</script>

<style scoped>
/* --- Base Mobile First --- */
.footer {
  background-color: #faf5ee;
  padding: 40px 20px 20px;
  font-family: sans-serif; /* À adapter selon ton projet */
  color: #2e4a50;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.enterprise {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.footer-logo {
  width: 100%;
  max-width: 250px; /* Évite que le logo soit géant */
  height: auto;
}

.information-enterprise {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 1.5;
}

.contact {
  margin-top: 15px;
  font-weight: bold;
  color: #387b7e;
  text-decoration: none;
  transition: color 0.3s;
}

.contact:hover {
  color: #2e4a50;
}

.information-service {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}

h4 {
  color: #2e4a50;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 8px;
  transition: transform 0.2s;
  cursor: pointer;
}

li:hover {
  transform: translateX(5px);
  color: #387b7e;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: #387b7e;
  border-radius: 1px;
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(46, 74, 80, 0.1);
  text-align: center;
  font-size: 14px;
  opacity: 0.8;
}

/* --- Media Query Desktop --- */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .enterprise {
    align-items: flex-start;
    text-align: left;
    flex: 1;
  }

  .information-service {
    flex: 2;
    justify-content: flex-end;
    gap: 80px;
  }

  .footer-logo {
    max-width: 200px;
  }
}
</style>