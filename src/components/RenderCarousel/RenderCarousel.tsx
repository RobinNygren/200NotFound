import React from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import { RenderCarouselProps } from "../../types/types";
import { NavLink, useParams } from "react-router-dom";

const RenderCarousel: React.FC<RenderCarouselProps> = ({ images }) => {
  return (
    <div>
      <Carousel title="subject">
        {images.map((image, index) => (
          <NavLink to={`${image.link}`}>
            <Card key={index} src={image.src} alt={image.alt} />
          </NavLink>
        ))}
      </Carousel>
    </div>
  );
};

export default RenderCarousel;
