import css from './imageGalleryItem.module.css';
export const ImageGalleryItem = ({ hit, onImageClick }) => {
  const click = () => {
    onImageClick(hit.webformatURL);
  };

  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImage}
        src={hit.webformatURL}
        alt={hit.title}
        onClick={click}
      />
    </li>
  );
};
