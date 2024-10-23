import React from 'react'
import {Routes,Route} from "react-router-dom"
import { ListandKeys } from '../ListandKeys/ListandKeys'
import Counter from '../State/Counter-Cls'
import Styling from '../Style/Styling'
import Transfer from '../Props/Export_data/Transfer'
import FromValidation from '../Fromvalidation/FromValidation'
import Validation from '../Fromvalidation/Validation'
import LifeCycleMethods from '../LifCycleMethods/LifeCycleMethods'
import Mounting from '../LifCycleMethods/Mounting'
import Updating from '../LifCycleMethods/Updating'
import UseState from '../Hooks/UseState'
import UseEffect from '../Hooks/UseEffect'
import UseReducerHook from '../Hooks/UseReducer/UseReducerHook'
import { UseReducer2 } from '../Hooks/UseReducer/UseReducer2'
import { UseContextHook } from '../Hooks/UseContext/UseContextHook'
import { UseRef } from '../Hooks/UseRef'
import { Products } from '../Hooks/UsePareme/Products'
import { Product } from '../Hooks/UsePareme/Product'
// import { MyCart } from '../Hooks/UsePareme/MyCart'
import { Cart } from '../Hooks/UsePareme/Cart'
import UseCallBack from '../Hooks/UseCallBack'
import UseMemo from '../Hooks/UseMemo'

function Routing() {
  return (
    <>
    <Routes>
        <Route path="/props" element={<Transfer/>}/>
        <Route path="/ListandKeys" element={<ListandKeys/>}/>
        <Route path="/state" element={<Counter/>}/>
        <Route path="/styling" element={<Styling/>}/>
        <Route path="/formvalidation" element={<FromValidation/>}/>
        <Route path="/ContactUs" element={<Validation/>}/>
        <Route path="/Lifecyclemethods" element={<LifeCycleMethods/>}/>
        <Route path="/mounting" element={<Mounting/>} />
        <Route path="/updating" element={<Updating/>}/>
        <Route path="/usestate" element={<UseState/>} />
        <Route path="/useeffect" element={<UseEffect/>}/>
        <Route path="/usecontext" element={<UseContextHook/>} />
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usereducer1" element={<UseReducerHook/>} />
        <Route path="/usereducer2" element={<UseReducer2/>} />
        <Route path="/usecallback" element={<UseCallBack/>} />
        <Route path="/usememo" element={<UseMemo/>} />
        <Route path='/useparame' element={<Products/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/store' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Routing;