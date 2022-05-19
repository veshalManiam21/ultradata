import React from 'react';
import { Button } from '@/components/Button/Button';
import { Url } from 'url';

export type InfoCardProps = {
  content: React.ReactNode;
  containerClassName?: string;
  onClick?: () => void;
  href?: string;
  isButtonInverted?: boolean;
  buttonText: string;
  buttonContainerClassName?: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  containerClassName = 'space-y-4 flex flex-col items-center',
  content,
  onClick,
  href,
  isButtonInverted = false,
  buttonText,
  buttonContainerClassName = 'w-auto md:w-max text-center rounded-lg',
}) => {
  return (
    <div className={containerClassName}>
      {content}

      <Button
        className={buttonContainerClassName}
        invertedColor={isButtonInverted}
        href={href ?? undefined}
        onClick={!href ? onClick : undefined}
      >
        {buttonText}
      </Button>
    </div>
  );
};
