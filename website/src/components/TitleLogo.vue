<template lang="pug">
  #titlelogo
    .title.text-center(v-bind:style="{ fontSize: size }")
      p.mb-2.handfont.uppercase La policía no me cuida
      .d-flex.justify-content-center
        p.sub.default-background.neutral-text.handfont Me cuidan mis amigas
</template>
<script>
export default {
  name: 'TitleLogo',
  props: {
    size: String,
  },
};
</script>
<style scoped lang="scss">
.title {
  line-height: 1;
  .sub {
    font-size: 65%;
    padding: 0.3% 0.8%;
    border-radius: 14px;
    width: fit-content;
    transform: skewX(-10deg);
  }
}
</style>
