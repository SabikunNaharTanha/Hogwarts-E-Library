import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);

    // let name, picture;

    // for (const book of cart) {

    //     if (cart.length > 1) {
    //         picture = handleAddToCart(book.picture);
    //         name = handleAddToCart(book.name);
    //     }
    //     else {
    //         picture = book.picture;
    //         name = book.name;
    //     }
    // }
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

            <button className='cart-btn'>CHOOSE 1 FOR ME</button> <br /><br />
            <button className='cart-btn'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;