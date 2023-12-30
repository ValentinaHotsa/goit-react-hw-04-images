import React, { useState, useEffect, useCallback } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import fetchImage from './FetchApi/FetchApi';

export function App() {
  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const [totalImages, setTotalImages] = useState(null);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [hits, setHits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [modalImages, setModalImages] = useState('');
  const [page, setPage] = useState(1);

  const getImages = useCallback(async () => {
    if (!inputData) {
      return;
    }
    setIsLoading(true);

    try {
      // setError(error);
      const { hits, total } = await fetchImage(inputData, page);
      if (total) {
        setItems(prevState => [...prevState, ...hits]);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setIsLoading(isLoading);
    }
  }, [inputData, page]);

  const handleFormSubmit = newInputData => {
    if (newInputData !== inputData) {
      setInputData(newInputData);
      setPage(1);
      setItems([]);
    }
  };
  useEffect(() => {
    if (inputData) {
      getImages();
    }
  }, [inputData, page, getImages]);

  const handleClick = () => {
    setPage(prev => prev + 1);
  };

  const handleImageClick = imageUrl => {
    setModalImages(imageUrl);
    setIsShowModal(true);
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
    setModalImages('');
  };

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery items={items} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
      {items.length > 0 && !isLoading && (
        <Button onClick={handleClick}>
          {isShowMore ? 'Hide images' : 'Show more'}
        </Button>
      )}
      {isShowModal && (
        <Modal
          isOpenModal={isShowModal}
          item={modalImages}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
