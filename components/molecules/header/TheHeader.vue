<template>
  <v-app-bar clipped-left clipped-right app flat dark color="primary">
    <v-btn dark depressed text nuxt to="/">
      <v-icon left>mdi-home</v-icon>
      Top
    </v-btn>
    <v-spacer />
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn
        v-for="(nav, i) in navList"
        :key="i"
        class="mx-2"
        small
        text
        link
        :to="nav.to"
        ><v-icon left>{{ nav.icon }}</v-icon> {{ nav.name }}</v-btn
      >
    </div>
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
      { name: 'AboutME', to: '/about', icon: 'mdi-account-details' },
      { name: 'Works', to: '/works', icon: 'mdi-panorama' },
      { name: 'contact', to: '/contact', icon: 'mdi-chat' },
    ])
    return {
      navList,
    }
  },
})
</script>
