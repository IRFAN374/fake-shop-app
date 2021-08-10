import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import {setProducts} from '../redux/actions/productAction';

const ProductListing = () => {
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();
    //console.log(products);
    const fetchProducts = async ()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((error)=>{
            console.log("error ",error)
        })
        dispatch(setProducts(response.data));
        //console.log("response",response.data);
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("products",products)
    return (
        <div className="ui container grid">
            <ProductComponent></ProductComponent>
        </div>
    );
};

export default ProductListing;