import React from 'react';

export interface IButtonSvg {
  css?: string;
  children?: React.ReactElement;
  handleClick: () => void;
}
