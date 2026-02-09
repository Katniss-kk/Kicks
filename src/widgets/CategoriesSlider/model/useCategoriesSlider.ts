import type { Swiper as SwiperType } from 'swiper';
import { useRef } from 'react';

export default function useCategoriesSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleClickPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleClickNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return { swiperRef, handleClickNext, handleClickPrev };
}
