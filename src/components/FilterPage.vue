<template>
  <div
    className="flex flex-col justify-center gap-4 rounded-lg border-2 border-slate-900 p-4 shadow-md dark:border-slate-400 "
  >
    <div class="border-b border-b-slate-200 dark:border-b-slate-700">
      <button
        class="flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
        @click="handleCollapseDropdown"
      >
        Ordenar
        <ChevronDownIcon className="transition-transform duration-200" />
      </button>
      <Collapse
        class="overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
        :when="isOpen"
      >
        <!-- <DropdownMenu>
                <DropdownMenuTrigger className='group' asChild>
                  <Button
                    variant='outline'
                    className='w-full justify-between border-2 border-slate-900 dark:border-slate-400 '
                  >
                    selecione
                    <ChevronDown
                      className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
                      aria-hidden='true'
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-52'>
                  <DropdownMenuGroup>
                    <DropdownMenuItem></DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu> -->
        <p className="py-2">Ordenar resultados por</p>
        Dropdown aqui
      </Collapse>
    </div>
    <div class="border-b border-b-slate-200 dark:border-b-slate-700">
      <button
        class="flex w-full flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180"
        @click="handleCollapse"
      >
        Gêneros
        <ChevronDownIcon className="transition-transform duration-200" />
      </button>

      <Collapse
        :when="isOpenGenre"
        class="overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      >
        <div>
          <p className="py-2 mb-4">Selecione os gêneros</p>
          <div className="flex flex-row flex-wrap gap-2 p-2">
            <button
              v-for="genre in genres"
              :key="genre.id"
              class="h-9 rounded-md border border-slate-200 px-2 hover:bg-slate-700 dark:border-slate-700 dark:text-slate-100"
              :class="genreSelected.some((genreId: number) => genreId === genre.id) ? 'bg-slate-500' : 'bg-transparent'"
              @click="changeFilterGenre(genre.id)"
            >
              {{ genre.name }}
            </button>
          </div>
        </div>
      </Collapse>
    </div>
    <div>
      <ButtonUi
        class="w-full"
        :msg="'Pesquisar'"
        variant="subtle"
        @click="
          store.dispatch('getListMovies', {
            typeGet: 'discover',
            numberPageApi: 1,
          })
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import ButtonUi from '@/components/ui/ButtonUi.vue'
import { Collapse } from 'vue-collapsed'
import { ChevronDownIcon } from 'lucide-vue-next'

import { defineComponent, ref } from 'vue'
import { mapGetters, useStore } from 'vuex'
import store from '@/store'

export default defineComponent({
  name: 'FilterPage',
  components: { ButtonUi, Collapse, ChevronDownIcon },

  setup() {
    const store = useStore()
    const isOpenGenre = ref(false)
    const isOpen = ref(false)

    return {
      store,
      isOpen,
      isOpenGenre,
    }
  },

  async mounted() {
    store.dispatch('getGenresMovies')
  },

  computed: {
    ...mapGetters({
      genres: 'genres',
      genreSelected: 'genreSelected',
    }),
  },

  methods: {
    handleCollapse() {
      this.isOpenGenre = !this.isOpenGenre
    },
    handleCollapseDropdown() {
      this.isOpen = !this.isOpen
    },

    changeFilterGenre(id: number) {
      if (this.genreSelected.length >= 0) {
        if (this.genreSelected.some((genreId: number) => genreId === id)) {
          const tempNewGenre = this.genreSelected
          tempNewGenre.splice(this.genreSelected.indexOf(id), 1)

          store.commit('setGenreSelected', [...tempNewGenre])
        } else {
          store.commit('setGenreSelected', [...this.genreSelected, id])
        }
      }
    },
  },
})
</script>

<!-- <script setup lang="ts">
import ButtonUi from '@/components/ui/ButtonUi.vue'

import { ChevronDownIcon, X } from 'lucide-vue-next'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { Collapse } from 'vue-collapsed'

const isOpenGenre = ref(false)
const isOpen = ref(false)
const store = useStore()
const genres = computed(() => store.getters.genres)

let genreSelected: number[] = []

let colorButtonFilters: string = 'bg-transparent'

const changeFilterGenre = (id: number) => {
  if (genreSelected.length >= 0) {
    if (genreSelected.some((genreId: number) => genreId === id)) {
      const tempNewGenre = genreSelected
      tempNewGenre.splice(genreSelected.indexOf(id), 1)

      genreSelected = [...tempNewGenre]
    } else {
      genreSelected = [...genreSelected, id]
    }
  }

  changeColorButton(id)
}

function handleCollapse() {
  isOpenGenre.value = !isOpenGenre.value
}
function handleCollapseDropdown() {
  isOpen.value = !isOpen.value
}

function changeColorButton(id: number) {
  colorButtonFilters = genreSelected.some((genreId: number) => genreId === id)
    ? 'bg-slate-500'
    : 'bg-transparent'
}

onMounted(() => {
  store.dispatch('getGenresMovies')
})
</script> -->
