import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/features/productSlice'
import Card from './Card';

function Main() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    const { products, isLoading } = useSelector(state => state.products);

    return (
        <>
            <main>
                <div className="container">
                    <div className="row">
                        {
                            isLoading ? <div className='loader'>
                                <div className="spinner-border text-primary" role="status"></div>
                            </div> :
                                products.map((item, index) =>
                                    <Card
                                        key={index}
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                        price={item.price}
                                        cetagory={item.cetagory}
                                        item={item}
                                    />)
                        }
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main
