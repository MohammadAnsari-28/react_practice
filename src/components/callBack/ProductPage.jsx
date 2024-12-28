import React, {useCallback} from "react";
import ShippingForm from "./ShippingForm";

const ProductPage = ({theme}) => {
    const handleSubmit = useCallback((orderDetails) => {
        console.log(orderDetails);
      }, []);
    // const handleSubmit = (orderDetails) => {
    //     console.log(orderDetails);
    // }
      console.log("ProductPage", handleSubmit.toString());
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  )
};

export default ProductPage;
