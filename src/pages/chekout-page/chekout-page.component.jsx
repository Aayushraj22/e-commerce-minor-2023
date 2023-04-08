import React from "react";
import './chekout-page.styles.scss'
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";

const CheckOutPage = ({cartItems,total}) =>(
    <div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block">
            <span>product</span>
        </div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
    </div>
    {
        cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
    }
    <div className="total" >Total:₹{total}</div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);