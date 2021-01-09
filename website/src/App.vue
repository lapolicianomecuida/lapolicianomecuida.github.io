<template lang="pug" >
  #app
    Navbar
    router-view.mt-5.pt-5
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>
