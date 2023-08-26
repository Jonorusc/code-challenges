<template>
  <q-page id="login">
    <img
      src="~assets/convicti-logo.webp"
      alt="Convicti logomarca"
      class="logo"
    />
    <q-form @submit="onSubmit" id="form">
      <div class="input">
        <label for="form-email">E-mail</label>
        <input v-model="form.email" type="text" id="form-email" />
      </div>
      <div class="input">
        <label for="form-password">Senha</label>
        <input v-model="form.password" type="password" id="form-password" />
      </div>

      <q-btn
        class="mt-5"
        label="Entrar"
        type="submit"
        color="secondary"
      />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const form = ref({
      email: "",
      password: "",
    });
    return {
      form
    };
  },
  methods: {
    onSubmit() {
      // Checando se os campos estão preenchidos
      if (!this.form.email || !this.form.password) {
        console.log("Preencha todos os campos")
        this.$q.notify({
          color: "info",
          message: "Preencha todos os campos",
          position: 'bottom',
          timeout: 2000,
          progress: true
        });
        return;
      }
      // TODO: implementar login
      this.$router.push("/");
    },
  },
});
</script>
<style lang="scss" scoped>
#login {
  height: 100vh;
  width: 100vw;
  background-color: $primary;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 8rem;
  padding: 9rem 1rem;
  #form {
    width: min(90%, 40rem);
    .input {
      display: flex;
      flex-direction: column;
      label {
        color: white;
      }
      input {
        font-family: "Nunito Sans";
        font-size: 1.6rem;
        font-weight: 500;
        width: 100%;
        height: 3.5rem;
        outline: none;
        border: none;
        text-indent: 0.5rem;
        border-radius: 0.45rem;
        margin: 0.5rem 0;
        &:focus {
          box-shadow: 0 0 0 1px $secondary;
        }
        &:active {
          background-color: #f2f2f2;
        }
      }
    }

    button {
      width: 100%;
      border-radius: 0.45rem;
      text-transform: capitalize;
      font-size: 1.6rem;
    }
  }
}
</style>