import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { act_buy} from '../action/index'
export default function Product(props) {
  const disPatch = useDispatch()
  const {product} = props
  const [quantity,setQuantity] = useState(1)
  let elementPrice = ""
  if (product.quantity > 0) {
    elementPrice = <>
    <input onChange={(e) => setQuantity(e.target.value)} name="quantity-product-1" type="number" value={quantity} min={1} />
    <a onClick={() => disPatch(act_buy(product,quantity))} data-product={1} href="#" className="price">
      {" "}
      {product.price} USD{" "}
    </a>
  </>
  } else {
    <span className="price"> 12 USD</span>
  }
  return (
    <div className="media product">
            <div className="media-left">
              <a href="#">
                <img
                  className="media-object"
                  src={product.image}
                  alt={product.productName}
                />
              </a>
            </div>
            <div className="media-body">
              <h4 className="media-heading">{product.productName}</h4>
              <p>
                {product.title}
              </p>
              {elementPrice}
            </div>
          </div>
  )
}
