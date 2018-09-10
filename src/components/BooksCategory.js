import  React from 'react'
import {Proptypes} from 'prop-types'
import Book from './Book'

export default class BooksCategory extends React.Component{
    static proptypes ={
        books: Proptypes.array,
        bookTitle: Proptypes.string.isRequired,
        onChange: Proptypes.func.isRequired
    } 
    render(){
        const books=this.props.books
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookTitle}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book,index)=>(
                  <Book
                    imageURL={book.imageLinks}
                    title={book.bookTitle}
                    author={book.bookAuthors}
                    key={``.concat(book.bookId,index)}
                    category={book.category}
                    onChange={(category)=>{
                    this.props.onChange(book.bookId,category)
                    }}
                  />
                ))}
              </ol>
            </div>
          </div>
        )
    }
    
}
