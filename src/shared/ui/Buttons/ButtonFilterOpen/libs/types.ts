import React from 'react';

export interface IButtonFilterOpen {
  name: string;
  svg: React.ReactElement;
  handleClick: (content: string) => void;
}
