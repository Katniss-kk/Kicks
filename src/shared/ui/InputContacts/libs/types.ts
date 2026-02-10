import type React from 'react';

export interface IInputContacts {
  placeHolder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  validation: boolean;
}
