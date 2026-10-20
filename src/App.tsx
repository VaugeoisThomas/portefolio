import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

/** Affiche la page principale du portfolio de Thomas Vaugeois. */
function App() {

  return (
    <>
      <Header />
      <main>
        <div className="page-container">
          <Intro />
          <Projects />
        </div>
        <About />
        <div className="page-container">
          <Skills />
        </div>
      </main>
    </>
  )
}

export default App
