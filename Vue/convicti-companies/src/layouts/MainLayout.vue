<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import jwt_decode from 'jwt-decode'

export default defineComponent({
  name: 'MainLayout',

  setup() {
    return {}
  },
  mounted() {
    this.$q.loading.hide()
  }
})
</script>
