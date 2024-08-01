import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { add } from '../../../Redux/CartSlice';
import { useDispatch } from 'react-redux';

export const Product = () => {
  const [data, setData] = useState({})
  const [Addtocart,setAddtocart] = useState(false)
  
  const id = useParams();
  console.log(id);

const dispatch = useDispatch();

  useEffect(() => {
    handleData()
  }, []);

  let handleData = async () => {
    let respose = await fetch(`https://fakestoreapi.com/products/${id.id}`);
    let info = await respose.json();
    // console.log(info);
    setData(info);
  }

  const handlecart = (data)=>{
    dispatch(add(data))
    setAddtocart(true)
    
  }
  return (
    
     
      <div className='container d-flex justify-content-center my-3'>
        {data && Object.keys(data).length > 0 ? (
          <div className='row  ' >
            <div className='col-md-6 d-flex justify-content-center '>
              <img src={data.image} className='img-fluid w-75' />
            </div>
            <div className='col-md-6 mt-5 '>
              <b>Id: {data.id}</b>
              <h5 className='text-warning'>{data.title}</h5>
              <h4 className='text-danger'>Price: {data.price}Rs</h4>
              <h4 className='text-primary'>{data.description}</h4>
              <h5 className='text-secondary'>Rating: {data.rating.rate} Count: {data.rating.count}</h5>
            <button className='btn btn-danger mt-3' onClick={()=>{handlecart(data)}}>{Addtocart ? 'Added':'Add to cart'}</button>
            </div>
          </div>
        ) : <h1>Loading.....</h1>}

      </div>
    
  )
}
