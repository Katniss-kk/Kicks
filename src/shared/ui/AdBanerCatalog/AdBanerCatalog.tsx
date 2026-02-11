import clsx from 'clsx';
import style from './AdBanerCatalog.module.css';
import AdBanerCatalogConstant from './libs/AdBanerCatalogConstants';

export default function AdBanerCatalog() {
  return (
    <div className={style.baner}>
        <img
          src={AdBanerCatalogConstant.img}
          alt={AdBanerCatalogConstant.span}
          className={style.image}
        />
      <div className={style.textContainer}>
        <p className={clsx(style.text, style.span)}>{AdBanerCatalogConstant.span}</p>
        <h1 className={clsx(style.text, style.title)}>{AdBanerCatalogConstant.title}</h1>
        <p className={clsx(style.text, style.paragraph)}>{AdBanerCatalogConstant.paragraph}</p>
      </div>
    </div>
  );
}
