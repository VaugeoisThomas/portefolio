import './App.css'
import About from './components/About/About'
import Background from './components/Background/Background'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
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
          <Background />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
