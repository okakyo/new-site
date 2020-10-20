<template>
  <v-layout>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="7">
        <slot />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DocGrid',
})
</script>
