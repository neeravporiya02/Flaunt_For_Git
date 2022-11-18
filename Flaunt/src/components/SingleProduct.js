import React from 'react'
import { Button, Card, CardImg } from 'react-bootstrap'
import { Rating } from './Rating'
import { CartState } from '../context/Context'

const SingleProduct = ({prod}) => {

  const {state: {cart}, dispatch} =CartState()
  return (
    <div className='products'>
        <Card>
          <CardImg variant='top' src={prod.image} alt={prod.name}></CardImg>
          <Card.Body>
            <Card.Subtitle style={{paddingBottom: 10}}>
              {/* <span>$ {prod.price.split(".")[0]}</span> */}
              <div><span>$ {prod.price}</span></div>
              <span>{prod.name}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 days delivery</div>
              )}
              <Rating rating={prod.ratings}/>
            </Card.Subtitle>
            {
              cart.some(p=>p.id === prod.id) ? 
              (<Button onClick={() => dispatch({
                type:'REMOVE_FROM_CART',
                payload:prod
              })} variant='danger'>Remove from cart</Button>): 
              (
                <Button onClick={() => dispatch({
                  type:'ADD_TO_CART',
                  payload:prod
                })} disabled={!prod.inStock}>
                  {!prod.inStock ? "Out of Stock" : "Add to Cart"}
              </Button>
              )
            }
          </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct