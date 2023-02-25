<template>
  <HeaderPage :is-presentation="true" />

  <div class="container min-h-screen">
    <section class="grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div class="flex max-w-[980px] flex-col items-start gap-2">
        <h1
          class="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]"
        >
          Projeto criado para testar <br class="hidden sm:inline" />
          minhas habilidades Front-End
        </h1>
        <span
          class="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl"
        >
          O desafio consiste em consultar a
          <a
            href="https://www.themoviedb.org/documentation/api"
            target="_blank"
            rel="noreferrer"
            class="font-semibold underline underline-offset-4"
          >
            themoviedb API
          </a>
          <br class="hidden sm:inline" />
          e criar uma aplicação focada em desempenho e acessibilidade.
        </span>
      </div>
    </section>
    <section>
      <TechsList />
    </section>
  </div>
</template>

<script setup lang="ts">
import HeaderPage from '@/components/HeaderPage.vue'
import TechsList from '@/components/TechsList.vue'
</script>
