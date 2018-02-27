import React from 'react';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
      <div>
        <div className='hgroup'>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <h2>
            ERROR!
            <span>Page Not Found</span>
          </h2>
        </div>
        <p>The Page You Requested Could Not Be Found</p>
        <p>
          <Link to='/'>« Home »</Link>
        </p>
      </div>
    </div>
  );
}

export default Error404;
