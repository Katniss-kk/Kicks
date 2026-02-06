import { useState } from 'react';

export default function useHeaderMenu() {
  const [modal, setModal] = useState<boolean>(false);
  const onCloseModal = () => {
    setModal(!modal);
  };

  return {
    onCloseModal,
    modal,
  };
}
