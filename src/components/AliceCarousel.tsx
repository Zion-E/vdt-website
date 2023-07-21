import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// Define the component's props
interface CarouselProps {
  items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <AliceCarousel>
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </AliceCarousel>
  );
};

export default Carousel;
