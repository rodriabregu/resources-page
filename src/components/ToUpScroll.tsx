export const scrollToSection = (title: string) =>
  (document.getElementById(title) as HTMLDivElement).scrollIntoView({
    behavior: 'smooth'
  })
