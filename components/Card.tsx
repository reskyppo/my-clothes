import React from "react";
interface Props {
  label: string;
  color: string;
  img: string;
}

const Card: React.FC<Props> = ({ label, color, img }) => {
  return (
    <div
      className={[
        " w-2/3 sm:w-1/2 md:max-w-sm h-36 rounded-xl mx-8 flex justify-between my-1 sm:my-0",
        color,
      ].join(" ")}
    >
      <h2 className="text-white font-semibold text-3xl md:px-4 mt-4">
        {label}
      </h2>
      <img
        src={img}
        alt={`icon for ${label}`}
        className="object-fill h-36 rounded-b-xl"
      />
    </div>
  );
};

export default Card;
