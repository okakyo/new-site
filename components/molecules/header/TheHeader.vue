<template>
  <v-app-bar dark color="primary">
    <v-app-bar-nav-icon />
    <v-spacer />
    <v-btn
      v-for="(nav, i) in navList"
      :key="i"
      class="mx-2"
      small
      text
      link
      :to="nav.to"
      >{{ nav.name }}</v-btn
    >
    <v-btn outlined class="ma-1"> 公式ブログ </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

type NavList = {
  name: string
  icon: string
  to: string
}

export default defineComponent({
  name: 'TheHeader',
  setup() {
    const navList = ref<NavList[]>([
      { name: 'About', to: '/about', icon: '' },
      { name: 'News', to: '/news', icon: '' },
      { name: 'contact', to: '/faq', icon: '' },
    ])
    return {
      navList,
    }
  },
})
</script>
