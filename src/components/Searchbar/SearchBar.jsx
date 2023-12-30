import React, { useState } from 'react';
import css from './searchbar.module.css';

export function SearchBar({ onSubmit }) {
  const [inputData, setInputData] = useState('');

  const handleChange = e => {
    setInputData(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (inputData === '') {
      alert('Please, enter something to search');
      return;
    }
    onSubmit(inputData);
    setInputData('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={css.searchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={inputData}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}

// import React, { useState, useEffect } from 'react';
// import { SearchBar } from './Searchbar/SearchBar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import Modal from './Modal/Modal';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import fetchImage from './FetchApi/FetchApi';

// export function App() {
//   const [inputData, setInputData] = useState('');
//   const [items, setItems] = useState([]);
//   const [totalImages, setTotalImages] = useState(null);
//   const [isShowMore, setIsShowMore] = useState(false);
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [hits, setHits] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [modalImages, setModalImages] = useState('');
//   const [page, setPage] = useState(1);

//   // state = {
//   //   inputData: '',
//   //   items: [],
//   //   page: 1,
//   //   totalImages: null,
//   //   isShowMore: false,
//   //   isShowModal: false,
//   //   hits: null,
//   //   isLoading: false,
//   //   error: '',
//   //   modalImages: '',
//   // };

//   const handleFormSubmit = inputData => {
//     if (this.state.inputData !== inputData) {
//       this.setState({ inputData, page: 1, items: [], totalImages: 0 });
//     }
//   };

//   useEffect(() => {
//     if (prevState.inputData !== inputData || prevState.page !== page) {
//       this.getImages();
//     }
//   });

//   // componentDidUpdate(prevProps, prevState) {
//   //   const { inputData, page } = this.state;
//   //   if (prevState.inputData !== inputData || prevState.page !== page) {
//   //     this.getImages();
//   //   }
//   // }

//   const getImages = async () => {
//     if (!inputData) {
//       return;
//     }
//     try {
//       this.setState({ isLoading: true, error: '' });
//       const response = await fetchImage(inputData, page);
//       this.setState(prevState => ({
//         items: prevState.items.concat(response.hits),
//       }));
//     } catch (error) {
//       console.log(error);
//       setError(error);
//     } finally {
//       setIsLoading(isLoading);
//     }
//   };

//   const handleClick = () => {
//     this.setState(prev => ({ page: prev.page + 1 }), getImages);
//   };

//   const handleImageClick = imageUrl => {
//     this.setState({ modalImage: imageUrl, isShowModal: true });
//   };
//   const handleCloseModal = () => {
//     this.setState({ isShowModal: false, modalImage: '' });
//   };

//   return (
//     <>
//       <SearchBar onSubmit={handleFormSubmit} />
//       <ImageGallery items={items} onImageClick={handleImageClick} />
//       {isLoading && <Loader />}
//       {error && <h1>{error}</h1>}
//       {items.length > 0 && !isLoading && (
//         <Button onClick={handleClick}>
//           {isShowMore ? 'Hide images' : 'Show more'}
//         </Button>
//       )}
//       {isShowModal && (
//         <Modal
//           isOpenModal={isShowModal}
//           item={modalImage}
//           onCloseModal={handleCloseModal}
//         />
//       )}
//     </>
//   );
// }
