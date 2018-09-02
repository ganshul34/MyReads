import React from 'react'
import { Link } from 'react-router-dom'
import  PropTypes  from 'prop-types'

export default class BooksCategory extends React.Component{
    static propTypes = {
        books: PropTypes.arrayOf(PropTypes.shape ({
        bookTitle: PropTypes.string.isRequired ,
        bookAuthor: PropTypes.arrayOf(Proptypes.string.isRequired),
        bookId: PropTypes.string.isRequired,
        bookCategory: Proptypes.string.isRequired,
        imageURL: PropTypes.object.isRequired,
        })),
        onChange: PropTypes.string.isRequired
    }
}
bookCategories = {

}