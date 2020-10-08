<template>
  <v-app app>
    <the-header />
    <v-main app class="grey lighten-4 fill-height">
      <nuxt />
    </v-main>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TheHeader from '@/components/molecules/header/TheHeader.vue'

export default defineComponent({
  name: 'DefaultPage',
  components: {
    TheHeader,
  },
})
</script>
