import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from '@/components/Link/Link';
import { useModal } from '@/providers/ModalProvider';
import { useRouter } from 'next/router';

import IconClose from '@/assets/svg/icon_close.svg';
import journifyLogo from '@/public/assets/images/logo_2.png';
import { Navigation } from '../Navigation/Navigation';

type SideMenuProps = {};

export const SideMenu: React.FC<SideMenuProps> = (props) => {
  const { closeModal } = useModal();

  return (
    <div className="pointer-events-none relative w-screen lg:hidden">
      <section className="mini:max-w-64 pointer-events-auto h-screen max-w-xs overflow-y-auto bg-white">
        <>
          <section className="container w-full">
            <Link href="/" className="flex items-center">
              <Image
                src={journifyLogo}
                alt="Journify Logo"
                width="80"
                height="80"
                priority
              />
            </Link>
          </section>
          <nav className="container flex w-full flex-col items-start justify-center py-0 text-sm font-semibold">
            <Navigation
              containerClassName="flex-col flex w-full "
              navClassName="flex-col border-white odd:rounded-tl-xl odd:rounded-br-xl odd:bg-purple-39007a odd:text-white "
              isSideMenu
            />
          </nav>
        </>
      </section>

      <button
        className="pointer-events-auto absolute top-4 right-4"
        onClick={closeModal}
      >
        <IconClose height="32" width="32" />
      </button>
    </div>
  );
};
