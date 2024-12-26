import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Shipping = () => {
  const [shipping, setShipping] = useState({
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  //to know the value of the type of event just hover over the event and copy the type
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(shipping);
  };

  return (
    <div className="shipping">
      <button className="back-btn">
        <BiArrowBack />
      </button>
      <form onSubmit={onSubmitHandler}>
        <h1>Shipping Address</h1>
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={shipping.address}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={shipping.city}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Postal Code"
          name="postalCode"
          value={shipping.postalCode}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={shipping.country}
          onChange={changeHandler}
        />
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Shipping;
