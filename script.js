const menuButton = document.querySelector('.menu-button')
const navigation = document.querySelector('.main-nav')

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open')
  menuButton.setAttribute('aria-expanded', String(isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation')
})

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open')
    menuButton?.setAttribute('aria-expanded', 'false')
    menuButton?.setAttribute('aria-label', 'Open navigation')
  })
})

document.querySelectorAll('.copy-citation').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.getElementById(button.dataset.copyTarget)
    if (!target) return

    try {
      if (!navigator.clipboard) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(target.textContent.trim())
      button.textContent = 'Copied'
      window.setTimeout(() => { button.textContent = 'Copy citation' }, 1800)
    } catch {
      button.textContent = 'Select text to copy'
      window.setTimeout(() => { button.textContent = 'Copy citation' }, 2200)
    }
  })
})
