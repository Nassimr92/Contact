<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Journal</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/clavier">Clavier</RouterLink>
        <!-- <RouterLink to="/addContact">About</RouterLink> -->
      </nav>
  </header>
  <RouterView />
</template>

<style scoped>
nav {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
}

nav a.router-link-exact-active {
  background-color: blue(245, 155, 20);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  border: 3px solid rgb(245, 155, 20);
  font-size: 50px;
  text-decoration: none;
  color: white;
}

</style>
