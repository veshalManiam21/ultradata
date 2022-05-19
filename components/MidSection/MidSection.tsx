import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';

export type MidSectionProps = {};

export const MidSection: React.FC<MidSectionProps> = (props) => {
  const infoContainerClass =
    ' flex flex-col p-4 md:p-8 items-center w-full md:border-0 ';

  return (
    <div className="px-4 md:px-0">
      <div className="container">
        <div className="flex flex-col items-center justify-center rounded-lg border  border-red-cc0000 py-0 md:flex-row md:border">
          <InfoCard
            content={<div className="text-center">Promotional Campaign</div>}
            buttonText="Learn More"
            href="#"
            containerClassName={`space-y-8 grow  ${infoContainerClass}`}
          />
          <InfoCard
            content={
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div>Latest news at Macquarie</div>

                <div className="text-center text-sm  font-light">
                  Fusce non era ullamcorper, interdum augue sed, euismod
                  enuim...
                </div>
              </div>
            }
            buttonText="Read All"
            href="#"
            containerClassName={`space-y-4  md:max-w-xs border-t  border-red-cc0000  md:last:border-l md:last:border-t-0 ${infoContainerClass}`}
          />
        </div>
      </div>
    </div>
  );
};
