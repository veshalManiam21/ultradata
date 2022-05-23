import { SIDE_NAV } from '@/constants/constants';
import React from 'react';
import { Link } from '@/components/Link/Link';

export type SideNavProps = {};

export const SideNav: React.FC<SideNavProps> = (props) => {
  return (
    <div className="fixed bottom-0 z-30 flex h-auto w-full flex-row justify-center bg-purple-39007a font-semibold xl:top-0 xl:h-full xl:w-auto xl:flex-col">
      <div className="flex  flex-row text-white  lg:overflow-x-scroll xl:flex-col xl:items-center xl:justify-between xl:space-y-8">
        {SIDE_NAV.map((nav, idx) => (
          <Link
            key={idx}
            href={nav.link}
            className="flex w-full flex-col items-center p-3 text-xs hover:bg-purple-5916a6 xl:px-1"
          >
            {nav.icon ? <nav.icon className="h-8 w-8" /> : null}
            <span className="hidden text-center line-clamp-1 ">{nav.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
