import Hero from './components/Hero'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-gray-50 flex justify-center'>
      <div className='bg-white w-[728px] shadow-sm'>
        <Navbar />
        <Hero />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
