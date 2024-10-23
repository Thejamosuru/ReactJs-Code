import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

export default function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark ">
        <div class="container-fluid">
          <a class="navbar-brand fs-2 text-light data-aos-12000 " to="#">ReactJs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-light" aria-current="page" to="/props">Props</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/ListandKeys">ListandKeys</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/state">State</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/styling">Stylings</Link>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link text-light" to="/formvalidation">Form Validation</Link>
                <ul>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/ContactUs">ContactUs</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link text-light" to="/Lifecyclemethods">Life Cycle Methods</Link>
                <ul >
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/mounting">Mounting</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/updating">Updating</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/un-mounting">Un-Mounting</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <Link class="nav-link text-light" to="">Hooks</Link>
                <ul >
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usestate">UseState</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/useeffect">UseEffect</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usecontext">UseContext</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/useref">UseRef</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usereducer1">UseReducer1</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usereducer2">UseReducer2</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/useparame">UseParame</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usecallback">UseCallBack</Link>
                  </li>
                  <li class="bg-dark">
                    <Link class="nav-link text-light" to="/usememo">UseMemo</Link>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-light" to="/store">My Cart</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
