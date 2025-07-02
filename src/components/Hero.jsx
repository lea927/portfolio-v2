import photo from '/photo.jpeg'
import Button from './Button'
import StatusButton from './StatusButton'

function Hero() {
  return (
    <div className="text-gray-600 dark:text-gray-300 flex flex-col items-center justify-center transition-colors duration-300">
      <img src={photo} alt="" className='h-12 w-12 rounded-full mb-3' />
      <h1 className='font-bold text-2xl text-gray-800 dark:text-gray-100 transition-colors duration-300'>Lea Tinoso</h1>
      <p className='text-sm'>Full-stack dev with front-end flair and back-end bias.</p>
      <div className='m-4 space-x-3'>
        <Button text="Get in touch" link="mailto:lealyn.tinoso@gmail.com" />
        <StatusButton />
      </div>
    </div>
  )
}

export default Hero
