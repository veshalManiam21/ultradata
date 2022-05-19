import { SITE_MAPS } from '@/constants/constants';
import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { Link } from '@/components/Link/Link';

import IconChevronUp from '@/assets/svg/icon_chevron_up.svg';
import IconChevronDown from '@/assets/svg/icon_chevron_down.svg';

export type SiteMapProps = {};

export const SiteMap: React.FC<SiteMapProps> = (props) => {
  const [isClosed, setIsClosed] = useState(false);

  const siteMap = (
    <button className="mb-4 flex items-center space-x-4">
      <span className="text-xl">Site Map</span>
      {isClosed ? (
        <IconChevronDown className="h-4  w-4" />
      ) : (
        <IconChevronUp className="h-4 w-4" />
      )}
    </button>
  );

  return (
    <div className="container">
      <Collapsible
        trigger={siteMap}
        onTriggerOpening={() => {
          setIsClosed(false);
        }}
        onTriggerClosing={() => {
          setIsClosed(true);
        }}
        open
      >
        <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0 ">
          {SITE_MAPS.map((siteMap, idx) => (
            <div key={idx} className="space-y-2">
              <div className="uppercase text-red-cc0000">{siteMap.title}</div>
              <ul className="flex flex-col space-y-2">
                {siteMap.children.map((link, idxC) => (
                  <li key={idxC}>
                    <Link
                      href={link.link}
                      className="text-sm font-light text-red-600 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  );
};
