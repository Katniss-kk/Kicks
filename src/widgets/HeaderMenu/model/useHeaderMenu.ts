import CheckIsDesktop from '@/libs/CheckIsDesktop';
import { useState } from 'react';

export default function useHeaderMenu() {
  const [modal, setModal] = useState<boolean>(false);
  const isDesktop = CheckIsDesktop();

  const onCloseModal = () => {
    setModal(!modal);
  };

  return {
    onCloseModal,
    modal,
    isDesktop,
  };
}
