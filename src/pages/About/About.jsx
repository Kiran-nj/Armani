import React from 'react'

const About = () => {
  return (
    <div className='h-screen'>
      <header className='h-28 bg-gray-300 text-2xl font-bold flex flex-col gap-1 justify-center items-center' style={{ backgroundImage: 'url(/src/assets/images/aboutUsImg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <span>About us</span>
        <p className='text-sm font-extralight'>House of used cars</p>
      </header>
      <div className='flex-1 bg-white h-full p-5'>
        <div className='text-black flex justify-center'>
          <h2 className='text-lg md:text-xl font-bold'>ABOUT DIRECTORS</h2>
        </div>
      </div>
    </div>
  )
}

export default About