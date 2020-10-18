<template>
  <index-grid>
    <index-card page-title="お知らせ">
      <activity-window :service-descriptions="serviceDescriptions" />
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
import ActivityWindow from '@/components/templates/index/ActivityWindow.vue'
export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
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
