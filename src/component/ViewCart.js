import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delCart } from '../redux/action';
import { Link } from 'react-router-dom';


const ViewCart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    // const Loading = () => {
    //     return (
    //         <>
    //             <div className='col-md-6'>
    //                 <Skeleton height={"400px"} />
    //             </div>
    //             <div className='col-md-6' style={{ lineHeight: 2 }}>
    //                 <Skeleton height={"50px"} width={"300px"} />
    //                 <Skeleton height={"75px"} />
    //                 <Skeleton height={"25px"} width={"150px"} />
    //                 <Skeleton height={"50px"} />
    //                 <Skeleton height={"150px"} />
    //                 <Skeleton height={"50px"} width={"100px"} />
    //                 <Skeleton height={"50px"} width={"100px"} style={{ marginLeft: 4 }} />
    //             </div>
    //         </>
    //     )
    // }
    const handleClose = (product) => {
        dispatch(delCart(product))
    }
    const ShowProduct = () => {
        return (
            <>
                {state.map((product) => {
                    return (
                        <>
                            <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
                                <div className='container py-4'>
                                    <button onClick={() => handleClose(product)} className='btn btn-close float-end' aria-label='close'></button>
                                    <div className='row justify-content-center'>
                                        <div className='col-md-4'>
                                            <img src={product.image} alt={product.title} height={"220px"} width={"200px"} />
                                        </div>
                                        <div className='col-md-2'>
                                            <h3>{product.title}</h3>
                                            <p className='lead fw-bold'>${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <img src={product.image} alt={product.title} height={"400px"} width={"400px"} />
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                                <h1 className='display-5'>{product.title}</h1>
                                <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                                <p className='lead'>{product.description}</p> */}


                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className='container py-4'>
                    <div className='row'>
                        <h3>Your cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const button = ()=>{
        return(
            <div className='container'>
                <div className='row'>
                    <Link to='/checkout' className='btn btn-outline-dark mb-5 w-25'>Proceed to checkout</Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {state.length === 0 && emptyCart()}
                    {state.length !== 0 && state.map(ShowProduct)}
                    {state.length !== 0 && button()}

                    {/* <ShowProduct /> */}
                    {/* {Loading ? <Loading /> : <ShowProduct />} */}
                </div>
            </div>
        </div>

    )
}

export default ViewCart