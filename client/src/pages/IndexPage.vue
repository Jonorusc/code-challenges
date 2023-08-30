<template>
  <q-page id="sistema">
    <SideBar />
    <div class="content">
      <Topbar
        @open="handleModal"
        @filter="handleTopbarFilter"
        :companies="companies"
      />
      <MainMap :companies="companies" :filter="filterId" />
    </div>
    <AddCompanies
      @close="handleModal"
      @success="handleRegisterCompany"
      :open="openModal"
    />
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
const { getCompanies } = useApi();
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
    const companies = ref([]);
    const filterId = ref(0);
    return {
      openModal,
      companies,
      filterId,
    };
  },
  methods: {
    async handleRegisterCompany() {
      // fetch companies again
      this.$q.loading.show({
        message: "Carregando Empresas...",
        spinnerSize: 100,
        spinnerColor: "grey",
      });

      await this.fetchCompanies();
    },
    handleModal(value) {
      this.openModal = value;
    },
    handleTopbarFilter(company) {
      this.filterId = company.id;
    },
    async fetchCompanies() {
      try {
        await getCompanies()
          .then((res) => {
            this.companies = res.data;
          })
          .catch((err) => {
            this.companies = $companies.data;
            console.error(
              `%c${err.message}`,
              "background-color: red; color: white; padding: 4px;"
            );
            console.log(
              `%cUsando dados "mockados"`,
              "background-color: #0e044a; color: #f8f8f8; padding: 4px;"
            );
          })
          .finally(() => {
            this.$q.loading.hide();
          });
      } catch (err) {
        this.companies = $companies.data;
        console.error(
          `%c${err}`,
          "background-color: red; color: white; padding: 4px;"
        );
      }
    },
  },
  async mounted() {
    this.$q.notify({
      message: "Bem vindo ao sistema de empresas!",
      color: "primary",
      icon: "info",
      position: "top",
      timeout: 2000,
    });
    this.$q.loading?.show({
      message: "Carregando Empresas...",
      spinnerSize: 100,
      spinnerColor: "grey",
    });
    await this.fetchCompanies()
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
