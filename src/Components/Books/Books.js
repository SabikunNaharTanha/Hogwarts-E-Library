import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Books.css';


const Books = (props) => {
    const { id, price, picture, name } = props.book;
    console.log(props.book);
    return (
        <div className='book'>
            <img src={picture} alt=''></img>
            <div className='Book-info'>

                <h3>{name}</h3>
                {/* <p>Product Id:{id}</p> */}
                <p>Price: $ {price}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Books;