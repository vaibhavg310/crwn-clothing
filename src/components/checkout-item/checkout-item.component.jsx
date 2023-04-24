// import { useContext } from 'react';
// import { CartContext } from '../../contexts/cart.context';
import {useDispatch,} from 'react-redux';
import {addItemToCart, removeItemFromCart, clearItemFromCart} from '../../store/cart/cart.reducer';
import { selectCartItems } from '../../store/cart/cart.selector';

import './checkout-item.styles.scss'

const CheckoutItem = ({cartItem}) => {
    const{name, price, quantity, imageUrl} = cartItem;
    
   
    const dispatch = useDispatch();

   // const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src ={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>   
                &#10094;
                </div>
              <span>{quantity}</span>  
                <div className='arrow' onClick={addItemHandler}>   
                &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div > 
    )

}

export default CheckoutItem;