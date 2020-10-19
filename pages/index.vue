<template>
  <div>
    <illust-window />
    <v-container>
      <info-window />
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import IllustWindow from '@/components/templates/index/IllustWindow.vue'

import InfoWindow from '@/components/templates/index/InfoWindow.vue'

export default defineComponent({
  components: {
    InfoWindow,
    IllustWindow,
  },
  layout: 'index',
})
</script>
