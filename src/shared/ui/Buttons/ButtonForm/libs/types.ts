import type React from 'react';

export interface IButtonForm {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
