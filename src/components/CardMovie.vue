<template>
  <div
    class="flex w-full text-slate-50 dark:text-slate-900 sm:w-[185px] sm:flex-col"
  >
    <div
      class="md:first-letter relative inline-block h-36 w-36 overflow-hidden sm:h-[278px] sm:w-full"
    >
      <img
        :src="srcImage"
        :alt="cardMovie?.title"
        class="w-full rounded-b-none rounded-r-none rounded-l-md sm:rounded-b-none sm:rounded-t-md"
      />
    </div>
    <div
      class="relative h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-2 dark:bg-white sm:h-24 sm:rounded-t-none sm:rounded-b-md sm:pt-4"
    >
      <div class="flex h-full w-full flex-col gap-1 sm:justify-between">
        <p class="whitespace-wrap line-clamp-2 text-ellipsis text-sm font-bold">
          {{ cardMovie?.title }}
        </p>
        <p class="text-xs text-slate-300 dark:text-slate-600">
          {{ releaseDateFormatted }}
        </p>
      </div>
      <div class="flex h-24 w-full justify-start rounded-sm pb-2 sm:hidden">
        <span class="whitespace-wrap line-clamp-2 text-ellipsis text-sm">
          {{ cardMovie?.overview || 'Sem descrição.' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatShortDate } from '@/lib/utils'
import type { MoviesProps } from '@/types/movies'
import type { PropType } from 'vue'

// eslint-disable-next-line vue/no-setup-props-destructure
const { cardMovie } = defineProps({
  cardMovie: {
    type: Object as PropType<MoviesProps>,
    required: true,
  },
})

const srcImage = 'https://image.tmdb.org/t/p/w185' + cardMovie?.poster_path
const releaseDateFormatted = formatShortDate(cardMovie?.release_date || '')
</script>
