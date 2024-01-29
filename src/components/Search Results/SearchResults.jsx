import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import Grahak from '../Grahak/Grahak';

const SearchResults = (props) => {

const [data, setData] = useState([])
const [count, setCount] = useState(0);

  const handleCount = () =>{
    setCount(count+1);
    console.log(count)
  }

useEffect(()=>{
    axios.get(`http://localhost:9090/api/v1/grahak/search?name=${props.match.params.param}`).then((res)=>{
    setData(res.data)
    })
},[count])

  return (
<div className='container'>
    <div className="row row-cols-4">

    {data.map((item)=>{
        return <Grahak key={item.grahakId} val = {item} fun={handleCount}/>
    })}
    </div>
</div>
  )
}

export default SearchResults