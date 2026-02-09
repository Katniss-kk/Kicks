import type React from 'react';

export interface IButtonFilter<T extends string | number> {
  handleClick: (name: T) => void;
  name: T;
  css?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
