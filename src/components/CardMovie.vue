<template>
  <div
    className="flex w-full text-slate-50 dark:text-slate-900 sm:w-[185px] sm:flex-col"
  >
    <div
      className="overflow-hidden inline-block md:first-letter relative h-36 w-36 sm:h-[278px] sm:w-full"
    >
      <img
        :src="srcImage"
        :alt="cardMovie?.title"
        className="rounded-b-none rounded-r-none rounded-l-md sm:rounded-b-none sm:rounded-t-md w-full"
      />
    </div>
    <div
      className="relative flex h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-2 dark:bg-white sm:h-24 sm:rounded-t-none sm:rounded-b-md sm:pt-4"
    >
      <div className="flex h-full w-full flex-col gap-1 sm:justify-between">
        <p
          className="whitespace-wrap text-ellipsis text-sm font-bold line-clamp-2"
        >
          {{ cardMovie?.title }}
        </p>
        <p className="text-xs text-slate-300 dark:text-slate-600">
          {{ releaseDateFormatted }}
        </p>
      </div>
      <div className="flex h-24 w-full justify-start rounded-sm pb-2 sm:hidden">
        <span className="whitespace-wrap text-ellipsis text-sm line-clamp-2">
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
