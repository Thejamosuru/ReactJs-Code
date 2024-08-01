import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [data, setData] = useState([]);
    const [number, setNumber] = useState(0)

    useEffect(() => {
        handledata()
    }, [number])

    let handledata = async () => {
        let info = await fetch(`https://dummyapi.io/data/v1/user?page=${number}&limit=10`, {
            method: "GET",
            headers: {
                'app-ID': '661f6ddaa22352c3f8532ec7'
            }   
        });
        let userData = await info.json();
        // console.log(userData.data);
        setData(userData.data);
    }
    return (
        <>
            <h2 className='text-center text-secondary mt-3'>UseEffect</h2>
            <div className='container'>
                <div className='row '>
                    {data && data.length > 0 ? data.map((user) => (

                        <div className='col-md-6 '>
                            <div className='card '>
                                <div className='row p-2'>
                                    <div className='col-md-4'>
                                        <img src={user.picture} />
                                    </div>
                                    <div className='col-md-8'>
                                        <p className='text-danger'>{user.id}</p>
                                        <b className='text-primary'>{user.title} {user.firstName} {user.lastName}</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )) : <h2 className='text-center'>Browsing.....</h2>}
                </div>
            </div>
            <div className='text-center mt-3 '>
            {[0,1,2,3,4,5,6,7,8,9].map((num)=>(
                <button className='btn btn-danger mx-2 px-3' onClick={()=>{setNumber(num);}}>{num}</button>
            ))}
            </div>
        </>
    )
}
