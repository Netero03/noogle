import React from 'react';

import { Routes as MyRoutes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

const paths = ['/websearch', '/imagesearch', '/','videosearch'];

export const Routes = () => {
  return (
    <div className='p-4'>
        <MyRoutes>
          <Route exact path="/" element={<Navigate  from='/' to="/websearch" />} />
          <Route exact path={paths} element={<Results />} />
          <Route exact path='/search' element={<Results />}  />
          <Route exact path='/images' element={<Results />}  />
          <Route exact path='/news' element={<Results />}  />
          <Route exact path='videos' element={<Results />} />          
        </MyRoutes>
    </div>
  );
};
