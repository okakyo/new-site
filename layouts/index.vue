<template>
  <v-app app>
    <the-header />
    <v-main class="grey lighten-4">
      <v-slide-y-reverse-transition>
        <nuxt />
      </v-slide-y-reverse-transition>
    </v-main>
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
