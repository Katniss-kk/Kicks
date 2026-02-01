import CategoriesSlider from '@/widgets/CategoriesSlider';
import AdBaner from '@shared/ui/AdBaner';
import NewsDrops from '@widgets/NewsDrops';

export default function HomePage() {
  return (
    <section>
      <AdBaner />
      <NewsDrops />
      <CategoriesSlider />
    </section>
  );
}
