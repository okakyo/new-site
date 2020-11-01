<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="9" lg="8">
      <slot />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DocGrid',
})
</script>
