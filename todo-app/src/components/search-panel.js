// import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  const searchStyle = {
    fontSize: '25px'
  };
  return <input type="text" style={searchStyle} placeholder={searchText} />;
}

export default SearchPanel;