<template lang="pug">
  #references.references
    b-container.header.container-fluid(align-v="center")
      b-row.justify-content-center(align-v="center")
        b-col.text-left(cols="12" md="10" lg="9")
          h1.handfont Evidencia periodística
          b-row.my-5.justify-content-center(align-v="center")
            b-col.references--card.px-0(cols="10" md="6" lg="4" v-for="(source, i) in sources" v-bind:key="i" v-if="source['Título de la nota']")
              a.references--card--link(:href="source.Enlance" target="_blank").text-center
                .references--card--link--img(v-bind:style="{ backgroundImage: 'url(' + source.ogImg.url + ')' }")
                p.small.bolder.py-2.px-1 {{ source["Título de la nota"] }}
</template>
<script>
import { json } from 'd3-fetch';

export default {
  name: 'References',
  props: {
    state: String,
  },
  data() {
    return {
    };
  },
  computed: {
    sources() {
      if (!this.$store.state.summary[this.state].sources) this.getSources();
      return this.$store.state.summary[this.state].sources;
    },
  },
  methods: {
    async getSources() {
      const stateSummary = this.$store.state.summary[this.state];
      this.$store.dispatch('setSources', { estado: this.state, sources: await json(`/assets/data/${stateSummary.file}`) });
    },
  },
};
</script>
<style lang="scss" scoped>
#references {
  .references--card {
    font-size: 0.7rem;
    height: 220px;
    overflow: hidden;
    width: 100%;
    &--link {
      width: 100%;
      height: 100%;
      color: #00000000;
      position: absolute;
      &--img {
        background-color: darkgray;
        width: 100%;
        height: 220px;
        background-position: center;
        background-size: cover;
        filter: grayscale(0.75) brightness(0.8);
      }
      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
      }
      &:hover {
        text-decoration: none;
        color: #fff;
        p {
          background-color: #0f1114;
        }
      }
    }
  }
}

@media (max-width: 767.9px) {
#references {
  .references--card {
    &--link {
      color: #fff;
      p {
        background-color: #0f1114;
      }
    }
  }
}
}
</style>
