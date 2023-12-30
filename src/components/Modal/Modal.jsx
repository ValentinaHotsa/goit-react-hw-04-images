import { useEffect } from 'react';
import css from './modal.module.css';

export default function Modal({ onCloseModal, item }) {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    });
  });

  const handleImageClick = e => {
    e.stopPropagation();
  };

  return (
    <div className={css.overlay} onClick={onCloseModal}>
      <div className={css.modal}>
        <img src={item} alt="" onClick={handleImageClick} />
      </div>
    </div>
  );
}
