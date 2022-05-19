import { TABS_DETAILS } from '@/constants/constants';
import React from 'react';
import { Link } from '@/components/Link/Link';

export type TabsProps = {};

export const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className="border-t border-b border-red-cc0000">
      <div className="container flex flex-col justify-between space-y-4 md:flex-row  md:space-y-0">
        {TABS_DETAILS.map((tab, idx) => (
          <Link
            key={idx}
            href={tab.link}
            className="group flex flex-col bg-red-cc0000 text-center text-xs text-white hover:underline md:items-center md:justify-center md:space-y-2 md:bg-white md:text-black"
          >
            {tab.icon ? (
              <div className="flex  justify-center rounded-md bg-red-cc0000 p-2 md:group-hover:bg-red-600">
                <tab.icon className="h-8 w-8" />
              </div>
            ) : null}
            <div>{tab.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
