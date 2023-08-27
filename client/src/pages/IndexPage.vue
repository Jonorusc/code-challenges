<template>
  <q-page id="sistema">
    <SideBar />
    <div class="content">
      <Topbar @open="handleModal" />
      <MainMap :companies="companies"/>
    </div>
    <AddCompanies @close="handleModal" :open="openModal" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
// componentes
import SideBar from "components/SideBar.vue";
import Topbar from "components/TopBar.vue";
import MainMap from "components/MainMap.vue";
import AddCompanies from "components/AddCompanies.vue";
//
import useApi from "src/composables/api";
import { companies as $companies } from "src/composables/mock.companies";

export default defineComponent({
  name: "IndexPage",
  components: {
    SideBar,
    Topbar,
    MainMap,
    AddCompanies,
  },
  setup() {
    const openModal = ref(false);
    const companies = ref($companies.data);
    return {
      openModal,
      companies
    };
  },
  methods: {
    handleModal(value) {
      this.openModal = value;
    },
  },
  async mounted() {
    this.$q.loading.show({
      message: "Carregando Empresas...",
      spinnerSize: 100,
      spinnerColor: "grey",
    });
    const { getCompanies } = useApi();
    await getCompanies().then(res => {
      this.companies = res.data;
    }).catch(err => {
      console.error(`%c${err.message}`, 'background-color: red; color: white; padding: 4px;');
      console.log(`%cUsando dados "mockados"`, 'background-color: #0e044a; color: #f8f8f8; padding: 4px;');
    }).finally(() => {
      this.$q.loading.hide();
    });
    
  },
});
</script>
<style lang="scss" scoped>
#sistema {
  display: flex;
  overflow: hidden;
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #f1f1f1;
  }
}
</style>
