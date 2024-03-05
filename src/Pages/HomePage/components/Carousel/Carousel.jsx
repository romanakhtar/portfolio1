import { useState } from 'react';
import { CarouselData } from '../../../../demodata';
import './Carousel.css';
import CarouselItem from './CarouselItem';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  setInterval(function () {
    !document.hidden && setCurrentIndex(prev => (prev == 0 ? 1 : 0));
  }, 5000);
  return (
    <div className="carousel d-flex">
      <div className="carousel__wrapper ">
        <div
          className="carousel__slides"
          style={{ transform: `translate(-${currentIndex * 100}%)` }}
        >
          {CarouselData.map((item, index) => (
            <CarouselItem key={index} {...item} />
          ))}
        </div>
      </div>
      <div className="carousel__btns d-flex">
        {CarouselData.map((item, index) => (
          <div
            key={index}
            className={`${
              currentIndex == index ? 'carousel__active' : 'carousel__btn'
            } d-flex`}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="carousel__btn-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
