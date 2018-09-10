import React  from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'
import BooksCategory from './components/BooksCategory'

export default class BooksApp extends React.Component {
  state = {

    books:[],

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