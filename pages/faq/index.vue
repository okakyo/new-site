<template>
  <index-grid>
    <index-card page-title="部活の紹介">
      <v-layout>
        <v-row justify="center">
          <v-col cols="8">
            <v-form class="my-7">
              <v-text-field outlined name="title" label="件名" />
              <v-text-field outlined name="email" label="メールアドレス" />
              <v-textarea outlined name="message" label="お問い合わせ内容" />
              <v-btn block outlined>送信</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-layout>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'

export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
  },
})
</script>
