import LinkCatalog from '../Links/LinkCatalog';
import style from './AdBaner.module.css';
import { ImgBanner, TextBanner } from './libs/AdBanerConstants';

export default function AdBaner() {
  return (
    <div className={style.adBaner}>
      <h1 className={style.textTitle}>
        {TextBanner.title}
        <span className={style.textTitleSpan}>{TextBanner.titleSpan}</span>
      </h1>
      <div className={style.container}>
        <img src={ImgBanner[0].image} alt={ImgBanner[0].alt} className={style.imgBaner} />
        <div className={style.contentContainer}>
          <span className={style.span}>{TextBanner.span}</span>
          <div className={style.containerMain}>
            <div className={style.mainTextContainer}>
              <h2 className={style.brandName}>{TextBanner.brand}</h2>
              <p className={style.aboutBrand}>{TextBanner.about}</p>
              <LinkCatalog title={TextBanner.link} link="/catalog/new" />
            </div>
            <div className={style.secondImageContainer}>
              <img src={ImgBanner[1].image} alt={ImgBanner[1].alt} className={style.secondImg} />
              <img src={ImgBanner[2].image} alt={ImgBanner[2].alt} className={style.secondImg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
