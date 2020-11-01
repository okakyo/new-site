<template>
  <v-container>
    <v-breadcrumbs :items="urlLists"> </v-breadcrumbs>
    <v-toolbar flat>
      <v-spacer />
      <v-toolbar-title class="headline">
        <h3>{{ articleTitle }}</h3>
      </v-toolbar-title>
      <v-spacer />
    </v-toolbar>
    <v-row justify="center">
      <v-col cols="6" sm="4" lg="3">
        <v-img :lazy-src="articleImg" :src="articleImg" />
      </v-col>
    </v-row>
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'ArticleHeader',
  props: {
    articleTitle: String,
    articleImg: String,
  },
  setup(props: any, { root }) {
    const currentPath = root.$route.path
    const slug = currentPath.split('/')[2]
    const urlLists = ref([
      {
        text: 'Top',
        href: '/',
        disabled: false,
      },
      {
        text: 'Blog',
        href: '/blog',
        disabled: false,
      },
      {
        text: slug,
        href: currentPath,
        disabled: true,
      },
    ])
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
        name: 'hatena',
        url: `https://b.hatena.ne.jp/add?mode=confirm&url=https://okakyo.myvnc.com`,
        src: '/hatenabookmark-logomark.svg',
        color: '#008fde',
      },
    ])

    return {
      shareButtons,
      urlLists,
    }
  },
})
</script>

<style></style>
