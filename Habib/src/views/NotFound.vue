<template>
  <div class="notfound">
    <h1>404</h1>
    <p>La page que vous cherchez n'existe pas.</p>
    <router-link to="/">Retour à l'accueil</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.notfound {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}

.notfound h1 {
  font-size: 80px;
  color: #387b7e;
  margin: 0;
}

.notfound p {
  font-size: 20px;
  margin: 20px 0;
}

.notfound a {
  color: #387b7e;
  text-decoration: underline;
  font-weight: bold;
}
</style>