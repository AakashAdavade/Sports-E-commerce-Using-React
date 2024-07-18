import React from 'react'
import { useParams } from "react-router-dom"
import { useState } from "react"
import List from "../../Components/List/List"
import useFetch from "../../hooks/useFetch"
import "./Products.scss"

const Products = () => {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(2000)
  const [sort,setSort] = useState(null)
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)

  const handleChange = (e)=>{
    const value = e.target.value
    const isChecked = e.target.checked

    setSelectedSubCats(isChecked 
      ? [...selectedSubCats, value] 
      :selectedSubCats.filter((item) => item !== value)
      )
  }

  console.log(selectedSubCats)

  return (
    <div className="products">
      {/* <div className="left">
        <div className="filterItem">
          <h2>Products Categories</h2>
          {data?.map((item)=>(
          <div className="inputItem"key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>

          ))}

        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <spam>100</spam>
            <input type="range" min={100} max={10000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="acs" name="Price" onChange={e=>setSort("asc")} />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="decs" name="Price" onChange={e=>setSort("desc")} />
            <label htmlFor="desc">Price (Highest First)</label>
          </div>
        </div>
      </div> */}
      <div className="right">
        <img className="catImg" src="https://media.casioindiashop.com/assets/page-banners/offers/desktop/1.webp" alt="" />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}

export default Products
