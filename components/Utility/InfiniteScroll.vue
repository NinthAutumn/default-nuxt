

<template >
  <div class="infinite-scroll" v-show="!loaded">
    <slot></slot>
  </div>
</template>

<script lang="ts">
//emits infinite for when it is viewed
import Vue, { PropOptions } from 'vue'
interface ObserverOptions {
  readonly root: Element | null
  readonly rootMargin: string
  readonly thresholds: ReadonlyArray<number>
}

export default Vue.extend({
  name: 'infinite-scroll',
  props: {
    loaded: {
      type: Boolean,
      required: true
    },
    options: {
      type: Object,
      required: false
    } as PropOptions<ObserverOptions>
  },
  methods: {
    observerHandler([entity]) {
      if (entity.isIntersecting) {
        return this.$emit('infinite')
      }
    }
  },
  mounted() {
    const observer = new IntersectionObserver(
      this.observerHandler,
      this.options
    )
    observer.observe(this.$el)
  }
})
</script>
