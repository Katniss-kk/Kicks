import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './CategoriesSlider.module.css';
import { useRef } from 'react';
import ButtonSliderCategories from '@/shared/ui/Buttons/ButtonSliderCategories';

import categories from '../../../public/db/categories.json';
import CardCategories from '@/shared/ui/CardCategories';
import CategoriesSliderConstant from './libs/CategoriesSliderConstants';

export default function CategoriesSlider() {
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

  return (
    <div className={style.sliderContainer}>
      <div className={style.container}>
        <h4 className={style.title}>{CategoriesSliderConstant[0]}</h4>
        <div className={style.containerButton}>
          <ButtonSliderCategories
            handleClick={handleClickPrev}
            fill={style.arrowPrev}
            css={style.buttonPrev}
          />
          <ButtonSliderCategories
            handleClick={handleClickNext}
            fill={style.arrowNext}
            css={style.buttonNext}
          />
        </div>
      </div>
      <Swiper
        className={style.customSwiper}
        spaceBetween={0}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category.link}>
            <CardCategories category={category} />
            <CardCategories category={categories[index + 1] || categories[0]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
