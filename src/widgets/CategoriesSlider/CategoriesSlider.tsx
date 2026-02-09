import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import style from './CategoriesSlider.module.css';
import ButtonSliderCategories from '@/shared/ui/Buttons/ButtonSliderCategories';

import categories from '../../../public/db/categories.json';
import CardCategories from '@/shared/ui/CardCategories';
import CategoriesSliderConstant from './libs/CategoriesSliderConstants';
import useCategoriesSlider from './model/useCategoriesSlider';

export default function CategoriesSlider() {
  const { swiperRef, handleClickNext, handleClickPrev } = useCategoriesSlider();

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
