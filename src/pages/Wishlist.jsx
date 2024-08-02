import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import wishlist, { removeFromWishlist } from '../Slice/wishlist'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Slice/cart'




function Wishlist() {
  const wishlistArray= useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  return (
    <Row>
    {
    wishlistArray?.length>0?wishlistArray?.map((product,index)=>(
      <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3} >
      <Card style={{ width: '18rem' ,backgroundColor:'black',marginTop:'100px',marginLeft:'50px', height:'600px'}}>
      <Card.Img variant="top" src={product.thumbnail} height={'300px'} id='cardImg'/>
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product.description.slice(0,50)}...</p>
          <h5>${product.price}</h5>
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button onClick={()=>dispatch(removeFromWishlist(product.id))}>     <i class="fa-regular fa-trash-can"></i>     </Button>
        <Button onClick={()=>dispatch(addToCart(product))}>      <i class="fa-solid fa-cart-shopping"></i>      </Button>
        </div>
     
  
        </Card.Body>
    </Card>
    </Col>
    )):<div w-100>
What do you mean you dont wish for anything?!  
<br /><Link to={'/'}>Wish for something</Link>
    </div>
  }
</Row>  )
}

export default Wishlist