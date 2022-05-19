import React from 'react';
import { InfoCard } from '../InfoCard/InfoCard';

export type CommunitySectionProps = {};

export const CommunitySection: React.FC<CommunitySectionProps> = (props) => {
  return (
    <div className="container space-y-8">
      <div className="text-center text-2xl font-light text-black">
        Banking with friends (community section)
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <div className="grow space-y-2 ">
          <div className="border border-black py-8 px-12 ">
            <InfoCard
              content={
                <div className="flex flex-col items-center justify-center space-y-2 ">
                  <div>Latest news at Macquarie</div>

                  <div className="text-center text-sm font-light">
                    Fusce non era ullamcorper, interdum augue sed, euismod
                    enuim.Fusce non era ullamcorper, interdum augue sed, euismod
                    enuim,Fusce non era ullamcorper, interdum augue sed, euismod
                    enuim
                  </div>
                </div>
              }
              buttonText="Learn More"
              href="#"
            />
          </div>
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <div className="flex min-h-xs flex-1 grow items-center justify-center border border-black bg-red-cc0000 py-16 px-4 text-white md:min-h-fit">
              <div>Social Feed</div>
            </div>
            <div className="flex-1  border border-black py-16 px-4">
              <InfoCard
                content={
                  <div className="flex flex-col items-center justify-center text-center">
                    <div>Need a sponsor for your community projectt?</div>
                  </div>
                }
                buttonText="Apply for Community Support"
                href="#"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full items-center border  border-black p-8 md:max-w-xs">
          <InfoCard
            content={
              <div className="flex flex-col items-center justify-center space-y-2">
                <div>Client Testimonial</div>

                <div className="text-center text-sm font-light">
                  Fusce non era ullamcorper, interdum augue sed, euismod
                  enuim.Fusce non era ullamcorper, interdum augue sed, euismod
                  enuim..
                </div>
              </div>
            }
            buttonText="Watch Simon's Story"
            href="#"
          />
        </div>
      </div>
    </div>
  );
};
