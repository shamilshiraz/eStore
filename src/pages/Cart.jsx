import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart } from '../Slice/cart'
import { emptyCart } from '../Slice/cart'



function Cart() {

  const cartArray=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const [total,setTotal]=useState('0')

  const getTotal=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal('0')
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])


   const handleCart=()=>{
    dispatch(emptyCart())
    navigate('/')
    if(total>0){
      alert('You have succesfully ordered these items, it will reach your doorstep soon: )')
    }else{
      alert('Your cart is empty:(')
    }

   }
  

  return (
<Row>
    {
    cartArray?.length>0?
   <div style={{marginInline:'100px', width:'600px',marginBlock:'30px'}} >
    <table className='table shadow border' style={{border:'1px solid white'}}>
      <thead style={{border:'1px solid white'}}>
      <tr style={{border:'1px solid white'}}>
      <th >Index</th>
      <th>Name</th>
      <th>Image</th>
      <th>Description</th>
      <th>Price</th>
      <th>action</th>
      </tr>
      </thead>
      {
        cartArray.map((product,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{product.title}</td>
          <td><img src={product.thumbnail} alt="" /></td>
          <td>{product.description.slice(0,50)}...</td>
          <td>${product.price}</td>
          <td onClick={()=>dispatch(removeFromCart(product.id))}><i class="fa-regular fa-trash-can"></i>  </td>
        </tr>
        ))
         

      }
   
    </table>
    </div>
    :<div w-100>
      Want to buy anything?
<br /><Link to={'/'}>Go back home</Link>
    </div>
  }
  <div className='border' style={{height:'300px', width:'300px', marginTop:'100px',marginLeft:'100px'}}>
    <h1 style={{color:'hotpink'}}>Cart summary</h1>
    <h3>Total products: <span>{cartArray.length}</span></h3>
    <h4>Total price: <span>{total}</span> </h4>
    <div className="buttonDiv">
      <Button onClick={handleCart}>Check out</Button>
    </div>
     
  </div>
</Row>  )
}

export default Cart