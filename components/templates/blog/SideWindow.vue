<template>
  <v-card>
    <v-subheader> 最新記事 </v-subheader>
    <v-divider />
    <v-card v-for="(item, index) in articleList" :key="index" flat>
      <div class="d-flex flex-no-wrap pa-2">
        <v-avatar class="ma-3" size="60" tile>
          <v-img :src="item.thumbnail"></v-img>
        </v-avatar>
        <div>
          <v-card-subtitle v-text="item.title"></v-card-subtitle>
        </div>
      </div>
      <v-divider />
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SideWindow',
  components: {},
  props: {
    articleList: {
      type: Array,
      required: true,
    },
  },
})
</script>

<style></style>
