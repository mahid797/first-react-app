import React from 'react'

interface Props {
    cartItems: string[];
    onClear?: () => void;
}

const Cart = ({cartItems, onClear}: Props) => {
    const toggle = () => {
        // setStatus(!status);
        // onClick()
    }
  return (
    <>
        <div>Cart</div>
        <ul>
            {cartItems.map(item => <li key={item}>{item}</li>)}
        </ul>
        {/* <button onClick={onClear}>Clear</button> */}
    </>
    
  )
}

export default Cart