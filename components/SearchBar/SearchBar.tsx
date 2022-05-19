import React from 'react';
import { InputText } from '../InputText/InputText';
import IconSearch from '@/assets/svg/icon_search.svg';

export type SearchBarProps = {};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <InputText
      placeholder="Search"
      className="border-purple-39007a placeholder:text-purple-39007a rounded-md border"
      InputSideIcon={IconSearch}
      inputSideContentDirection="right"
    />
  );
};
