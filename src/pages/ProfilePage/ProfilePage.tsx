import Profile from '@/entities/Profile/ui';
import style from './ProfilePage.module.css';

export default function ProfilePage() {
  return (
    <section className={style.profile}>
      <Profile />
    </section>
  );
}
