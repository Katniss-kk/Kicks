import type React from 'react';

export interface IModal {
  children: React.ReactElement;
  isOpen: boolean;
  onClose: () => void;
}
