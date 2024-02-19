<template>
  <div class="wrapper">
    <div class="login-box">
      <div class="login-header">
        <span>Sign In</span>
      </div>

      <div class="input-box">
        <input type="text" id="username" class="input-form" required />
        <label for="username" id="label">Username</label>
      </div>

      <div class="input-box">
        <input type="password" id="password" class="input-form" required />
        <label for="password" id="label">Password</label>
      </div>

      <div class="input-box">
        <input
          type="submit"
          class="input-submit"
          value="Login"
          v-on:click="login"
        />
      </div>

      <div class="register">
        <span>Don't have an account? <RouterLink class="rLink" to="/SignUp">Sign Up</RouterLink></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {
      console.log("OK");
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding-top: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #f1faee;
  --secondary-color: #e63946;
  --blue-color: #1d3557;
}

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-box {
  position: relative;
  width: 450px;
  border: 2px solid var(--primary-color);
  border-radius: 15px;
  padding: 7.5em 2.5em 4em 2.5em;
  color: var(--secondary-color);
  background: var(--blue-color);
}

.login-header {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-color);
  width: 140px;
  height: 70px;
  border-radius: 0 0 20px 20px;
  cursor: default;
}

.login-header span {
  font-size: 30px;
  color: var(--blue-color);
}

.login-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: -30px;
  width: 30px;
  height: 30px;
  border-top-right-radius: 50%;
  background: transparent;
  box-shadow: 15px 0 0 0 var(--primary-color);
}

.login-header::after {
  content: "";
  position: absolute;
  top: 0;
  right: -30px;
  width: 30px;
  height: 30px;
  border-top-left-radius: 50%;
  background: transparent;
  box-shadow: -15px 0 0 0 var(--primary-color);
}

.input-form:focus ~ #label,
.input-form:valid #label {
  position: absolute;
  top: -10px;
  left: 20px;
  font-size: 14px;
  background-color: var(--primary-color);
  border-radius: 30px;
  color: var(--secondary-color);
  padding: 0 10px;
}

.icon {
  position: absolute;
  top: 18px;
  right: 25px;
  font-size: 20px;
}

.input-box {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.input-form {
  width: 100%;
  height: 55px;
  font-size: 16px;
  background: transparent;
  color: var(--secondary-color);
  padding-inline: 20px 50px;
  border: 2px solid var(--primary-color);
  border-radius: 30px;
  outline: none;
}

#username {
  margin-bottom: 10px;
}

#label {
  position: absolute;
  top: 15px;
  left: 20px;
  transition: 0.2s;
}

.input-submit {
  width: 100%;
  height: 50px;
  background: var(--primary-color);
  font-size: 16px;
  font-weight: 500;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.input-submit:hover {
  background: var(--secondary-color);
}

.register {
  text-align: center;
}

.register a {
  font-weight: 500;
}

@media only screen and (max-width: 564px) {
  .wrapper {
    padding: 20px;
  }

  .login-box {
    padding: 7.5em 1.5em 4em 1.5em;
  }
}
</style>
