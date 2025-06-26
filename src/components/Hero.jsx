import photo from '/photo.jpeg'

function Hero() {
  return (
    <div className="text-gray-600 flex flex-col items-center justify-center">
      <img src={photo} alt="" className='h-12 w-12 rounded-full mb-3' />
      <h1 className='font-bold text-2xl text-gray-800'>Lea Tinoso</h1>
      <p className='text-sm'>Full-stack dev with front-end flair and back-end bias.</p>
    </div>
  )
}

export default Hero
