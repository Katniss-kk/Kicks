import type React from 'react';

export interface IFullModal {
  title: string;
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
  handleClickReset: () => void;
  handleClickApply: () => void;
}
