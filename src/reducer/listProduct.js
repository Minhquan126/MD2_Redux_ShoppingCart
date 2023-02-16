const initialState = [
    {productId:"SP001",productName:"Pizza",image:"images/pizza.jpg",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
quantity:10,price:12
},
    {productId:"SP002",productName:"Hamburger",image:"images/Hamburger.jpg",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!"
,quantity:10,price:10
},
    {productId:"SP003",productName:"Bread",image:"images/Bread.jpg",
    title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
quantity:0,price:16
}
]
export const listProduct = (state = initialState,action) => {
return state
}