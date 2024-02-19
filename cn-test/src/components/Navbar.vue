<template>
  <nav class="navbar">
    <div class="nav-left">
      <span class="header">VIBE BK</span>

      <ul class="navList">
        <li class="navItem">
          <router-link class="rLink" to="/Home">Home</router-link>
        </li>
        <li class="navItem">
          <router-link class="rLink" to="/Transfer">Transfer</router-link>
        </li>
      </ul>
    </div>
    <div class="nav-right">
      <router-link class="rLink" to="/SignIn">Sign In</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
span.header {
  color: #f1faee;
  text-shadow: 2px 2px #e63946;
  cursor: default;
}

.navbar {
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  font-weight: bold;
  background-color: #1d3557;
}

.nav-right{
  font-size: 20px;
  margin-left: 30px;
}

.nav-left {
  font-size: 20px;
  margin-left: 30px;
  display: flex;
}

.navList {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0px;
}

.navItem {
  margin-right: 20px;
  font-size: 20px;
}

.nav-right {
  margin-right: 20px;
}
</style>
