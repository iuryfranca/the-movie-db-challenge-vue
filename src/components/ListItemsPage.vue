<template>
  <div v-if="loadingData">
    <!-- <ListItemsPageSkeleton /> -->
    Carregando...
  </div>
  <div v-else class="flex w-full flex-row flex-wrap justify-between gap-6">
    <!-- <a
      v-for="(item, key) in moviesList"
      :key="key"
      :href="`/movies/${item.id}`"
      class="w-[inherit] sm:w-auto"
    >
      <CardMovie :card-movie="item" />
    </a> -->
    <div
      v-for="(item, key) in moviesList"
      :key="key"
      class="w-[inherit] sm:w-auto"
    >
      <CardMovie :card-movie="item" />
    </div>
  </div>

  <div class="flex items-center justify-center">
    <ButtonUi
      :msg="'Carregar mais filmes'"
      variant="outline"
      class="mt-8 border-2"
      @click="
        store.dispatch('getListMovies', {
          typeGet: 'popular',
          numberPageApi: numberPage++,
        })
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardMovie from '@/components/CardMovie.vue'
import ButtonUi from '@/components/ui/ButtonUi.vue'
import { mapGetters, useStore } from 'vuex'

export default defineComponent({
  name: 'ListItemsPages',
  components: { CardMovie, ButtonUi },
  data() {
    return {
      numberPage: 1,
    }
  },

  setup() {
    const store = useStore()

    return {
      store,
    }
  },

  async created() {
    this.store.dispatch('getListMovies', {
      typeGet: 'popular',
      numberPageApi: this.numberPage,
    })
    this.numberPage = this.numberPage + 1
  },

  computed: {
    ...mapGetters({
      moviesList: 'moviesList',
      loadingData: 'loadingData',
    }),
  },
})
</script>
