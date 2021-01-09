<template lang="pug">
  b-container.container-fluid.mt-5.justify-content-center( align-v="center")
    b-row.row.justify-content-center.mt-4(align-v="center")
      b-col.list.my-5(cols="10" md="9" lg="8" v-if="items.length > 0" v-for="item in items" :key="item.value" @click="goTo(item.value)")
        b-img.img-fluid(:src="getImgUrl(item.value)")
        p.bolder.mt-3.large {{ item.text }}
</template>

<script>
export default {
  name: 'StateList',
  props: {
    items: Array,
  },
  data() {
    return {
    };
  },
  computed: {
    active: {
      get() {
        return this.$store.state.active;
      },
      set(value) {
        this.$store.state.active = value;
      },
    },
  },
  methods: {
    getImgUrl(img) {
      return require(`../assets/${img}.png`);
    },
    goTo(id) {
      this.active = id;
      this.$router.push(`/estado/${id}`);
    },
  },
};
</script>
<style scoped lang="scss">
.list {
  justify-content: center;
  margin: auto;
  img {
    max-height: 120px;
  }
}
</style>
