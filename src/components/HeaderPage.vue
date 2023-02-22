<template>
  <header
    class="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900"
  >
    <div
      class="container flex h-16 items-center sm:justify-between sm:space-x-0"
    >
      <a v-if="props.isPresentation" href="/movies">
        <ButtonUi :msg="'Vamos lá!'" />
      </a>
      <a v-else href="/">
        <Home />
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

        <nav class="flex items-center gap-3 space-x-1 px-6">
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

          <!-- Botão para Login/register -->
          <div class="relative">
            <button
              class="rounded-s peer flex cursor-default select-none items-center text-sm font-medium text-slate-700 outline-none transition-all duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
            >
              <LogIn />
            </button>
            <div
              class="invisible absolute top-5 z-10 rounded-lg border-2 border-slate-700 opacity-0 transition-all duration-300 after:absolute after:top-0 after:-z-20 after:inline-block after:h-full after:w-full after:rounded-lg after:bg-white/40 peer-focus:visible peer-focus:top-12 peer-focus:opacity-100"
            >
              <div>
                <ul
                  class="z-50 overflow-hidden rounded-md p-1 text-slate-700 animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400"
                >
                  <a
                    class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none hover:bg-slate-100 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                    href="/login"
                  >
                    Login
                  </a>
                  <a
                    class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none hover:bg-slate-100 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                    href="/register"
                  >
                    Registro
                  </a>
                  <button
                    class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none hover:bg-slate-100 focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-slate-700 dark:focus:bg-slate-700"
                    @click="handleLogout()"
                  >
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          </div>

          <!-- <AuthToggle user={ user ? { name: user.name, image: user.image, email:
          user.email, } : null } /> -->
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import {
  Linkedin,
  Github,
  LogIn,
  Sun,
  Moon,
  ExternalLink,
  Home,
} from 'lucide-vue-next'
import { siteConfig } from '@/config/site'
import { useStore } from 'vuex'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

import ButtonUi from '@/components/ui/ButtonUi.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const store = useStore()
const router = useRouter()

const props = defineProps({
  isPresentation: {
    type: Boolean,
    required: true,
  },
})

const handleLogout = () => {
  store.dispatch('logout')
  router.push('/')
}
</script>
