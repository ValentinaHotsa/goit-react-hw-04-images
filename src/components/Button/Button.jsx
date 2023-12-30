import css from './button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={css.buttonLoadMore} onClick={onClick}>
      Load more{''}
    </button>
  );
};
