<template lang="pug">
  b-container.state-carousel.container-fluid( align-v="center")
    b-row.row.justify-content-center(align-v="center")
      b-col(cols="10" md="9" lg="8" v-if="items.length > 0")
        .card-carousel-wrapper
          .card-carousel--nav__left(
            @click="moveCarousel(-1)"
            :disabled="atHeadOfList"
          )
            b-icon(icon="arrow-left")
          .card-carousel
            .card-carousel--overflow-container
              .card-carousel-cards(:style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}")
                .card-carousel--card(v-for="item in items" :key="item.value" @click="goTo(item.value)")
                  .card-carousel--card--img
                    b-img.img-fluid(:src="getImgUrl(item.value)")
                  .card-carousel--card--footer
                    p {{ item.text }}
          .card-carousel--nav__right(
            @click="moveCarousel(1)"
            :disabled="atEndOfList"
          )
            b-icon(icon="arrow-right")
</template>

<script>
export default {
  name: 'StateCarousel',
  props: {
    items: Array,
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
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
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    getImgUrl(img) {
      return require(`../assets/${img}.png`);
    },
    goTo(value) {
      this.active = value;
      this.$router.push(`/estado/${value}`);
    },
  },
};
</script>
<style scoped lang="scss">
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 680px;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    margin: 0 20px;
    font-size: 1.5rem;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0;
    }
  }

  &--nav__left {
    &:active {
      transform: scale(0.95);
    }
  }

  &--nav__right {
    &:active {
      transform: scale(0.95);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);

  .card-carousel--card {
    margin: 0 2.3rem;
    cursor: pointer;
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &--img {
      height: 70%;
      display: flex;
      align-content: center;
      justify-content: center;
      width: 120px;
      img {
        vertical-align: bottom;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        transition: opacity 150ms linear;
        user-select: none;
        max-width: 100%;
        max-height: 100%;
        margin: auto;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &--footer {
      border-top: 0;
      padding: 7px 15px;
      height: 30%;

      p {
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 3px 0;
        margin: 8px 0;
        font-size: 0.8rem;
        user-select: none;
        font-weight: 700;
        line-height: 1;
      }
    }
  }
}
</style>
