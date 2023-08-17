import React from 'react';
import CountryDropdown from './CountryDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
import PropertyDropdown from './PropertyDropdown';
import { BiSearch} from 'react-icons/bi'
import Buttons from './Buttons';

const Search = () => {
  return (
    <div className='flex px-[30px] py-6 max-w-[1170px] mx-auto flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 lg:shadow-violet-200 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <Buttons value={<BiSearch/>} />
  </div>
  )
};

export default Search;
