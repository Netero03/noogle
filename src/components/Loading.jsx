import React from 'react'
import {Triangle as Loader} from 'react-loader-spinner' 

export const Loading = () => {
  return (
    <div className='flex justify-center items-center'>
        <Loader 
          type='puff' 
          color='#4fa94d'
          height={550} 
          width={80} a
          riaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}/>
    </div>
  )
}

