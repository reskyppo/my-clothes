import React from "react";

interface Props {
  img: String;
  title: String;
  price: Number;
}

const Product: React.FC<Props> = () => {
  return (
    <div>
      <img src="" alt="" />
      <h3>title</h3>
      <p>price</p>
    </div>
  );
};

export default Product;
