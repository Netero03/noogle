import React from 'react';

import { Routes as MyRoutes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

// const paths = ['/websearch', '/imagesearch', '/','videosearch'];

export const Routes = () => {
  return (
    <div className='p-4'>    
        <MyRoutes>
          <Route exact path="/" element={<Navigate  from='/' to="/web" />} />
          <Route exact path='/web' element={<Results />}  />
          <Route exact path='/image' element={<Results />}  />
          <Route exact path='/' element={<Results />}  />
          <Route exact path='videosearch' element={<Results />} />          
        </MyRoutes>
    </div>
  );
};
