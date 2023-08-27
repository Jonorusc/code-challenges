<template>
  <section id="topbar">
    <div class="search" tabindex="0">
      <i class="fi fi-rr-search"></i>
      <input type="text" placeholder="Pesquisar" />
    </div>

    <button class="add-companies" @click="$emit('open', true)">
      <span class="title">adicionar empresa</span>
      <i class="fi fi-rr-plus"></i>
    </button>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  emits: ['open'],
  setup() {
    return {};
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
#topbar {
  @media screen and (max-width: 1054px) {
    margin-left: 0;
    width: 100%;
  }

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1rem;
  }

  margin-left: 29rem;
  width: calc(100% - 29rem);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  .search {
    display: flex;
    align-items: center;
    background-color: white;
    column-gap: 0.8rem;
    border-radius: 0.5rem;
    padding: 1.8rem 2rem;
    width: 100%;
    max-width: 45rem;
    border-radius: 0.8rem;
    &:focus {
      outline: 0.1rem dashed $labels;
    }
    box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
    i {
      font-size: 1.8rem;
      margin-right: 0.5rem;
      line-height: 1.8rem;
      color: #bebebe;
    }
    input {
      border: none;
      outline: none;
      background-color: inherit;
      width: 100%;
      font-family: "Nunito Sans", sans-serif;
      font-size: 1.6rem;
      color: $primary;
      font-weight: 600;
      line-height: 1.6rem;
      &::placeholder {
        color: #bebebe;
      }
    }
  }

  .add-companies {
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    background-color: $backgroundLight;
    width: fit-content;
    padding: 1.8rem 2rem;
    border-radius: 0.8rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s ease-in-out;
    
    &:active {
      background-color: $background;
      i {
        transform: scale(0.9) translateX(-0.2rem);
      }
      outline: 0.1rem dashed $labels;
    }
    &:focus {
      outline: 0.1rem dashed $labels;
    }
    .title {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 1.6rem;
      color: $labels;
    }
    i {
      font-size: 1.8rem;
      color: $labels;
      line-height: 1.8rem;
    }
  }
}
</style>
