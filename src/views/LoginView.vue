<template>
  <div
    class="0 mt-10 h-min w-[420px] items-center rounded-lg shadow-[0_2px_10px]"
  >
    <form
      className="p-5 rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      @submit.prevent="handleSubmit"
    >
      <p className="mb-5 text-[15px] leading-normal">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label className="text-[13px] leading-none mb-2.5 block" htmlFor="name">
          Name
        </label>
        <input
          className="rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] h-[35px] focus:shadow-[0_0_0_2px] outline-none text-slate-900"
          id="email"
          v-model="email"
          type="email"
          placeholder="exemplo@gmail.com"
        />
      </fieldset>
      <fieldset className="mb-[15px] w-full flex flex-col justify-start">
        <label
          className="text-[13px] leading-none mb-2.5 block"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="rounded px-2.5 text-[15px] leading-none shadow-[0_0_0_1px] h-[35px] focus:shadow-[0_0_0_2px] outline-none text-slate-900"
          id="password"
          v-model="password"
          type="password"
          placeholder="***********"
        />
      </fieldset>
      <div className="flex justify-end mt-5">
        <ButtonUi msg="Salvar" />
      </div>
    </form>
  </div>
</template>

<script>
import ButtonUi from '@/components/ui/ButtonUi.vue'
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    const handleSubmit = () => {
      console.log(email.value, password.value)
    }
    return { handleSubmit, email, password }
  },
  components: { ButtonUi },
}
</script>
