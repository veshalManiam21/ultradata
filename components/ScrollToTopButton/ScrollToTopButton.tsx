import React from 'react';

import ToTopIcon from '@/assets/svg/icon_chevron_up.svg';

type ScrollToTopButtonProps = {
  className?: string;
};

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({
  className = '',
}) => {
  return (
    <button
      className="rounded-lg border border-purple-39007a bg-white p-4 shadow-md"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <ToTopIcon />
    </button>
  );
};
