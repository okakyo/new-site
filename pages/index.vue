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
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Okakyo's Blog Site",
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: "Okakyo's Blog",
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://okakyo-new-portfolio.netlify.app',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: "Okakyo's Blog Site",
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: "Okakyo's Blog Site",
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://okakyo-new-portfolio.netlify.app/img/ogp.png',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        { hid: 'twitter:site', name: 'twitter:site', content: '@31415O_Kyo' },
      ],
    }
  },
})
</script>
