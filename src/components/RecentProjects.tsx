import { projects } from 'data'
import React from 'react'
import { PinContainer } from './ui/3d-Pin'
import dynamic from 'next/dynamic'

const RecentProjects = () => {
  return (
    <div className=' py-20'>
      <h1 className=' heading'>
        A small selection of {' '}
        <span className=' text-purple'>
            Recent Projects 
        </span>
      </h1>
      <div className=' flex flex-wrap items-center justify-center p-4 gap-4 mt-10'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className=' lg:min-h-[30rem] h-[25rem] flex items-center justify-center sm:w-80 w-[75vw]'>
               <PinContainer title={title} href={link}>
                  <div>

                  </div>
               </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
