<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";

export default defineComponent({
  name: "MainLayout",

  setup() {
    return {
      // active this when you want to avoid the token check
      // (off course, this is not a good practice and i'm doind this just for the sake of simplicity during my app development)
      debug: false,
    };
  },
  beforeMount() {
    if (!this.debug) {
      const token = localStorage.getItem("token");
      // if the token is empty it means that there is nothing in localstorage, so we won't pass it on
      // check whether the token has expired
      if (
        token === null ||
        jwt_decode(token).exp <= Math.floor(new Date() / 1000)
      ) {
        // expired
        this.$q.notify({
          color: "negative",
          position: "top",
          message: "Sua sessão expirou!",
          timeout: 1500,
        });
        localStorage.removeItem("token");
        this.$router.push("/login");
      } else {
        // not expired
      }
    }
  },
  mounted() {
    this.$q.loading.hide();
  },
});
</script>
