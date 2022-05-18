import { NAV_FIRST_ROW, NAV_SECOND_ROW } from '@/constants/constants';
import React from 'react';
import { Link } from '@/components/Link/Link';

import { InputText } from '../InputText/InputText';
import { SearchBar } from '../SearchBar/SearchBar';

export type NavigationProps = {
  containerClassName: string;
  navClassName?: string;
  isSideMenu?: boolean;
};

export const Navigation: React.FC<NavigationProps> = ({
  containerClassName,
  navClassName = 'border-red-cc0000',
  isSideMenu,
}) => {
  const redRowNavStyle =
    'flex items-center px-4 py-2 h-full hover:underline text-sm';

  return (
    <div className="w-full space-y-2">
      {isSideMenu ? (
        <div className="lg:hidden">
          <SearchBar />
        </div>
      ) : null}

      <div className={containerClassName}>
        <div className={`flex flex-1 border-b ${navClassName}`}>
          {NAV_FIRST_ROW.map((nav, idx) => (
            <Link href={nav.link} key={idx} className={redRowNavStyle}>
              <div className="flex items-center">
                {nav.icon ? <nav.icon className="h-6 w-6" /> : null}
                {nav.name}
              </div>
            </Link>
          ))}
        </div>
        <div className={`flex flex-1 ${navClassName}`}>
          {NAV_SECOND_ROW.map((nav, idx) => (
            <Link href={nav.link} key={idx} className={redRowNavStyle}>
              {nav.name}
            </Link>
          ))}

          <div className="hidden py-2 px-4 lg:block ">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};
