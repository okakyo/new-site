<template>
  <index-grid>
    <index-card page-title="お問い合わせ">
      <v-layout>
        <v-row justify="center">
          <v-col cols="8">
            <v-form
              class="my-7"
              netlify
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <v-text-field outlined name="title" type="input" label="件名" />
              <v-text-field
                outlined
                name="email"
                type="email"
                label="メールアドレス"
              />
              <v-textarea
                outlined
                name="message"
                type="text"
                label="お問い合わせ内容"
              />
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
