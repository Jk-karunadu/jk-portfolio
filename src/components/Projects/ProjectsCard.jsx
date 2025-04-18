import React from 'react'

const ProjectsCard = ({ title, main, demo, sourcecode }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal mb-4'>
            {title}
        </h3>
        <img src="" alt="" className='p-4'/>
        
        <ul className='px-4 list-disc text-sm md:text-md leading-tight py-2 space-y-2'>
            {main.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
        </ul>

        <div className='flex-grow' />
        
        <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 flex-wrap'>
            <a
              href={demo}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] block text-center'
            >
              Demo
            </a>
            <a
              href={sourcecode}
              target='_blank'
              rel='noopener noreferrer'
              className='text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] block text-center'
            >
              Source Code
            </a>
        </div>
    </div>
  )
}

export default ProjectsCard
