import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart, randomClick, DeleteBooks } = props;

    return (
        <div className='cart'>
            <h2>Selected Books: {cart.length}</h2>
            {
                cart.map(book =>
                    <div className='cart-products'>
                        <img src={book.picture} alt="" />
                        <h4> {book.name}</h4>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>

                    </div>)
            }

            <button onClick={() => randomClick(cart)} className='cart-btn'>CHOOSE 1 FOR ME</button> <br /><br />
            <button onClick={() => { DeleteBooks(cart) }} className='cart-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;