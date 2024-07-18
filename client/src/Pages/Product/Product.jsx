import React from 'react'
import { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaBalanceScaleLeft } from "react-icons/fa";
import "./Product.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
  const id = useParams().id
  const [selectedImg,setSelectedImg] = useState("img")
  const [quantity,setquantity] = useState(1)

  const dispatch = useDispatch()
  const { data, loading, error } = useFetch (
    `/products/${id}?populate=*`
  )

  return (
   <div className="product">
    {loading ? (
      "loading" 
      ) : (
      <>
        <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price'>₹{data?.attributes?.price}</span>
        <p>{data?.attributes?.desc}</p>
        <div className="quantity">
          <button onClick={()=>setquantity((prev) => (prev === 1 ? 1 : prev-1)) } ><AiOutlineMinus/></button>
          {quantity}
          <button onClick={() => setquantity((prev) => prev < 5 ? prev + 1 : prev)}><AiOutlinePlus/></button>

        </div>
        <button className="add" onClick={()=>dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc: data.attributes.desc,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          quantity,
        }))}>
          <AiOutlineShoppingCart />ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <AiOutlineHeart /> ADD TO WISH LIST
          </div>
          <div className="item">
            <FaBalanceScaleLeft />ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span></span>
        </div>
        <hr />
        <div className="info">
        <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </>
    )}
   </div>
  )
}

export default Product
