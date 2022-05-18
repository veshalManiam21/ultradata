import React from 'react';
import { InputText } from '../InputText/InputText';
import IconSearch from '@/assets/svg/icon_search.svg';

export type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <InputText
      placeholder="Search"
      className="rounded-md border border-red-cc0000 placeholder:text-red-cc0000"
      InputSideIcon={IconSearch}
      inputSideContentDirection="right"
    />
  );
};
