<template>
  <SkeletonTheme
    color="rgb(203 213 225)"
    highlight="rgb(201 201 201)"
    class="w-full sm:w-auto"
  >
    <div className="flex w-full sm:w-[185px] sm:flex-col">
      <Skeleton
        className="h-36 w-36 sm:h-[278px] sm:w-full sm:rounded-b-none sm:rounded-t-md -mt-1 -mr-1"
      />
      <div
        className="relative flex h-36 w-full flex-col items-center justify-between gap-2 rounded-b-md rounded-r-md rounded-l-none bg-slate-900 p-2 pt-5 dark:bg-white sm:h-24 sm:rounded-t-none sm:rounded-b-md sm:pt-8"
      >
        <div
          className="absolute left-1 -top-6 z-20 hidden h-11 w-11 animate-pulse rounded-full bg-slate-100 dark:bg-slate-300 sm:flex"
        />
        <div
          className="absolute  left-1 -top-6 z-10 hidden h-11 w-11 rounded-full bg-slate-50 sm:flex"
        />
        <div className="flex h-full w-full flex-col gap-2">
          <Skeleton className="h-6 rounded-sm" />
          <Skeleton className="h-4 rounded-sm" />
        </div>
        <Skeleton
          className="flex h-24 rounded-sm dark:bg-slate-400 sm:hidden"
        />
      </div>
    </div>
  </SkeletonTheme>
</template>

<script setup lang="ts">
import { Skeleton, SkeletonTheme } from 'vue-loading-skeleton'
import 'vue-loading-skeleton/dist/style.css'
</script>
