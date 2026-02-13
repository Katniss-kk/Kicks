import ProfileButton from '@/widgets/ProfileLink';
import style from './Header.module.css';
import BasketCounter from '@features/BasketCounter';
import LogoLink from '@shared/ui/Links/LogoLink';
import HeaderMenu from '@widgets/HeaderMenu';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <HeaderMenu />
        <div className={style.logoContainer}>
        <LogoLink />
        </div>
        <div className={style.userContainer}>
          <ProfileButton />
          <BasketCounter />
        </div>
      </div>
    </header>
  );
}
