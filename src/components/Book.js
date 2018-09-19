import React from 'react'
import { PropTypes }  from 'prop-types'

export default class Book extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.array,
    category: PropTypes.string.isRequired,
    imageURL: PropTypes.object.isRequired,
    onCategoryChange: PropTypes.func.isRequired
  }

  changeCategory = (e) => {
    this.props.onCategoryChange(e.target.value)
  }

  render(){
    const imageURL = this.props.imageURL.thumbnail 
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${imageURL}")`
              }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.changeCategory} value={this.props.category}>
                <option value="none" disabled>Move to...</option>
                <option value="none" defaultValue>None</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
               
                
              </select>
            </div>
          </div>
          <div className="book-title">{`${this.props.title}`}</div>
          {this.props.author && this.props.author.map((author,index)=>(
            <div
              className="book-authors"
              key={index}
            >{`${author}`}</div>
          ))}
        </div>
      </li>
    )
  }
}
