import React, { Component } from 'react'
import './books.css'
import book1 from '../../assets/books/book1.png'
import book2 from '../../assets/books/book2.png'
import book3 from '../../assets/books/book3.png'
import book4 from '../../assets/books/book4.png'
import book5 from '../../assets/books/book5.png'
import book6 from '../../assets/books/book6.png'
import book7 from '../../assets/books/book7.png'
import book8 from '../../assets/books/book8.png'
import book9 from '../../assets/books/book9.png'
import book10 from '../../assets/books/book10.png'
import book11 from '../../assets/books/book11.png'
import book12 from '../../assets/books/book12.png'
class Books extends Component {
    render() {
        return (
            <div>
                <div className="booksContainer">
                <h2 className="bookHeader">The best books and audiobooks are waiting for you</h2>
                <div className="bookBox">
                    <div className="bookImg">
                        <img src={book1}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book2}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book3}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book4}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book5}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book6}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book7}></img>
                    </div>
                    <div className="bookImg"> 
                        <img src={book8}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book9}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book10}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book11}></img>
                    </div>
                    <div className="bookImg">
                        <img src={book12}></img>
                    </div>  

                </div>
                <button className="bookButton">
                    Read free for 30 days
                </button>
                <span className="bookfooter">Cancel anytime</span>
            </div></div>
        )
    }
}

export default Books
