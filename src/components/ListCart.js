import React from 'react'
import Cart from './Cart'
import CartInfo from './CartInfo'
import { useSelector } from 'react-redux'
export default function ListCart() {
  const listCart = useSelector(state => state.listCart)
  const notify = useSelector(state => state.notify)
  
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Product Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {listCart.map((cart,index) => <Cart key={cart.product.productId} cart={cart} stt={index}/>)}
              {/* CART BODY */}
              
            </tbody>
            <tfoot id="my-cart-footer">
              {/* CART FOOTER */}
              <CartInfo />
            </tfoot>
          </table>
        </div>
      </div>
      <div className={notify.class} role="alert" id="mnotification">
         {notify.content}
      </div>
    </div>
  )
}
