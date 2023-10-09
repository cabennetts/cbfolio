import About from '@/components/home/About'
import Intro from '@/components/home/Intro'
import Skills from '@/components/home/Skills'
import ContactForm from '@/components/shared/ContactForm'

export default function Home() {
  return (
    <main className="content__main">
      <Intro />
      <About />
      <Skills />
      <ContactForm />
    </main>
  )
}
