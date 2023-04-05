import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart,delCart } from '../redux/action';
import 'react-loading-skeleton/dist/skeleton.css'
import { Link, useParams } from 'react-router-dom'


const Product = () => {
    const { id } = useParams();
    const [product, setproduct] = useState([])
    const [loading, setloading] = useState(false)
    const [cartBtn, setcartBtn] = useState("Add to Cart");
    const dispatch = useDispatch();
    const addProduct = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addCart(product));
            setcartBtn("Remove from Cart");
        }
        else
        {
            dispatch(delCart(product))
            setcartBtn("Add to Cart")
        }

    }

    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            console.log("In producttttttt");
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const res = await response.json()
            setproduct(res);
            setloading(false);
        }
        getProduct();
    }, [])


    const Loading = () => {
        return (
            <>
                <div className='col-md-6'>
                    <Skeleton height={"400px"} />
                </div>
                <div className='col-md-6' style={{ lineHeight: 2 }}>
                    <Skeleton height={"50px"} width={"300px"} />
                    <Skeleton height={"75px"} />
                    <Skeleton height={"25px"} width={"150px"} />
                    <Skeleton height={"50px"} />
                    <Skeleton height={"150px"} />
                    <Skeleton height={"50px"} width={"100px"} />
                    <Skeleton height={"50px"} width={"100px"} style={{ marginLeft: 4 }} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={product.image} alt={product.title} height={"400px"} width={"400px"} />
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                    <h1 className='display-5'>{product.title}</h1>
                    <p className='lead fw-bolder'>Rating {product.rating && product.rating.rate}<i className='fa fa-star'></i></p>
                    <h3 className='display-6 fw-bold my-4'>$ {product.price}</h3>
                    <p className='lead'>{product.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={() => addProduct(product)}>{cartBtn}</button>
                    <Link to="/cart" className='btn btn-outline-dark ms-2 px-3 py-2'>View Cart</Link>


                </div>
            </>
        )
    }


    // const showProduct = ()=>{
    //     return(
    //     <>
    //     <div className='col-md-6'>
    //         <img src={product.image} alt={product.title} height={"400px"} width={"400px"}/>
    //     </div>
    //     </>
    //     )
    // }
    return (
        <div>
            <div className='container py-5'>
                <div className='row py-4'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Product