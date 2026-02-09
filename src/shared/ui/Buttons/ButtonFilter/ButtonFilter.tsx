import type { IButtonFilter } from './libs/types';

export default function ButtonFilter<T extends string | number>({
  name,
  children,
  css,
  disabled,
  handleClick,
}: IButtonFilter<T>) {
  return (
    <button className={css} onClick={() => handleClick(name)} disabled={disabled}>
      {children}
    </button>
  );
}
