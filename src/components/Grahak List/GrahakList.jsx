import React, { useEffect, useState } from 'react'
import  axios from 'axios'
import Grahak from '../Grahak/Grahak'

const GrahakList = () => {
  const [data, setData]  =  useState([])
  let [count, setCount] = useState(0);

  const handleCount = () =>{
    setCount(++count);
    console.log(count)
  }

  useEffect(()=>{
    axios.get("http://localhost:9090/api/v1/grahak").then((res)=>{

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

export default GrahakList