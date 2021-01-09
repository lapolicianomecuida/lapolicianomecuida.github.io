<template lang="pug">
  .home
    Header
    Intro
    b-container.container-fluid.mt-5
      StateCarousel.desktop(v-bind:items="items")
      StateList.mobile(v-bind:items="items")
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Intro from '@/components/Intro.vue';
import StateCarousel from '@/components/StateCarousel.vue';
import StateList from '@/components/StateList.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Intro,
    StateCarousel,
    StateList,
  },
  data() {
    return {
    };
  },
  computed: {
    items() {
      return this.$store.state.estados;
    },
  },
};
</script>
