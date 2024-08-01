import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../../Redux/CartSlice';

export const Cart = () => {
  const mycart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(mycart);

  const handleRomve = (id)=>{
    dispatch(remove(id))
  }
   
  return (
    <>
      <h2>Cart</h2>
      <div className='Container-fluid'>
        <div className='row'>
          {mycart && mycart.length > 0 ? mycart.map((item) => (
            <div className='col-md-12 card w-75 m-1'>
              <div className='row'>
                <div className='col-md-4'>
                  <img src={item.image} className='img-fluid w-50 h-75 m-3' />
                </div>
                <div className='col-md-4 mt-4'>
                  <b className='text-primary'>{item.title}</b>
                  <h2 className='text-danger mt-3'>Price: {item.price}.Rs</h2>
                  <h4 className='text-warning mt-2'>Rating: {item.rating.rate}</h4>
                </div>
                <div className='col-md-4 mt-5'>
                  <button className='btn btn-danger' onClick={()=>{handleRomve(item.id)}}>Remove</button>
                </div>
              </div>
            </div>
          )) : <>
          </>}
        </div>
      </div>
    </>
  )
}
