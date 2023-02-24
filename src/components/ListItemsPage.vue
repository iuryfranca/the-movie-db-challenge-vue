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
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardMovie from '@/components/CardMovie.vue'
import ButtonUi from '@/components/ui/ButtonUi.vue'
import { mapGetters, useStore } from 'vuex'
import store from '@/store'

export default defineComponent({
  name: 'ListItemsPages',
  components: { CardMovie, ButtonUi },
  data() {
    return {
      numberPage: 1,
      typeGet: 'popular',
    }
  },

  setup() {
    const store = useStore()

    return {
      store,
    }
  },

  async mounted() {
    this.store.dispatch('getListMovies', {
      typeGet: this.typeGet,
      numberPageApi: this.numberPage,
    })
  },

  computed: {
    ...mapGetters({
      moviesList: 'moviesList',
      loadingData: 'loadingData',
    }),
  },

  methods: {
    //   async getMovies(typeGet: string = 'popular', numberPageApi: number = 1) {
    //     const pageNumberUrl = `&page=${numberPageApi}`
    //     this.numberPage = numberPageApi
    //     this.loadingData = true
    //     api
    //       .get(`/movie/popular?${apiKey}${pageNumberUrl}`)
    //       .then((res) => {
    //         this.moviesList =
    //           typeGet === 'discover'
    //             ? [...res.data.results]
    //             : [...this.moviesList, ...res.data.results]
    //       })
    //       .catch(() => new Error('Failed to fetch data'))
    //     this.loadingData = false
    //   },
  },
})
</script>
