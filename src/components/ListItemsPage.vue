<template>
  <div v-if="loadingData">
    <!-- <ListItemsPageSkeleton /> -->
    Carregando...
  </div>
  <div v-else class="flex w-full flex-row flex-wrap justify-between gap-6">
    <a
      v-for="(item, key) in moviesList"
      :key="key"
      :href="`/movies/${item.id}`"
    >
      <CardMovie :card-movie="item" />
    </a>
  </div>

  <div class="flex items-center justify-center">
    <ButtonUi
      :msg="'Carregar mais filmes'"
      variant="outline"
      class="mt-8 border-2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from '@/lib/axios'
import type { MoviesProps } from '@/types/movies'
import CardMovie from '@/components/CardMovie.vue'
import ButtonUi from '@/components/ui/ButtonUi.vue'

const apiKey = import.meta.env.VITE_PUBLIC_API_KEY_V3

export default defineComponent({
  name: 'ListItemsPages',
  components: { CardMovie, ButtonUi },
  data() {
    return {
      loadingData: true,
      moviesList: [] as MoviesProps[],
      numberPage: 1,
    }
  },

  mounted() {
    this.getMovies()
  },

  methods: {
    async getMovies(typeGet: string = 'popular', numberPageApi: number = 1) {
      const pageNumberUrl = `&page=${numberPageApi}`

      this.numberPage = numberPageApi
      this.loadingData = true

      api
        .get(`/movie/popular?${apiKey}${pageNumberUrl}`)
        .then((res) => {
          this.moviesList =
            typeGet === 'discover'
              ? [...res.data.results]
              : [...this.moviesList, ...res.data.results]
        })
        .catch(() => new Error('Failed to fetch data'))

      this.loadingData = false
    },
  },
})
</script>
