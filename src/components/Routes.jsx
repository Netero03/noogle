import React from 'react';

import { Routes as MyRoutes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

// const paths = ['/websearch', '/imagesearch', '/','videosearch'];

export const Routes = () => {
  return (
    <div className='p-4'>
      
        <MyRoutes>
          <Route exact path="/" element={<Navigate  from='/' to="/websearch" />} />
          <Route exact path='/websearch' element={<Results />}  />
          <Route exact path='/imagesearch' element={<Results />}  />
          <Route exact path='/' element={<Results />}  />
          <Route exact path='videosearch' element={<Results />} />          
        </MyRoutes>
    </div>
  );
};
