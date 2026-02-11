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
        <LogoLink />
        <div className={style.userContainer}>
          <div className={style.userInteractive}>
          <ProfileButton />
          <BasketCounter />
          </div>
        </div>
      </div>
    </header>
  );
}
