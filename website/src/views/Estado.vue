<template lang="pug">
  #estado.estado
    b-container.container-fluid(v-if="active !== null")
      b-row.justify-content-center
        b-col(cols="11").justify-content-center.text-center.estado--header
          b-img(:src="getImgUrl(active)")
          .name.mt-2
            p.default-background.neutral-text.handfont {{ summary.state }}
      b-row.justify-content-center.text-justify.mt-3
        b-col(cols="12" md="10")
          p.handfont.mb-1.large Estado
          b-col.px-0(cols="12" md="5" lg="4")
            b-form-select(v-model="active" :options="options")

      hr
      b-row.justify-content-center.text-justify.mt-5(v-if="summary.events")
        b-col.mt-4(cols="11" md="9" v-for="event in summary.events")
          h4.mb-2.handfont Fecha&nbsp;
          p {{ event.date }}
          h4.mb-2.handfont Lugar&nbsp;
          p {{ event.location }}
          h4.mb-2.handfont Hechos
          p {{ event.text }}
      b-row.justify-content-center.text-justify.mt-5(v-else)
        b-col(cols="11" md="9")
          h4.mb-2.handfont Fecha&nbsp;
          p {{ summary.date }}
          h4.mb-2.handfont Lugar&nbsp;
          p {{ summary.location }}
          h4.mb-2.handfont Hechos
          p {{ summary.text }}
      References.mt-5(v-bind:state="active")
</template>
<script>
import References from '@/components/References.vue';

export default {
  name: 'Estado',
  components: {
    References,
  },
  data() {
    return {};
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
    summary() {
      return this.$store.state.summary[this.active];
    },
    options() {
      return this.$store.state.estados;
    },
  },
  methods: {
    getImgUrl(img) {
      return require(`../assets/${img}.png`);
    },
    goTo(id) {
      this.$router.push(`/estado/${id}`);
    },
  },
  mounted() {
    const paramstate = this.$router.currentRoute.params.id;
    if (!paramstate) this.$router.push('/');
    if (!this.active) {
      this.active = paramstate;
    }
  },
};
</script>
<style lang="scss" scoped>
#estado.estado {
  .estado--header {
    align-items: center;
    display: flex;
    flex-direction: column;
    img {
      max-width: 150px;
      max-height: 150px;
      margin: auto;
    }
    .name {
      width: fit-content;
      p {
        font-size: 2.3rem;
        padding: 0rem 1.7rem;
        border-radius: 25px;
        transform: skewX(-10deg);
        line-height: 0.85;
      }
    }
  }
}
</style>
