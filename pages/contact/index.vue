<template>
  <index-grid>
    <index-card :url-lists="urlLists" page-title="お問い合わせ">
      <v-layout>
        <v-row justify="center">
          <v-col cols="8" lg="6">
            <form
              class="my-7"
              netlify
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
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
              <v-btn type="submit" block outlined>送信</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-layout>
    </index-card>
  </index-grid>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import IndexGrid from '@/components/molecules/girds/IndexGrid.vue'
import IndexCard from '@/components/organisms/cards/IndexCard.vue'

export default defineComponent({
  name: 'IntroductionPages',
  components: {
    IndexGrid,
    IndexCard,
  },
  setup() {
    const urlLists = ref([
      {
        text: 'Top',
        href: '/',
        disabled: false,
      },
      {
        text: 'Contact',
        href: '/contact',
        disabled: true,
      },
    ])
    return {
      urlLists,
    }
  },
})
</script>
