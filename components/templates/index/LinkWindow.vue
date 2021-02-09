<template>
  <v-container>
    <v-row>
      <v-col v-for="(link, index) in linkList" :key="index" cols="12" md="4">
        <v-card nuxt :to="link.to">
          <v-card-content>
            <v-card-title>
              {{ link.name }}
            </v-card-title>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import LinkCard from '@/components/organisms/cards/LinkCard.vue'

type NavList = {
  name: string
  to: string
}

export default defineComponent({
  name: 'LinkWindow',
  components: {
    LinkCard,
  },
  setup() {
    const linkList = ref<NavList[]>([
      { name: 'About Me', to: '/about' },
      { name: 'Works', to: '/works' },
      { name: 'Contact', to: '/contact' },
    ])
    return { linkList }
  },
})
</script>

<style></style>
