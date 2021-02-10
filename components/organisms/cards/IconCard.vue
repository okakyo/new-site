<template>
  <v-card flat>
    <v-img class="pa-3" :src="require('@/assets/images/server.svg')" />
  </v-card>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'IconCard',
  props: {},
})
</script>

<style></style>
