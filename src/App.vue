<template>
  <header>
    <div class="topHeader">
      <img
        alt="BlueGravity logo"
        class="logo"
        src="../public/favicon.ico"
        width="150"
        height="150"
      />
      <div class="searchSpace">
        <input v-model="text" class="searchInput" type="text" placeholder="Search..." autofocus />
      </div>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/games">Games</RouterLink>
        <RouterLink to="/videos">Videos</RouterLink>
        <RouterLink to="/artwork">Artwork</RouterLink>
        <RouterLink to="/music">Music</RouterLink>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  name: 'App',
  data() {
    return {
      text: ''
    }
  },
  watch: {
    text(input) {
      console.log(input)
    }
  }
}
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.topHeader {
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.searchSpace {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.searchInput {
  border-radius: 50px;
  color: white;
  background-color: #181818;
  border: none;
  position: relative;
}

.searchInput:hover {
  border-radius: 50px;
  color: white;
  border: 2px solid white;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
