import React from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { RenderCarouselProps } from "../../types/types";

const RenderCarousel: React.FC<RenderCarouselProps> = ({ images }) => {
  return (
    <div>
      <Carousel title="subject">
        {images.map((image, index) => (
          <Card key={index} src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </div>
  );
};

export default RenderCarousel;
