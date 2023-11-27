import './App.css'
import Nav from './components/Nav';
import Hero from './pages/Hero'
import Projects from './pages/Projects';

function App() {
  

  return (
    <div className='App'>
      <Nav />
      <div className="scroll_container">
        <Hero />
        <Projects />
      </div>
    </div>
  )
}

export default App
