<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="(link, index) in linkList"
        :key="index"
        cols="10"
        sm="8"
        md="4"
      >
        <link-card
          class="ma-3"
          :to="link.to"
          :name="link.name"
          :img="link.img"
        />
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
  img: string
}

export default defineComponent({
  name: 'LinkWindow',
  components: {
    LinkCard,
  },
  setup() {
    const profileImg = ref(require('@/assets/images/profile.svg'))
    const worksImg = ref(require('@/assets/images/works.svg'))
    const contactImg = ref(require('@/assets/images/contact.svg'))
    const linkList = ref<NavList[]>([
      { name: 'About Me', to: '/about', img: profileImg.value },
      { name: 'Works', to: '/works', img: worksImg.value },
      { name: 'Contact', to: '/contact', img: contactImg.value },
    ])
    return { linkList }
  },
})
</script>

<style></style>
