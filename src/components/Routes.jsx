import React from 'react';
import { Routes as MyRoutes, Route, Navigate } from 'react-router-dom';
import { Results } from './Results';

export const Routes = () => {
  return (
    <div className='p-4'>
        <MyRoutes>
          <Route exact path='/'  element={<Navigate to="/search" />} meta={{ relativePath: '/search' }} />
          <Route exact path='/search' element={<Results />} meta={{ relativePath: '/search' }} />  
          <Route exact path='/images' element={<Results />} meta={{ relativePath: '/search' }} />
          <Route exact path='/news' element={<Results />} meta={{ relativePath: '/search' }} />        
          <Route exact path='/videos' element={<Results />} meta={{ relativePath: '/search' }} />
        </MyRoutes>
    </div>
  );
};