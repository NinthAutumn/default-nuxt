<template>
  <div class="lazy-img">
    <div
      class="lazy-img__container"
      :class="{'lazy-img__container--aspect':aspectRatio!==1}"
      :style="{...style,maxWidth:maxWidth+'rem',width}"
    >
      <picture>
        <source :media="src.media" :srcset="src.src" v-for="(src,index) in list" :key="index" />
        <img
          class="lazy-img__img"
          :class="{'lazy-img__img--avatar':avatar}"
          ref="lazy"
          :src="lazySrc"
          :data-src="src"
          :style="{maxWidth:maxWidth,minWidth:minWidth}"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
</template>

<script>
/*
  @param src
    image url pointing at the source of the image
  @param width
    image width
  @param list
    image alternative sources with its media size such as (max-width) as media and image url as src


*/
export default {
  props: {
    src: [String, Object],
    width: Number,
    list: [Array, Object],
    height: String,
    maxWidth: [Number, String],
    maxHeight: Number,
    lazySrc: [String, Object],
    aspectRatio: {
      type: Number,
      default: 1
    },
    minWidth: [Number, String],
    avatar: Boolean
  },
  data: () => ({
    style: {},
    target: ""
  }),
  methods: {
    onIntersection(imageEntites) {}
  },
  mounted() {
    if (this.aspectRatio !== 1) {
      this.style = {
        "--aspect-ratio": this.aspectRatio
      };
    }
    let observer = new IntersectionObserver(imageEntites => {
      let image = imageEntites[0];
      if (image.isIntersecting) {
        observer.unobserve(image.target);
        image.target.src = image.target.dataset.src;
        image.target.onload = () => image.target.classList.add("loaded");
      }
    });
    observer.observe(this.$refs.lazy);
  }
};
</script>

<style lang="scss" scoped>
.lazy-img {
  [style*="--aspect-ratio"] > :first-child {
    width: 100%;
  }
  [style*="--aspect-ratio"] > img {
    height: auto;
  }
  @supports (--custom: property) {
    [style*="--aspect-ratio"] {
      position: relative !important;
    }
    [style*="--aspect-ratio"]::before {
      content: "";
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*="--aspect-ratio"] > :first-child {
      position: absolute !important;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  $self: &;
  &__container {
    overflow: hidden;
    position: relative;
    &--aspect {
    }
    #{$self}__img {
      position: relative;
      // background: white;
      width: 100%;
      height: 100%;
      &--avatar {
        border-radius: 50%;
      }
    }
  }
}
</style>
