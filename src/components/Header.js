import React from 'react';
import Navigation from './Navigation';
import '../styles/Header.css';

export default function Header({ currentPage, handlePageChange }) {
  return (
  <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
  );
}
