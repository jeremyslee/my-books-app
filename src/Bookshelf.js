import React from 'react';

function Bookshelf(props) {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{props.label}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.data}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;
