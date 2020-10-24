<template>
  <div>
    <illust-window />
    <v-img :src="waveImg"></v-img>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import IllustWindow from '@/components/templates/index/IllustWindow.vue'

export default defineComponent({
  components: {
    IllustWindow,
  },
  layout: 'index',
  setup() {
    const waveImg = ref(require('@/assets/images/wave-up.svg'))
    return {
      waveImg,
    }
  },
})
</script>
