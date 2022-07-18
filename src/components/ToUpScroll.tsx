export const scrollToSection = (title: string) => {
  const target = document.getElementById(title) as HTMLDivElement
  globalThis.scrollTo({
    top: target.offsetTop,
    behavior: 'smooth'
  })
}
