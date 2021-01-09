<template lang="pug">
  .header(align-v="center")
    .ilustration
      //b-img.img-fluid(:src="require('@/assets/landing.png')")
    b-container.container-fluid
      b-row.row.justify-content-center(align-v="center")
        b-col.justify-content-center(cols="10" sm="7")
          TitleLogo.title(size="3.2rem")
      b-row.row.justify-content-center(align-v="center")
        b-col(cols="7" md="6" lg="5")
          b-row.brief.justify-content-center
            p En memoria de las mujeres víctimas de represión y violencia sexual por parte del Estado.
</template>

<script>
import TitleLogo from '@/components/TitleLogo.vue';

export default {
  name: 'Header',
  components: {
    TitleLogo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  width: 100%;
  min-height: 90vh;
  .ilustration {
    height: 50vh;
    background-image: url('~@/assets/landing.png');
    background-position: center;
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .title {
    margin-top: -5rem;
  }
  .brief {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    font-style: italic;
  }
}

@media (max-width: 767.9px) {
.header {
  .ilustration {
    height: 40vh;
  }
}
}
</style>
