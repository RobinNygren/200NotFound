import React from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

const RenderCarousel: React.FC = () => {
  return (
    <div>
      <Carousel title="subject">
        <Card />
      </Carousel>
    </div>
  );
};

export default RenderCarousel;
