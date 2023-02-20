<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900"
  >
    <div
      class="container flex h-16 items-center sm:justify-between sm:space-x-0"
    >
      <a href="/movies">
        <!-- <button class="rounded-lg border-2 border-blue-900 p-1">
          <span class="flex text-xs font-semibold sm:hidden sm:text-sm">
            Vamos lá!
          </span>
          <span class="hidden text-xs font-semibold sm:flex sm:text-sm">
            Conheça essa aplicação!
          </span>
          <LogIn class="ml-2 h-4 w-4" />
        </button> -->
        <ButtonUi :msg="'Conheça essa aplicação!'" />
      </a>
      <!-- <MainNav /> -->
      <div class="flex flex-1 items-center justify-end gap-2">
        <pre
          class="hidden h-10 w-[520px] items-center justify-end space-x-2 overflow-hidden rounded-lg border border-slate-100 bg-slate-200 pr-2 pl-6 dark:border-slate-700 dark:bg-zinc-900 lg:flex"
        >
            <code class='font-mono text-sm font-semibold text-slate-900 dark:text-slate-50'>
              https://github.com/iuryfranca/the-movie-db-challenge-next-13
            </code>
            <a
              href='https://github.com/iuryfranca/the-movie-db-challenge-next-13'
              target='_blank'
              rel='no-referrer'
              aria-label='Acessar perfil github'
              class='h-4 w-4' 
            >
              <button class="text-slate-700 dark:text-slate-400">
                <ExternalLink />
              </button>
            </a>
          </pre>

        <nav class="flex items-center gap-3 space-x-1 px-2">
          <a :href="siteConfig.links.github" target="_blank" rel="noreferrer">
            <button>
              <Github
                height="1.25rem"
                width="1.25rem"
                class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              />
              <span class="sr-only">GitHub</span>
            </button>
          </a>
          <a :href="siteConfig.links.linkedin" target="_blank" rel="noreferrer">
            <button>
              <Linkedin
                height="1.25rem"
                width="1.25rem"
                fill="currentColor"
                class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
              />
              <span class="sr-only">Linkedin</span>
            </button>
          </a>
          <button @click="toggleDark()">
            <Moon
              v-if="!isDark"
              height="1.25rem"
              width="1.25rem"
              fill="currentColor"
              class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            />
            <Sun
              v-if="isDark"
              height="1.25rem"
              width="1.25rem"
              fill="currentColor"
              class="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            />
          </button>
          <!-- <ThemeToggle /> -->
          <!-- <AuthToggle user={ user ? { name: user.name, image: user.image, email:
          user.email, } : null } /> -->
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Linkedin, Github, LogIn, Sun, Moon } from 'lucide-vue-next'
import { siteConfig } from '@/config/site'
import ButtonUi from '@/components/ui/ButtonUi.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
