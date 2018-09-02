import React from 'react'
import PropTypes from 'prop-types'

export default class Book extends React.Component{
    static propTypes ={
      onChange: PropTypes.func.isRequired,
      imageURL: PropTypes.string.isRequired,
      bookTitle: PropTypes.string.isRequired ,
      bookAuthor: PropTypes.arrayOf(Proptypes.string.isRequired),
      category: PropTypes.string.isRequired,

    }
    changeCategory = (e) => {
      this.props.onChange(e.target.value)
    }
    render(){
      const imageURL =this.props.imageURL.thumbnail
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
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{`${this.props.bookTitle}`}</div>
            {this.props.bookAuthor && this.props.bookAuthor.map((bookAuthor,id)=>(
              <div
                className="book-authors"
                key={id}
              >{`${bookAuthor}`}</div>
            ))}
          </div>
        </li>
      )
    }

}