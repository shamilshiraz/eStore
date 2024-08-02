import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../Slice/wishlist'
import { Link } from 'react-router-dom'
import { addToCart } from '../Slice/cart'
import Carousel from '../components/Carousel'



function Home() {
  const data=useFetch('https://dummyjson.com/products')
  // console.log(data);
  const dispatch=useDispatch();

  return (
    <>
    <Row>
        {
        data?.length>0?data?.map((product,index)=>(
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
            <Button onClick={()=>dispatch(addToWishlist(product))}> <i class="fa-regular fa-heart"></i>        </Button>
            <Button onClick={()=>dispatch(addToCart(product))}>      <i class="fa-solid fa-cart-shopping"></i>      </Button>
            </div>
         
      
            </Card.Body>
        </Card>
        </Col>
        )):<p>Nothinf to display</p>
      }
    </Row>
    </>   
  )
}

export default Home