<template>
  <div>
    <illust-window />
    <activity-window :service-descriptions="serviceDescriptions" />
    <the-grid>
      <info-window />
    </the-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import TheGrid from '@/components/molecules/girds/TheGrid.vue'
import IllustWindow from '@/components/templates/index/IllustWindow.vue'
import ActivityWindow from '@/components/templates/index/ActivityWindow.vue'
import InfoWindow from '@/components/templates/index/InfoWindow.vue'

export default defineComponent({
  components: {
    TheGrid,
    InfoWindow,
    IllustWindow,
    ActivityWindow,
  },
  async asyncData({ $content }) {
    const serviceDescriptions = await $content('index').sortBy('path').fetch()
    console.log(serviceDescriptions)
    return {
      serviceDescriptions,
    }
  },
})
</script>
