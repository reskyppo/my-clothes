import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "./Card";

const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
const items = [
  <Card
    label="Girls"
    color="bg-pinky"
    img="/images/Girls.png"
    onDragStart={handleDragStart}
  />,
  <Card
    label="Boys"
    color="bg-blue"
    img="/images/Boys.png"
    onDragStart={handleDragStart}
  />,
];

const Carousel = () => {
  return (
    <AliceCarousel
      animationType="fadeout"
      animationDuration={800}
      disableButtonsControls
      disableDotsControls
      items={items}
      mouseTracking
      responsive={responsive}
    />
  );
};

export default Carousel;
