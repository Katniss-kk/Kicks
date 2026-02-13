import Register from '@/widgets/Register/ui';
import style from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <section className={style.register}>
      <div className={style.registerContainer}>
      <Register />
      </div>
    </section>
  );
}
