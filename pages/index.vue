<template>
  <div>
    <illust-window />
    <info-window />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import IllustWindow from '@/components/templates/index/IllustWindow.vue'
import ActivityWindow from '@/components/templates/index/ActivityWindow.vue'
import InfoWindow from '@/components/templates/index/InfoWindow.vue'

export default defineComponent({
  components: {
    InfoWindow,
    IllustWindow,
    ActivityWindow,
  },
})
</script>
