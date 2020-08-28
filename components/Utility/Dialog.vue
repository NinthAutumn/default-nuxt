

<template functional>
  <div class="dialog-card">
    <div class="dialog-card__container">
      <div class="dialog-card__content" :style="{...customStyle}">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
interface CustomStyle {
  width: number
  height: number
  maxWidth: number
  maxHeight: number
}
export default {
  props: {
    customStyle: {
      type: Object as () => CustomStyle,
      required: false,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    onMounted(() => {
      console.log('s')
    })
    return {}
  }
}
</script>

<style lang="scss" scoped>
.dialog-card {
  $self: &;
  overscroll-behavior: contain;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    #{$self}__content {
    }
  }
}
</style>
