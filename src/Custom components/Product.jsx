import React from 'react'
// styling
import '../Stylings/ctmProduct.css'
// react hooks 
import { useState, useEffect } from 'react'
// react icons
import {BsFillCartFill} from 'react-icons/bs'
// slice add reducer
import { add } from '../Store/Cartslice'
import { fetchProducts } from '../Store/Productslice'
// hooks for redux 
import { useDispatch, useSelector } from 'react-redux'
// status
import { STATUSES } from '../Store/Productslice'

const Product = () => {

    // dispatch hook 
    const dispatch = useDispatch();
     // useSelector hook 
    const { data: products, status } = useSelector((state) => state.product);

   // old method without redux toolkit / thunk
  //const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
   
    return (
        <div className="product-con">

            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <div class="badge">Hot</div>
                    <div className='product-tumb'>
                    <img src={product.image} alt="" />
                    </div>
                    <div class="product-details">
                    <span class="product-catagory">{product.category}</span>
                    <h4><a href="">{product.title}</a></h4>
                    {/* <p>{product.description}</p> */}
                   
                    <div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>{product.price}</div>
				<div class="product-links">
                    <button className='cartbtn' onClick={() =>handleAdd(product)}> <BsFillCartFill/></button>
					{/* <a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a> */}
				</div>
			  </div>

              </div>
                </div>
            ))}

        </div>
    );
};

export default Product;
