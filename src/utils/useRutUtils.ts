import { validate, format } from '@fiquu/cl-rut'
export const useRutUtils = () => {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const dvChars = '0123456789K'

  function getRandomDv() {
    return dvChars.charAt(getRandomNumber(0, 10))
  }

  function createRutPrototype() {
    const digits = getRandomNumber(3000000, 27000000)
    const dv = getRandomDv()
    return `${digits}-${dv}`
  }

  function createRut() {
    let newRut = ''
    while (!validate(newRut)) {
      newRut = createRutPrototype()
    }
    return format(newRut)
  }

  class Rut {
    value: string
    isCopied: boolean

    constructor() {
      this.value = createRut()
      this.isCopied = false
    }
  }

  return { Rut }
}
