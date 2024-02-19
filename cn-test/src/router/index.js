import { createRouter, createWebHistory } from "vue-router";
import MPage from "../pages/Home.vue";
import SignIn from "../pages/Login.vue";
import SignUp from "../pages/Register.vue";
import TransAc from "../pages/Transfer.vue";

const routes = [
  { path: "/Home", name: "MPage", component: MPage },

  { path: "/SignIn", name: "SignIn", component: SignIn },

  { path: "/SignUp", name: "SignUp", component: SignUp },

  { path: "/Transfer", name: "TransAc", component: TransAc },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
