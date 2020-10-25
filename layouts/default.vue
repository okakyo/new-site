<template>
  <v-app app>
    <the-header />
    <v-main app class="grey lighten-4">
      <v-fade-transition
        ><v-container> <nuxt /></v-container>
      </v-fade-transition>
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
