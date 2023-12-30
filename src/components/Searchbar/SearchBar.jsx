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
