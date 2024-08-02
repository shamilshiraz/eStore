import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {
const wishlist=useSelector((state)=>state.wishlistReducer)
const cart=useSelector((state)=>state.cartReducer)


  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <Link to={'/'} style={{textDecoration:'none',color:'white'}}><img src='/public/apple-logo-white.png' height={'50px'} style={{paddingInline:'20px'}}/>eStore</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation" fdprocessedid="xnytno">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbarColor02" >
      <ul class="navbar-nav">
        
        <li class="nav-item" >
         <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}> Wishlist<Badge className='bg-secondary ms-2'>{wishlist.length}</Badge></Link>
        </li>
        <li class="nav-item">
        <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart<Badge className='bg-secondary ms-2'>{cart.length}</Badge></Link>
        </li>
       
       
      </ul>

    </div>
  </div>
</nav>
</>
  )
}

export default Header