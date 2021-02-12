<template>
  <index-grid>
    <index-card nuxt :url-lists="urlLists" page-title="Works">
      <works-window :works="works.works" />
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/grids/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'
import WorksWindow from '@/components/templates/works/WorksWindow.vue'
export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
    WorksWindow,
  },
  async asyncData({ $content }) {
    const works = await $content('works').sortBy('path').fetch()
    return {
      works,
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
        text: 'works',
        href: '/works',
        disabled: true,
      },
    ])
    return {
      urlLists,
    }
  },
})
</script>
