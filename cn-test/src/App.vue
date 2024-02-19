<template>
  <div id="app">
    <NavBar id="nav" />
    <div class="main-wrapper">
      <div class="main-inner">
        <RouterView/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");

* {
  font-family: "Roboto Slab", serif;
}


#nav {
  position: fixed;
}

.rLink {
  text-decoration: none;
  color: #f1faee;
  cursor: pointer;
}

.rLink:hover {
  color: #e63946;
  border-bottom: 2px solid #f1faee;
}
</style>
