import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import "./Header.css";

function Header({searchbtn, productCounter}) {

    const [search, setSearch] = useState()
  


  return (
   <>
    <div className='free'>
            <div className='icon'>
            <FaTruckMoving /> 
            </div>
            <p>FREE Shipping when shopping upto $1000</p>
    </div>
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/logo.svg' alt='logo'></img>
            </div>
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search Your Product...' autoComplete='on' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>
            <div className='icon'>
               
                <div className='second_icon'>
                <Link to="/cart" className='link'><BsBagCheck /></Link>
                <div className="productCount">{productCounter}</div>
                </div>
            </div>
        </div>
    </div>
    <div className='header'>
        <div className='container'>
            <div className='nav'>
            <ul>
                <li>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li>
                    <Link to='/product'className='link'>Product</Link>
                </li>
                <li>
                    <Link to='/about'className='link'>About</Link>
                </li>
                <li>
                    <Link to='/contact'className='link'>contact</Link>
                </li>
            </ul>
            </div>

        </div>
    </div>
    </>
  )
}
export default Header