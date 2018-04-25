import React from 'react';
import './search.css';

// function Search(props) {
//   return(
//     <form action=""></form>
//   )
// }

const Search = () => (
  <form className="Search">
    <input
      className="Search-input"
      type="text"
      placeholder="Busca tu video favorito"
    />
  </form>
)

export default Search;