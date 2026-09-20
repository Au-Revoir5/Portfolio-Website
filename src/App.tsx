import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Experience'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          Built with React and TypeScript. Snow included.
        </div>
      </footer>
    </>
  )
}
