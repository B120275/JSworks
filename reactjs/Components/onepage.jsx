import React from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../Data/Products';

function Onepage() {
    const {id} = useParams()
    const dataVal = productsData.find((e)=>e.id === id);
    console.log(id)
    
  return (
    <div>
           <h1>Hello</h1>
    </div>
  )
}
