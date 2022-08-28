export const useEmailUtils = () => {
  const domainCharPool = 'abcdefghijklmnopqrstuvwxyz'
  const charPool = 'abcdefghijklmnopqrstuvwxyz0123456789'

  function generateDomain() {
    let domain = ''
    for (let i = 0; i < 2; i++) {
      const charIndex = Math.floor(Math.random() * domainCharPool.length)
      domain += domainCharPool.charAt(charIndex)
    }
    return domain
  }

  function generateString(length: number) {
    let text = ''
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * charPool.length)
      text += charPool.charAt(charIndex)
    }
    return text
  }

  function createEmail() {
    const user = generateString(5)
    const server = generateString(4)
    const domain = generateDomain()
    return `${user}@${server}.${domain}`
  }

  class Email {
    value: string
    isCopied: boolean

    constructor() {
      this.value = createEmail()
      this.isCopied = false
    }
  }
  return { Email }
}
