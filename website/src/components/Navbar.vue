<template lang="pug">
  //b-container.container-fluid
  b-navbar(type="light" sticky)
    b-navbar-brand(href="/" v-if="!isHome")
      //TitleLogo(size="0.85rem")
      img(:src="require('@/assets/logo.png')")
    b-navbar-nav.ml-auto
      b-nav-item
        router-link(to="/exigimos") Exigimos
      b-nav-item
        router-link(to="/autocuidado") Autocuidado en marchas feministas
      b-nav-item
        router-link(:to="{path: '/', hash: 'ver-estados'}") Estados
</template>

<script>
import TitleLogo from '@/components/TitleLogo.vue';

export default {
  name: 'Navbar',
  components: {
    TitleLogo,
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
nav {
  background-color: #ffffff;
  .navbar-brand {
    img {
      height: 40px;
    }
  }
}

@media (max-width: 767.9px) {
nav {
  .navbar-brand {
    img {
      height: 23px;
    }
  }
}
}
</style>
