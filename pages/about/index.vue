<template>
  <index-grid>
    <index-card nuxt :url-lists="urlLists" page-title="Profile">
      <template>
        <activity-window :service-descriptions="serviceDescriptions" />
      </template>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/grids/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
import ActivityWindow from '@/components/templates/about/ActivityWindow.vue'

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
