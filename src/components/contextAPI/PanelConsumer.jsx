import React from "react";
import Button from "./Button";
import ButtonConsumer from "./ButtonConsumer";

const PanelConsumer = (props) => {
  return (
    <div>
      <Button />
      <ButtonConsumer />
    </div>
  );
};

export default PanelConsumer;
