import React from 'react'
import {NavLink} from 'react-router-dom'

const links=[
    {url:'/web',text:'All'},
    {url:'/image',text:'image'}
]

export const Links = () => {
  return (
    <div className='flex sm:justify-aroud justify-between items-center mt-4 '>
        {links.map(({url,text})=>(
            <NavLink to={url} className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0">
                {text}
            </NavLink>
        ))}
        
    </div>
  )
}
