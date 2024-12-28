import React, {memo} from "react";

const ShippingForm = memo(({ onSubmit }) => {
    console.log("ShippingForm");
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const orderDetails = {
      ...Object.fromEntries(formData),
    };
    onSubmit(orderDetails);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;
