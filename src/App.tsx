import './App.css'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Projects from './components/Projects/Projects'

/** Affiche la page principale du portfolio de Thomas Vaugeois. */
function App() {

  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects />
      </main>
    </>
  )
}

export default App
