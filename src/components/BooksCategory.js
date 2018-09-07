import  React from 'react'
import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class BooksCategory extends React.Component{
    static proptypes ={
        books: Proptypes.array,
        bookTitle: Proptypes.string.isRequired,
        onChange: Proptypes.func.isRequired
    } 
    render(){
        const books=this.props.books
        return(

        )
    }
    
}
