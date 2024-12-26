import React, { useEffect } from "react";
import { VscError } from "react-icons/vsc";
import CartItems from "./CartItems";
const cartItems = [
  {
    _id: "1",
    name: "hello",
    countInStock: "1",
    price: "1",
    imageUrl: "https://m.media-amazon.com/images/I/71D6UBlkufL._AC_SX695_.jpg",
  },
  {
    _id: "2",
    name: "crayola",
    countInStock: "1",
    price: "1",
    imageUrl: "https://m.media-amazon.com/images/I/71D6UBlkufL._AC_SX695_.jpg",
  },
];
const subtotal = 1222;
const tax = Math.round(subtotal * 0.15);
const shipping = 50;
const discount = 110;
const total = subtotal + tax + shipping;

const Cart = () => {
  const [coupon, setCoupon] = React.useState<string>("");
  const [isValidCoupon, setIsValidCoupon] = React.useState<boolean>(false);

  useEffect(() => {
    // checking if the coupon is valid
    if (coupon === "DISCOUNT") {
      setIsValidCoupon(true);
    } else {
      setIsValidCoupon(false);
    }
  }, [coupon]);

  return (
    <div className="cart">
      <main>
        {cartItems.map((item, index) => (
          <CartItems
            key={index}
            _id={item._id}
            name={item.name}
            price={parseInt(item.price)}
            countInStock={parseInt(item.countInStock)}
            quantity={1}
            imageUrl={item.imageUrl}
            
          />
        ))}
      </main>
      <aside>
        <p>Subtotal: rs{subtotal}</p>
        <p>Tax: rs{tax}</p>
        <p>Shipping: rs{shipping}</p>

        <p>
          Discount: <em> - rs{discount}</em>
        </p>
        <p>
          <b>Total: rs{total}</b>
        </p>
        {/* setting value of the input in side coupon variable. */}
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {coupon &&
          (isValidCoupon ? (
            <span className="green">
              rs{discount} was discounted using coupon <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              coupon is invalid <VscError />
            </span>
          ))}
      </aside>
    </div>
  );
};

export default Cart;
