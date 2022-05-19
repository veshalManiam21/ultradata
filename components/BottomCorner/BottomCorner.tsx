import React, { useEffect, useState } from 'react';
import { ScrollToTopButton } from '@/components/ScrollToTopButton/ScrollToTopButton';

export type BottomCornerProps = {};

export const BottomCorner: React.FC<BottomCornerProps> = () => {
  return (
    <div className="fixed bottom-24 right-2 z-40 flex flex-col items-center justify-end space-y-2 md:right-4 md:space-y-4">
      <ScrollToTopButton className="transform transition" />
    </div>
  );
};
