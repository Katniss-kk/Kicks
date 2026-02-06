import React from 'react';

export interface IButtonPagination {
  children: React.ReactElement | string;
  css?: string;
  active?: boolean;
  handleClick?: () => void;
}
