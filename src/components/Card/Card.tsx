import { CardProps } from "../../types/types";

const Card: React.FC<CardProps> = ({ src, alt }) => {
  return (
    <div className="mx-2 flex-none w-30">
      <div
        className="flex justify-center items-center mb-4"
        style={{ minHeight: "250px" }}
      >
        <img src={src} alt={alt || "image"} />
      </div>
      <div className="text-center flex-grow">
        <h3 className="text-l font-bold text-color-scheme-detail truncate">
          placeholder h3
        </h3>
        <p className=" text-color-scheme-detail">placeholder p</p>
        <p className=" text-color-scheme-detail">placeholder p</p>
      </div>
    </div>
  );
};
export default Card;
