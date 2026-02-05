import type React from 'react';

export interface IButtonDefault {
  handleClick: () => void;
  css?: string;
  children: React.ReactElement | string;
}
