import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentPage, handlePageChange }) {
  return (
  <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  );
}
