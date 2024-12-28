import React from 'react'
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/features/cartSlice';
import { countIncreament, countDecreament } from '../redux/features/cartSlice';

function Cart() {

    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);

    const handleDelete = (id) => {
        dispatch(removeFromCart(id));
    }

    const handleIncreament = (id) => {
        dispatch(countIncreament(id));
    }

    const handleDecreament = (id) => {
        dispatch(countDecreament(id));
    }

    return (
        <>
            <Navbar />
            <div className="cart-wrapper section-space-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cart-header">
                                <h2>Shopping Cart</h2>
                            </div>
                            {
                                items.length > 0 ? <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>SubTotal</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            items.map((item) => (
                                                <tr>
                                                    <td><img src={item.product.image} alt="" /></td>
                                                    <td>{item.product.title.substring(0, 30)}...</td>
                                                    <td>{item.product.price}</td>
                                                    <td>
                                                        <div className='cart-quantity'>
                                                            <button onClick={() => handleDecreament(item.product.id)} className='cart-btn'>-</button>
                                                            <span className='count'>{item.count}</span>
                                                            <button onClick={() => handleIncreament(item.product.id)} className='cart-btn'>+</button>
                                                        </div>
                                                    </td>
                                                    <td><strong>$</strong>{item.product.price * item.count}</td>
                                                    <td>
                                                        <button onClick={() => handleDelete(item.product.id)} className='btn btn-danger'>Delete</button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table> : <h3>Your Cart is Empty</h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
