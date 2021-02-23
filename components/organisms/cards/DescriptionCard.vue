<template>
  <v-card outlined>
    <v-card-title style="text-align: center">
      {{ cardTitle }}
    </v-card-title>
    <v-card-text class="ml-1">
      {{ cardDescription }}
    </v-card-text>
    <v-card-actions v-if="snsLinks">
      <v-btn
        v-for="(item, index) in snsLinks"
        :key="index"
        icon
        :href="item.url"
      >
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DescriptionCard',
  props: {
    cardTitle: {
      type: String,
      reqiored: true,
      default: '',
    },
    cardDescription: {
      type: String,
      required: false,
      default: '',
    },
    snsLinks: {
      type: Array,
      required: false,
      default: () => {},
    },
  },
})
</script>
