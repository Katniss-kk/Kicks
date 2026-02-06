import { IButtonFilter } from './libs/types';

export default function ButtonFilter<T extends string | number>({
  name,
  children,
  css,
  handleClick,
}: IButtonFilter<T>) {
  return (
    <button className={css} onClick={() => handleClick(name)}>
      {children}
    </button>
  );
}
