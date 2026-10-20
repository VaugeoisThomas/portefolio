import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'

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
      </main>
    </>
  )
}

export default App
