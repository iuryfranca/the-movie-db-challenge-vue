<template>
  <div
    class="flex h-full min-h-[90vh] w-full flex-col items-center justify-center gap-8 sm:flex-row"
  >
    <div
      class="flex min-h-min max-w-[800px] flex-col items-start gap-2 sm:min-h-[300px]"
    >
      <h1
        class="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]"
      >
        Aqui é local onde você criará sua conta
      </h1>
      <span
        class="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl"
      >
        Com isso minha aplicação irá pegar os dados
        <br class="hidden sm:inline" />
        cadastrados e ao fazer login, será exibido os dados na pagina :)
      </span>
    </div>
    <div
      class="mt-10 h-min w-full items-center rounded-lg border-2 border-slate-900 dark:border-white sm:w-[420px]"
    >
      <form
        className="p-5 rounded-b-md outline-non"
        @submit.prevent="handleSubmit"
      >
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] h-[35px] focus:shadow-[0_0_0_2px] outline-none text-slate-900"
            id="name"
            v-model="displayName"
            type="text"
            placeholder="josé maria"
          />
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label className="text-[13px] leading-none mb-2.5 block" for="name">
            Email
          </label>
          <input
            className="rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] h-[35px] focus:shadow-[0_0_0_2px] outline-none text-slate-900"
            name="email"
            v-model="email"
            type="email"
            placeholder="exemplo@gmail.com"
            required
          />
        </fieldset>

        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 block"
            for="username"
          >
            Senha
          </label>
          <input
            className="rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] h-[35px] focus:shadow-[0_0_0_2px] outline-none text-slate-900"
            name="password"
            v-model="password"
            type="password"
            placeholder="***********"
            required
          />
        </fieldset>
        <div className="flex justify-end mt-5">
          <ButtonUi msg="Cadastrar" />
        </div>
        <div v-if="error">
          <span class="text-xs text-red-600">{{ error }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import ButtonUi from '@/components/ui/ButtonUi.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  components: { ButtonUi },
  setup() {
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value,
          displayName: displayName.value,
        })
        router.push('/login')
      } catch (err) {
        error.value = err.message
      }
    }

    return { handleSubmit, email, password, error }
  },
}
</script>
