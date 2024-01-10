import React, { useContext } from 'react'
import { ThemeContext } from '../Context/themContext'
import { BookContext } from '../Context/BookContext';

const BookList = () => {
  const { isLightTheme, dark, light } = useContext(ThemeContext);//useContext is using import context
  const theme = isLightTheme ? light : dark;
  const { books } = useContext(BookContext);
    return (
      <div className='book-list' style={{ background:theme.bg, color: theme.syntax}}>
        <ul>
          {
            books.map((book) => (
              <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>

            ))
          }
        </ul>
      </div>
    )
  }


export default BookList
