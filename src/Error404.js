import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className='error-page'>
      <div className='error-page-container'>
        <div className='error-page-hgroup'>
          <h1 className='error-page-404'>404</h1>
          <h2 className='error-page-error'>
            ERROR!
            <span>Page Not Found</span>
          </h2>
        </div>
        <p className='error-page-not-found'>The Page You Requested Could Not Be Found</p>
        <p className='error-page-link'>
          <Link to='/'>« Home »</Link>
        </p>
      </div>
    </div>
  );
}

export default Error404;
