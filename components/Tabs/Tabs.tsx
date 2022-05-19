import { TABS_DETAILS } from '@/constants/constants';
import React from 'react';
import { Link } from '@/components/Link/Link';

export type TabsProps = {};

export const Tabs: React.FC<TabsProps> = (props) => {
  return (
    <div className="border-t border-b border-purple-39007a ">
      <div className="container flex flex-col justify-between space-y-4   md:flex-row md:space-y-0">
        {TABS_DETAILS.map((tab, idx) => (
          <Link
            key={idx}
            href={tab.link}
            className="group flex flex-col bg-purple-39007a text-center text-xs text-white hover:underline md:items-center md:justify-center md:space-y-2 md:bg-white md:text-black"
          >
            {tab.icon ? (
              <div className="md:group-hover:bg-purple-5916a6  flex justify-center rounded-md bg-purple-39007a p-2">
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
