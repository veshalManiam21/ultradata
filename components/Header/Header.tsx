import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Link } from '@/components/Link/Link';
import { NAV_FIRST_ROW, NAV_SECOND_ROW } from '@/constants/constants';
import IconMenu from '@/assets/svg/icon_hamburger.svg';
import { useModal } from '@/providers/ModalProvider';
import { SideMenu } from './SideMenu';
import { Navigation } from '../Navigation/Navigation';

export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = (props) => {
  const redRowNavStyle = 'flex items-center px-4 py-2';

  const [showSideMenu, setShowSideMenu] = useState(false);

  const modal = useModal();

  const openSideMenu = () => {
    setShowSideMenu(true);
    modal.openModal({
      align: 1,
      animateContentFrom: 'left',
      containerClassName: 'relative pointer-events-none',
      overlayClassName: '',
      onClose: () => {
        setShowSideMenu(false);
      },
      content: <SideMenu />,
    });
  };

  return (
    <header className="sticky top-0 z-50 flex h-auto justify-between bg-white shadow-md">
      <div className="flex-0 flex flex-row px-4 py-2">
        <div className="flex flex-row items-center justify-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Journify Logo"
              width="80"
              height="80"
              priority
            />
          </Link>
        </div>
      </div>
      <Navigation
        containerClassName="hidden w-full flex-1 flex-col lg:flex"
        navClassName="flex-row justify-end items-center odd:bg-red-cc0000 odd:text-white"
      />

      <button
        onClick={openSideMenu}
        className="flex items-center px-4 lg:hidden"
      >
        <IconMenu />
      </button>
    </header>
  );
};
