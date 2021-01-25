// import React from 'react';
import './search-panel.css'

const SearchPanel = ({ onSearchChange }) => {
  const searchText = 'Type here to search';


  return <input className="form-control search-input" type="text" placeholder={searchText} onChange={(e) => { onSearchChange(e.target.value) }} />;
}

export default SearchPanel;