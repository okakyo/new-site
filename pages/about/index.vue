<template>
  <index-grid>
    <index-card nuxt :url-lists="urlLists" page-title="Profile">
      <activity-window :service-descriptions="serviceDescriptions" />
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
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
    return {
      serviceDescriptions,
    }
  },
  setup() {
    const urlLists = ref([
      {
        text: 'Top',
        href: '/',
        disabled: false,
      },
      {
        text: 'About',
        href: '/about',
        disabled: true,
      },
    ])
    return {
      urlLists,
    }
  },
})
</script>
