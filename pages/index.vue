<template>
  <div>
    <illust-window />

    <v-img :src="waveImg"></v-img>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

import IllustWindow from '@/components/templates/index/IllustWindow.vue'

import InfoWindow from '@/components/templates/index/InfoWindow.vue'

export default defineComponent({
  components: {
    InfoWindow,
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
