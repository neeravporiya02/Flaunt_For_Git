import { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row, Image } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context'
import { Rating } from './Rating';
import { useParams, Link } from "react-router-dom";

const cart = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [total, setTotal] = useState();

  const {state:{cart},
  dispatch,
      } = CartState();

  
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty,0));
  }, [cart]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map((prod) => (
              // <span>{prod.name}</span>
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col ms={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{prod.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rating={prod.ratings} />
                  </Col>
                  <Col>
                    <Form.Control 
                      as="select" 
                      value={prod.qty}
                      onChange={(e) => 
                        dispatch({
                          type:'CHANGE_CART_QTY',
                          payload: {
                            id: prod.id,
                            qty: e.target.value,
                          },
                      })
                      }
                      >
                      {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1} > {x + 1} </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col ms={2}>
                    <Button 
                    type="button"
                    variant="light"
                    
                    >
                      <AiFillDelete fontSize="20px"
                      onClick={() =>
                        dispatch({
                            type:'REMOVE_FROM_CART',
                            payload: prod,
                        })}
                      />
                      </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'> Subtotal ({cart.length}) items</span>
          <span style={{fontweight: 700, fontSize:20}}>Total: $ {total}</span>
          <Button type="button" disabled={cart.length === 0}>
          <Link to={`/Payment`}>Proceed to Checkout</Link>
          </Button>
      </div>
    </div>
  )
}

export default cart