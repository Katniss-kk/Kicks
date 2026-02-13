import Login from '@/widgets/Login/ui';
import style from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <section className={style.login}>
      <div className={style.containerLogin}>
        <Login />
      </div>
    </section>
  );
}
