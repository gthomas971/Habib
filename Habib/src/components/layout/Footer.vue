<template>
  <footer>
    <div class="enterprise">
      <img :src="Logo" alt="logo les artisants du val de loire">
      <div class="information-enterprise">
        <span>ZAC du patureau de la grange</span>
        <span>41200 Pruniers en sologne</span>
        <span class="contact">Accueil.avdl41@gmail.com</span>
      </div>
    </div>
    <div class="information-service">
      <div>
        <h4>Services</h4>
        <ul>
          <li>Toiture</li>
          <li>Façade</li>
          <li>Isolation</li>
        </ul>
      </div>

      <div>
        <h4>Zone <br>d’intervention</h4>
        <p>Romorantin <br> et ses alentours</p>
      </div>
    </div>


  </footer>
</template>

<script setup>
import Logo from '@/assets/images/logoFull.png'

</script>



<style scoped>
footer{
  background-color: #faf5ee;
  padding: 30px 20px;
  font-size: 18px;
}
.enterprise{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
img{
  width: 80%;
}
.information-enterprise{
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #2e4a50;
}
.contact{
  margin-top: 20px;
}
h4{
  color: #2e4a50;
  font-size: 20px;
  font-weight: bold;
}
.information-service{
  display: flex;
  justify-content: space-between;
}


/*************/

ul {
  list-style: none;
  padding-left: 0;
}

li{
  position: relative;
  padding-left: 20px;
  margin-bottom: 6px;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #387b7e;
  border-radius: 2px;
}
</style>