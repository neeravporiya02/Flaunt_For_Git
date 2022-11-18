import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'
// import {faker} from '@faker-js/faker'
import { CartReducer, productReducer } from './Reducers'
import cart from '../components/Cart'

const Cart = createContext()
// faker.seed(99)

const fragranceData = [
  {
    "id": "1",
    "name": "Obsession By Calvin Klein",
    "price": '120.00',
    "image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/yves.jpg",
    "inStock": 6,
    "fastDelivery": false,
    "ratings": 4
},
{
    "id": "2",
    "name": "Eternity By Calvin Klein",
    "price": "80.00",
    "image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/black_opium.jpg",
    "inStock": 0,
    "fastDelivery": true,
    "ratings": 1
},
{
  "id": "3",
  "name": "Reality By Calvin Klein",
  "price": "80.00",
  "image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/chanel.jpg",
  "inStock": 2,
  "fastDelivery": true,
  "ratings": 4
},
{
  "id": "4",
  "name": "Obsession By Calvin Klein",
  "price": '120.00',
  "image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/miss_dior.jpg",
  "inStock": 6,
  "fastDelivery": false,
  "ratings": 4
},
{
  "id": "5",
  "name": "Eternity By Calvin Klein",
  "price": "80.00",
  "image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/coco_chanel.jpg",
  "inStock": 10,
  "fastDelivery": true,
  "ratings": 1
},
{
"id": "6",
"name": "Reality By Calvin Klein",
"price": "80.00",
"image": "https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/versace.jpg",
"inStock": 2,
"fastDelivery": true,
"ratings": 4
}
  ];


const Context = ({children}) => {

    // const products = [fragranceData].map((frag)=> ({
    //     id: frag.id,
    //     name: frag.name,
    //     price: frag.price,
    //     category:"Fragrance",
    //     subCategory:"Eua De Toilete",
    //     brand:"Calvin Klein",
    //     image: frag.image,
    //     inStock: frag.inStock,
    //     fastDelivery: frag.fastDelivery,
    //     ratings: frag.ratings,
    // }));

    const products = fragranceData;

    const [state, dispatch] = useReducer(CartReducer, {
      products: products,
      cart:[]
    })

    const [productState, productDispatch] = useReducer(productReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating:0,    //0 means o and above, All the products will be displayed
      searchQuery:"",
    })

    useReducer();
    console.log(products)
  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState = () => {
  return useContext(Cart)
}