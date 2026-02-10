import style from './Recomendations.module.css';
import CardProduct from '@/entities/CardProduct/ui';
import RecommendationsConstant from './libs/RecommendationsConstant';
import useRecommendations from './model/useRecommendations';

export default function Recomendations() {
  const { rec } = useRecommendations();

  if (rec) {
    return (
      <div className={style.recom}>
        <h2 className={style.title}>{RecommendationsConstant.title}</h2>
        <div className={style.container}>
          {rec.map((product) => (
            <CardProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }
}
