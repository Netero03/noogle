import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextsProvider';
import {Loading} from './Loading';


export const Results = () => {
  const{results,isLoading,getResults,searchTerm}=useResultContext();
  const location = useLocation();

  console.log(results);
  
  useEffect(()=>{
        getResults(`${location.pathname}?q=${searchTerm}&num=5`);  
    }
    
  ,[searchTerm,location.pathname]);

  if(isLoading) return <Loading/>;
  
  console.log(location.pathname);
  console.log(results);
  switch (location.pathname) {
      case '/web':
        return (
        <div className='flex flex-wrap justify-between space-y-6 sm:px-56 '>
          {results?.items && results.items.map(({ link, title }, index) => (
            <div key={index} className='md:w-2/5 w-full'>
                <a href={link} target="_blank" rel="noreferrer">
                    <p className='text-sm'>
                        {link && link.length > 30 ? link.substring(0, 30) : link}
                    </p>
                    <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                        {title}
                    </p>
                </a>
            </div>
          ))} 
          </div>
        );
      
      case '/image':
        return (
          <div className='flex flex-wrap justify-center items-center'>
            {results?.items?.map(({originalImageUrl,contextLink,title},index)=>(
            <div key={index} className='md:w-2/5 w-full'>
              {originalImageUrl && contextLink && title &&( 
              <a className='sm:p-3 p-5' href={contextLink} key={index} target="_blank" rel="noreferrer">
                <img className='md:w-2/5 w-full' src={originalImageUrl} alt={title} loading="lazy"/>
                <p className='w-36 break-words text-sm mt-2'>
                  {title}
                </p>
              </a>
            )}
            </div>
            ))}
          </div>
        );
      
      case '/news':
        return 'news';
      
      case '/videosearch':
        return 'videos';
      
      default:
        return 'ERROR!';
  }
}


