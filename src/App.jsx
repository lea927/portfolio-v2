import Hero from './components/Hero'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import WakaTime from './components/WakaTime'
import Footer from './components/Footer'
import ThemeProvider from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className='bg-gray-50 dark:bg-gray-900 flex justify-center transition-colors duration-300'>
        <div className='bg-white dark:bg-gray-800 w-[728px] shadow-sm transition-colors duration-300'>
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <WakaTime />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
