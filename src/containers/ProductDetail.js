import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {selectedProduct,removeSelectedProducts} from '../redux/actions/productAction'

const ProductDetail = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state)=>state.singleProduct)
    const {id,title,price,description,category,image}=product;
    console.log("product",product);
    const fetchProductDetail = async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
           .catch((error)=>{
               console.log("error",error);
           })
      //  console.log("resposne",response.data);
      dispatch(selectedProduct(response.data));   
    }
    useEffect(()=>{
        if(productId && productId!=="") fetchProductDetail();
        return ()=>{
            dispatch(removeSelectedProducts())
        }
        //fetchProductDetail();
    },[productId])
    return (
        <div className="ui grid container">
            {
              Object.keys(product).length===0 ? (
                <div>...loading</div>
              ):
                (<div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>
                        <div className="middle aligned row">
                            <div className="column lp">
                                <img className="ui fluid image" src={image} alt={title}></img>
                            </div>
                            <div className="column rp">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui header block brown">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>  
            )    
         }
        </div>
    );
};

export default ProductDetail;