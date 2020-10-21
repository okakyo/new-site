<template>
  <v-card class="pt-3">
    <v-toolbar flat>
      <v-spacer />
      <v-toolbar-title class="headline">
        <h3>{{ article.title }}</h3>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-layout>
      <v-row justify="center">
        <!-- > ここに、SNS ボタンを用意する <--->
        <v-btn
          v-for="button in shareButtons"
          :key="button.name"
          class="ma-3"
          fab
          outlined
          :color="button.color"
          :href="button.url"
          rel="nofollow"
          target="_blank"
        >
          <v-icon v-if="button.icon">
            {{ button.icon }}
          </v-icon>
          <h2 v-else class="fa-hatena"></h2>
        </v-btn>
      </v-row>
    </v-layout>
    <v-divider />
    <nuxt-content :document="article" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ArticleWindow',
  props: {
    article: Object,
  },
  setup() {
    const shareButtons = ref([
      {
        name: 'twitter',
        url: `https://twitter.com/share?url=https://okakyo.myvnc.com`,
        icon: 'mdi-twitter',
        color: '#1DA1F2',
      },
      {
        name: 'facebook',
        url: `https://www.facebook.com/share.php?u=https://okakyo.myvnc.com`,
        icon: 'mdi-facebook',
        color: '#3B5998',
      },
      {
        name: 'pocket',
        url: `https://getpocket.com/edit?url=https://okakyo.myvnc.com`,
        icon: 'mdi-pocket',
        color: 'error',
      },
      {
        name: 'hatena',
        url: `https://b.hatena.ne.jp/add?mode=confirm&url=https://okakyo.myvnc.com`,
        src: '/hatenabookmark-logomark.svg',
        color: '#008fde',
      },
    ])
    return {
      shareButtons,
    }
  },
})
</script>
