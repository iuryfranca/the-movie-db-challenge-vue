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
      <!-- <CardMovie
        :id="item.id"
        :overview="item.overview"
        :poster_path="item.poster_path"
        :release_date="item.release_date"
        :title="item.title"
        :vote_average="item.vote_average"
      /> -->

      <CardMovie :card-movie="item" />
    </a>
  </div>

  <div class="flex items-center justify-center">
    <button
      v-if="loadingData"
      class="mt-8 border-2 border-slate-900 dark:border-slate-300"
    >
      <!-- <Loader2 class="mr-2 h-4 w-4 animate-spin" /> -->
      Carregar mais filmes
    </button>
    <button
      v-else
      variant="outline"
      class="mt-8 border-2 border-slate-900 dark:border-slate-300"
    >
      Carregar mais filmes
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from '@/lib/axios'
import type { MoviesProps } from '@/types/movies'
import CardMovie from '@/components/CardMovie.vue'

// const apiKey = import.meta.env.VITE_PUBLIC_API_KEY_V3

export default defineComponent({
  name: 'ListItemsPages',
  components: { CardMovie },
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
        .get(
          `/movie/popular?api_key=2b714e82ab5108ff8b963154afd167ea&language=pt-BR${pageNumberUrl}`
        )
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
