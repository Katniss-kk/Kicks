import LinkCategory from '../Links/LinkCategory';
import style from './CardCategories.module.css';
import { ICardCategories } from './libs/types';

export default function CardCategories({ category }: ICardCategories) {
  return (
    <div className={style.categotiesContainer}>
      <img src={category.img} alt={category.title} className={style.image} />
      <h5 className={style.title}>{category.title}</h5>
      <LinkCategory link={category.link} css={style.link}/>
    </div>
  );
}
