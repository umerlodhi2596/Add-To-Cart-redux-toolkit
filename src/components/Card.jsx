import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice';

function Card({ id, image, title, price, cetagory, item }) {

    const dispatch = useDispatch();

    const handleAdd = (current) => {
        dispatch(addToCart({ product: current, count: 1 }));
    }

    return (
        <>
            <div className="col-md-4">
                <div className="product mb-3">
                    <div className="product-image">
                        <img src={image} alt="" />
                    </div>
                    <div className="product-content">
                        <h5 className='pt-3'>{title.substring(0, 20)}...</h5>
                        <p><strong>Price: </strong> {price}</p>
                        <p>{cetagory}</p>
                    </div>
                    <div className="product-btn">
                        <button onClick={() => handleAdd(item)} className='btn btn-primary'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
