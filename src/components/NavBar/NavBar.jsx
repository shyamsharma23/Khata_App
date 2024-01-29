import React, { useRef, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {

  const qref = useRef()
  const [value, setValue] = useState();

  const handleSearch = () =>{
    
  }


  return (
    <div class="container">
        <p>Khata APP</p>
        
        <ul>
            <div className="search">

            <input type='text' className='me-3' placeholder='Search..' onKeyUp={(q)=>setValue(q.target.value)}/>

            <Link to={`/results/${value}`}>Search</Link>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/addNew/${true}`} className="btn btn-success">Add Grahak</Link></li>
        </ul>
    </div>
  )
}

export default NavBar