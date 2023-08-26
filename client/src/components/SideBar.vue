<template>
  <section id="sidebar">
    <nav :class="`${showSideBar ? 'show' : 'hide'}`">
      <div class="logo">
        <img
          src="~assets/convicti-logo.webp"
          alt="Convicti logomarca"
          class="logo"
        />
      </div>
      <div class="menu">
        <h5 class="menu-title">Menu</h5>
        <ul class="menu-list">
          <li class="menu-item pt-2 pb-2 pr-5 pl-5" @click="$router.push('/')">
            <i class="fi fi-rr-building"></i>
            <span>Empresas</span>
          </li>
        </ul>
      </div>
      <button class="log-off" @click="logoff">
        <i class="fi fi-rr-power"></i>
        <span>Sair</span>
      </button>
    </nav>
    <div
      :class="`toggler ${showSideBar ? 'show' : 'hide'}`"
      @click="showSideBar = !showSideBar"
    >
      <i v-if="showSideBar" class="fi fi-rr-cross-small"></i>
      <i v-else class="fi fi-rr-menu-burger"></i>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SideBar",
  setup() {
    const showSideBar = ref(true);

    const resizeHandler = () => {
      if (window.innerWidth > 1054) {
        showSideBar.value = true;
      } else {
        showSideBar.value = false;
      }
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    return {
      showSideBar,
      resizeHandler,
    };
  },
  mounted() {},
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  methods: {
    logoff() {
      localStorage.removeItem("token");

      this.$router.push("/login");

      this.$q.notify({
        color: "positive",
        position: "top",
        message: "Você saiu do sistema!",
      });
    },
  },
});
</script>
<style lang="scss" scoped>
#sidebar {
  .toggler {
    @media screen and (max-width: 1054px) {
      display: flex;
    }
    position: fixed;
    bottom: -1rem;
    left: 22rem;
    display: none;
    justify-content: flex-end;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 4rem;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    i {
      font-size: 2.5rem;
      color: $background;
    }
    z-index: 30;

    @media screen and (max-width: 320px) {
      left: 18rem;
    }
   

    &.hide {
      left: 2rem;
      i {
        color: $primary;
      }
    }
  }

  nav {
    position: fixed;
    width: min(70vw, 29rem);
    height: 100vh;
    background-color: $primary;
    padding: 4rem 4rem;
    display: flex;
    flex-direction: column;
    z-index: 20;
    transition: transform 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

    @media screen and (max-width: 375px) {
      padding: 4rem 2rem;
    }

    &.hide {
      transform: translateX(-100%);
      opacity: 0;
      pointer-events: none;
    }

    &.show {
      transform: translateX(0);
      opacity: 1;
      pointer-events: all;
    }

    .logo {
      width: 21rem;
      object-fit: cover;
      @media screen and (max-width: 768px) {
        width: 14rem;
      }
    }

    .menu {
      margin-top: 10rem;
      .menu-title {
        font-size: 1.6rem;
        color: white;
        margin: 0 0 1.5rem 0;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
      }

      .menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        .menu-item {
          user-select: none;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          font-size: 2rem;
          color: $labels;
          font-weight: 550;
          background-color: white;
          column-gap: 1.8rem;
          border-radius: 0.5rem;
          cursor: pointer;

          @media screen and (max-width: 768px) {
            justify-content: center;
            padding: 0.5rem;
          }

          &:active {
            background-color: #f2f2f2;
          }
          i {
            line-height: 2rem;
          }
        }
      }
    }

    .log-off {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: white;
      background-color: transparent;
      outline: none;
      border: none;
      align-self: flex-start;
      column-gap: 0.8rem;
      margin-top: auto;

      cursor: pointer;
      i {
        line-height: 1.6rem;
      }
    }
  }
}
</style>
