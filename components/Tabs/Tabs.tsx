import { TABS_DETAILS } from '@/constants/constants';
import React from 'react';
import { Link } from '@/components/Link/Link';

export type TabsProps = {};

export const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className="border-purple-39007a border-t border-b ">
      <div className="container flex flex-col justify-between space-y-4   md:flex-row md:space-y-0">
        {TABS_DETAILS.map((tab, idx) => (
          <Link
            key={idx}
            href={tab.link}
            className="bg-purple-39007a group flex flex-col text-center text-xs text-white hover:underline md:items-center md:justify-center md:space-y-2 md:bg-white md:text-black"
          >
            {tab.icon ? (
              <div className="bg-purple-39007a  flex justify-center rounded-md p-2 md:group-hover:bg-red-600">
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
