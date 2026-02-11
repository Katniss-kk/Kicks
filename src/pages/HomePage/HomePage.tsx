import AdBaner from '@shared/ui/AdBaner';
import NewsDrops from '@widgets/NewsDrops';
import { lazy } from 'react';
const CategoriesSlider = lazy(() => import('@/widgets/CategoriesSlider'));

export default function HomePage() {
  return (
    <section>
      <AdBaner />
      <NewsDrops />
      <CategoriesSlider />
    </section>
  );
}
