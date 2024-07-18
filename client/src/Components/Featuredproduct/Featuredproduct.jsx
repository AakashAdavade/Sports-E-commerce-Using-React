import React from 'react'
import Card from "../Card/Card"
import "./Featuredproduct.scss"
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({ type }) => {
    const { data, loading, error } = useFetch(
      `/products?populate=*&[filters][type][$eq]=${type}`
    );
  
    return (
      <div className="featuredProducts">
        <div className="top">
          <h1>{type} products</h1>
          <p>
          Shivaji sports store gives you a best quality of sports products
          </p>
        </div>
        <div className="bottom">
          {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    );
  };
  
  export default FeaturedProducts;
  

// const [products, setProducts] =useState([])


// useEffect(()=>{
// const fetchData = async ()=>{
// try{
//     const data = await axios.get(process.env.REACT_APP_API_URL+"/products",{
//         headers:{
//             Authorization:"bearer"+process.env.REACT_APP_API_TOKEN,
//         },
//     })
//     console.log(data)
// }catch(err){
//     console.log(err)
// }
// }
// fetchData()
// },[])