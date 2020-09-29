import React from "react";
import CarouselSlider1 from "../../assets/slide3-1.jpg";
import CarouselSlider2 from "../../assets/slide2-1.jpg";
import {
  CarouselSlider,
  CarouselSliderContainer,
  CarouselSliderContent,
  CarouselSliderImage,
  CarouselButtonOne,
} from "./Carousel.style";
import useOnScreen from "../../utils/useOnScreen";

const Carousel = () => {
  const [ref, visible] = useOnScreen({
    threshold: 0.5,
    rootMargin: "-16px",
  });
  return (
    <div>
      <CarouselSliderContainer>
        <CarouselSlider>
          <CarouselSliderContent>
            Empowering People. Delivering Results.
            <br />
            <CarouselButtonOne>Buy consulting</CarouselButtonOne>
          </CarouselSliderContent>
          <CarouselSliderImage src={CarouselSlider1} alt="display One" />
          <CarouselSliderImage src={CarouselSlider2} alt="display Two" />
          {/* <CarouselSliderImage src={CarouselSlider3} alt="display Three" />
          <CarouselSliderImage src={CarouselSlider4} alt="display Four" />
          <CarouselSliderImage src={CarouselSlider5} alt="display Five" />
          <CarouselSliderImage src={CarouselSlider6} alt="display Six" /> */}
          <CarouselSliderImage src={CarouselSlider1} alt="display One" />
        </CarouselSlider>
      </CarouselSliderContainer>
      {/* <img src={CarouselSlider1} alt="display One" /> */}
    </div>
  );
};

export default Carousel;
