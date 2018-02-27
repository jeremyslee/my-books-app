import React from 'react';

function Book(props) {
  return (
    <li key={props.id}>
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
               style={{ width: 128, height: 192, backgroundImage: `url("${props.url}")`}}>
          </div>
          <div className='book-shelf-changer'>
            <select id={props.id}
                    value={props.shelf === undefined ? 'none' : props.shelf}
                    onChange={props.changeHandler}>
              <option disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{props.title}</div>
        <div className='book-authors'>{props.authors}</div>
      </div>
    </li>
  );
}

export default Book;
