import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { act_delete, act_update } from '../action'
export default function Cart(props) {
  const [quantity,setQuantity] = useState(1)
   const {cart,stt} = props
   const disPatch = useDispatch()
   useEffect(() => {
    setQuantity(cart.quantity)
   },[cart.quantity])
  return (
  
      <tr>
        <th scope="row">1</th>
        <td>{cart.product.productName}</td>
        <td>{cart.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            min={1}
            onChange = {(e) => setQuantity(e.target.value)}
          />
        </td>
        <td>
          <strong>{cart.product.price * cart.quantity} USD</strong>
        </td>
        <td>
          <a
            className="label label-info update-cart-item"
            href="#"
            data-product=""
            onClick={() => disPatch(act_update(cart.product.productId,quantity))}
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            href="#"
            data-product=""
            onClick={() => disPatch(act_delete(cart.product.productId))}
          >
            Delete
          </a>
        </td>
      </tr>
    

  )
}
