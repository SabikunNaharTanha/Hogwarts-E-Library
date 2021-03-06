import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
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
        // selecting not more than 4 books
        // if (cart.length < 4) {
        //     setCart(newCart);
        // }
    }

    // Randomly Choosing 1 book
    const randomClick = (cart) => {
        const randomNum = cart[Math.floor(Math.random() * cart.length)];
        setCart([randomNum]);
    }

    //removing all selected books from the cart
    const DeleteBooks = (cart) => {
        const deleteSelectedBooks = (cart.splice(0, cart.length));
        setCart([deleteSelectedBooks]);

    }

    return (
        <div>
            <h1 className='title'>Hogwarts E-Library</h1>
            <small className='title'>Quench Your Thirst Through Reading Books</small>

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
                    <Cart
                        cart={cart}
                        handleAddToCart={handleAddToCart}
                        randomClick={randomClick}
                        DeleteBooks={DeleteBooks}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;