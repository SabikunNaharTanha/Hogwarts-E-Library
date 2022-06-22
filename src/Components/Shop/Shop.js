import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Shop.css';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])

    const handleAddToCart = (book) => {
        // console.log(book);
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div>
            <h1>Hogwarts E-Library</h1>
            <small>Quench Your Thirst Through Reading Books</small>

            <div className='shop-container'>
                <div className='Products-container'>
                    {
                        books.map(book => <Books key={book.id}
                            book={book}
                            handleAddToCart={handleAddToCart}
                        ></Books>)
                    }
                </div>
                <div className='Cart-container'>
                    <h1>Selected Books: {cart.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default Shop;