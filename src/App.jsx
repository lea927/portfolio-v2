import Hero from './components/Hero'
import Experience from './components/Experience'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-gray-50 flex justify-center'>
      <div className='bg-white w-[728px] h-screen shadow-sm'>
        <Navbar />
        <Hero />
        <Experience />
      </div>
    </div>
  )
}

export default App
