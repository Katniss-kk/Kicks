import type { IPhotoSlider } from './libs/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './PhotoSlider.module.css';
import { useEffect, useRef, useState } from 'react';

export default function PhotoSlider({ product }: IPhotoSlider) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [swiperKey, setSwiperKey] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSwiperKey((prev) => prev + 1);
    }, 0);

    if (swiperRef.current) {
      swiperRef.current.destroy(true, true);
      swiperRef.current = null;
    }

    return () => clearTimeout(timeoutId);
  }, [product.id, product.image.length]);

  return (
    <div className={style.container}>
      <div className={style.containerSwiper}>
        <Swiper
          key={`swiper-${product.id}-${swiperKey}`}
          className={style.customSwiper}
          spaceBetween={0}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {product.image.map((photo, index) => (
            <SwiperSlide key={`slide-${product.id}-${index}`}>
              <img src={photo} alt="Photo product" className={style.imgSlider} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={style.photoContainer}>
        {product.image.map((photo, index) => (
          <img
            src={photo}
            alt="Photo product"
            className={style.photo}
            key={`thumb-${product.id}-${index}`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}