import { NavLink } from 'react-router-dom';
import FooterConstants from './libs/FooterConstants';
import style from './Footer.module.css';
import LogoSvg from '@/assets/LogoSvg/LogoSvg';

export default function Footer() {
  return (
    <footer className={style.footer}>
      {FooterConstants.map((section) => (
        <div key={section.title} className={style.container}>
          <h6 className={style.title}>{section.title}</h6>
          <div className={style.linkContainer}>
            {section.links.map((linkItem) => (
              <NavLink key={linkItem.text} to={linkItem.link} className={style.link}>
                {linkItem.text}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
      <span className={style.logo}>
        <LogoSvg />
      </span>
    </footer>
  );
}
