import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    const [Data, setdata] = useState([]);

    useEffect(() => {
        handleData()
    }, []);

    let handleData = async () => {
        let response = await fetch('https://fakestoreapi.com/products');
        let UserData = await response.json();
        console.log(UserData);
        setdata(UserData)
        // console.log(Data);
    }
    return (
        <>
            <h2 className='text-danger text-center'>Products Page</h2>
            <div className='container-fluid'>
                <div className='row m-2 d-flex justify-content-center ' >
                {Data && Data.length > 0 ? Data.map((info) => (
                        <div className='col-3  m-2 p-2 d-flex justify-content-center card'>
                            <div className='row'>
                            <div className='col-6'>
                            <Link to={`/product/${info.id}`}>
                                <img className=' img-fluid w-50' src={info.image} alt={info.category} />
                            </Link>
                            </div>
                            <div className='col-6'>
                                <b className='text-danger'>Id: {info.id}</b>
                                <p className='text-primary'>{info.title}</p>
                                <h5 className='text-danger'>Price: {info.price}</h5>
                                <b className='text-secondary'>Rating: {info.rating.rate} Count: {info.rating.count}</b>
                            </div>
                            </div>
                        </div>
                )) : <h1>Loading.....</h1>}
                </div>
            </div>
        </>
    )
}
