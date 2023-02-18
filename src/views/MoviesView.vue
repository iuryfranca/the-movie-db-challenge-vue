<template>
  <div>
    <p
      class="pt-3 pb-3 text-2xl font-extrabold leading-tight tracking-tighter md:py-5 md:text-3xl lg:text-4xl lg:leading-[1.1]"
    >
      Filmes populares
    </p>
    <div
      class="flex flex-col items-start gap-6 md:grid md:grid-cols-[250px_1fr]"
    >
      <section class="grid w-full items-center gap-6 pt-6 md:py-5">
        <!-- <FilterPage /> -->
        Filter
      </section>
      <section class="flex w-full flex-col pt-6 pb-8 md:py-5">
        <ListItemsPage />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItemsPage from '@/components/ListItemsPage.vue'

export default defineComponent({
  name: 'MoviesView',
  components: { ListItemsPage },
  setup() {
    return {
      name: 'iury',
    }
  },
})
</script>
