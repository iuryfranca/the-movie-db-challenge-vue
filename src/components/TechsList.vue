<template>
  <span
    class="text-md md:text-1xl font-bold leading-tight tracking-tighter lg:text-2xl lg:leading-[1.1]"
  >
    techs utilizadas
  </span>
  <div
    class="grid max-w-[980px] grid-cols-1 items-center justify-items-center gap-8 xs:justify-items-start sm:grid-cols-2"
  >
    <div v-for="(tech, index) in siteTechs" :key="index">
      <a
        :href="tech.link"
        target="_blank"
        class="flex h-40 w-80 items-center"
        key="{index}"
      >
        <Tilt parallax="true">
          <div
            class="z-50 w-80 rounded-md border border-slate-200 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-slate-800 dark:bg-slate-800"
          >
            <div class="flex justify-between space-x-4">
              <img
                :src="tech.image"
                class="h-7 w-7 rounded-full"
                alt="Logos techs"
              />
              <div class="w-56 space-y-1">
                <span class="text-sm font-semibold">{{ tech.name }}</span>
                <br />
                <span class="text-sm">{{ tech.description }}</span>
              </div>
              <ExternalLink class="h-4 w-4" />
            </div>
          </div>
        </Tilt>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ExternalLink } from 'lucide-vue-next'
import { siteTechs } from '@/config/site.ts'
import Tilt from 'vanilla-tilt-vue'
</script>
