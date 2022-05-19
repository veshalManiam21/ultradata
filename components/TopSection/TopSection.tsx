import Image from 'next/image';
import React from 'react';
import { Button } from '../Button/Button';
import { InfoCard } from '../InfoCard/InfoCard';

export type TopSectionProps = {
  textDirection?: 'left' | 'right';
};

export const TopSection: React.FC<TopSectionProps> = ({
  textDirection = 'left',
}) => {
  const infoContent = (
    <InfoCard
      content={
        <div className="flex flex-col flex-wrap space-y-2 lg:space-y-4">
          <div className="text-3xl lg:text-4xl">Special Housing Home Loan</div>
          <div className="flex flex-wrap text-2xl lg:text-3xl">
            <span className="pr-4">
              3.89<sup>%p.a.</sup>
            </span>

            <span>
              4.03<sup>%p.a.</sup>
            </span>
          </div>
          <div className="text-xl lg:text-2xl">Great low rates made simple</div>
        </div>
      }
      buttonText="Apply Now"
      href="#"
      containerClassName="space-y-4 lg:space-y-8 justify-center"
      buttonContainerClassName="w-max"
    />
  );

  return (
    <div className="md:space-y- container flex flex-col-reverse space-y-4 space-y-reverse md:flex-row md:space-y-0 lg:space-x-4">
      {textDirection === 'left' ? infoContent : null}

      <div className="aspect-w-2 aspect-h-1 relative w-full md:aspect-h-2 md:aspect-w-6">
        <Image src="/assets/images/banner.jpeg" alt="banner" layout="fill" />
      </div>

      {textDirection === 'right' ? infoContent : null}
    </div>
  );
};
