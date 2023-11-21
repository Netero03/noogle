import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { useResultContext } from '../contexts/ResultContextsProvider';
import {Loading} from './Loading';

export const Results = () => {
  const{results,isLoading,getResults,searchTerm}=useResultContext();
  const location = useLocation();

  console.log(results);
  console.log("hi");
  if(isLoading) return <Loading/>;

  console.log(location.pathname);

  switch (location.pathname) {
      case '/websearch':
        return 'SEARCH';
      
      case '/imagesearch':
        return 'images';
      
      case '/':
        return 'news';
      
      case '/videosearch':
        return 'videos';
      
      default:
        return 'ERROR!';
  }
}


