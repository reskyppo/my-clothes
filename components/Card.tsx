import React from "react";
interface Props {
  label: string;
  color: string;
  img: string;
  onDragStart?: any;
}

const Card: React.FC<Props> = ({ label, color, img, onDragStart }) => {
  return (
    <div
      className={[
        "lg:w-1/4 h-36 rounded-xl mx-8 flex justify-between my-1 sm:my-0",
        color,
      ].join(" ")}
      onDragStart={onDragStart}
    >
      <h2 className="text-white font-semibold text-3xl px-4 mt-4">{label}</h2>
      <img
        src={img}
        alt={`icon for ${label}`}
        className="object-fill h-36 rounded-b-xl"
      />
    </div>
  );
};

export default Card;
