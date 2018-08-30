import React  from 'react'
import {Router} from ''
import * as BooksAPI from './BooksAPI'
import './App.css'

export default class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books:[],
    //showSearchPage: false
  }
  componentDidMount(){
      this.getAllBooks()
    }
  

    getAllBooks(){
      BooksAPI.getAll()
      .then(() => {
        this.setState((books) =>({
           books 
        })
        )
      })  
    }
    
    onChange(id,category){
      BooksAPI.update({id},category)
      .then(() =>{
        this.getAllBooks()
      })

     }
      render(){
        return(
         <div className='app'>
           <Router exact path='/' render={() =>
           <ListBooks
           books={this.state.books}
           onChange={(id,category) => {
             this.changeCategory(id,category)
           }}
           /> 
          }
            
            
           
           />

           <Router path='/search' render={({ history })=> (
              <SearchBooks
              books={this.state.books}
              //onChange
              onChange={(id,category) => {
                this.changeCategory(id,category)
                history.push('/')
              }}
              />
           )}/>
           </div>
          
        )
      }
    }