import Cancel from '@/assets/icons/Cancel';
import ButtonSvg from '../Buttons/ButtonSvg';
import style from './FullModal.module.css';
import type { IFullModal } from './libs/types';
import ButtonDefault from '../Buttons/ButtonDefault';
import FullModalConstants from './libs/FullModalConstants';

export default function FullModal({
  title,
  children,
  isOpen,
  onClose,
  handleClickReset,
  handleClickApply,
}: IFullModal) {
  if (isOpen) {
    return (
      <div className={style.modal}>
        <div className={style.modalContent}>
          <h3 className={style.title}>{title}</h3>
          <ButtonSvg handleClick={onClose} css={style.buttonClose}>
            <Cancel />
          </ButtonSvg>
        </div>
        <div className={style.modalChildren}>{children}</div>
        <div className={style.buttonsContainer}>
          <ButtonDefault handleClick={handleClickReset} css={style.resetButton}>
            {FullModalConstants[0]}
          </ButtonDefault>
          <ButtonDefault handleClick={handleClickApply} css={style.applyButton}>
            {FullModalConstants[1]}
          </ButtonDefault>
        </div>
      </div>
    );
  }
  return null;
}
