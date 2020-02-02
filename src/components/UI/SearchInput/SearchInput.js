import React from 'react';
import styled from 'styled-components';

const SearchInput = () => {
   const Search = styled.input`
      width: 50%;
      height: 30px;
      border-radius: 15px;
      outline: none;
      font-family: Roboto Condensed;
      font-size: 14px;
      text-align: center;
   `;
   return (
      <React.Fragment>
         <p style={{ textAlign: 'center', marginTop: '5%' }}>
            Search any Pokemon by name or by its Pokedex number!
         </p>
         <Search placeholder={'Type in Pokemon name or id'} />
      </React.Fragment>
   );
};

export default SearchInput;
