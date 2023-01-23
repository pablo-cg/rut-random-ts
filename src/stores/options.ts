import { defineStore } from 'pinia'
import { readonly, ref } from 'vue'

const optionsStore = () => {
  
  const minRut = ref(1000000)
  const maxRut = ref(27000000)

  const defaultMinRut = readonly(minRut)

  function setRutDefaultOptions() {
    minRut.value = defaultMinRut.value
    maxRut.value = 27000000
  }

  return {
    minRut,
    maxRut,
    defaultMinRut,
    setRutDefaultOptions
  }
}

export const useOptionsStore = defineStore('optionsStore', optionsStore, {
  persist: true
})
