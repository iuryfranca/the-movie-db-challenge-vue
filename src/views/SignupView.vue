<template>
  <div class="flex h-full min-h-[90vh] w-full items-center justify-center">
    <div
      class="0 mt-10 h-min w-[420px] items-center rounded-lg shadow-[0_2px_10px]"
    >
      <form
        className="p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
        @submit.prevent="handleSubmit"
      >
        <p className="mb-5 text-[15px] leading-normal">
          Formulário para criação de conta
        </p>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label className="text-[13px] leading-none mb-2.5 block" for="name">
            Name
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
    const error = ref(null)

    const store = useStore()
    const router = useRouter()

    const handleSubmit = async () => {
      try {
        await store.dispatch('signup', {
          email: email.value,
          password: password.value,
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
