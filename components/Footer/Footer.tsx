import React from 'react';
import { Link } from '@/components/Link/Link';

import { FOOTER_PATH, SOCIAL_ICONS } from '@/constants/constants';
import { ContactUsForm } from '../ContactUsForm/ContactUsForm';
import Image from 'next/image';

export type FooterProps = {};

export const Footer: React.FC<FooterProps> = (props) => {
  const today = new Date();
  return (
    <footer className="w-full bg-red-cc0000 text-white">
      <div className="container space-y-4 rounded-bl-xl lg:flex lg:space-y-0 lg:space-x-8">
        <div className="flex-1 space-y-6 text-xs">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              {SOCIAL_ICONS.map((social, idx) => (
                <Link key={idx} href={social.link} className="hover:underline">
                  <social.icon className="h-8 w-8" />
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-start space-y-2 sm:flex-row sm:space-y-0  ">
              {FOOTER_PATH.map((path, idx) => (
                <Link
                  key={idx}
                  href={path.link}
                  className="last:border-r-0 hover:underline sm:border-r sm:border-gray-300 sm:px-2 sm:first:pl-0"
                >
                  {path.name}
                </Link>
              ))}
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </p>
        </div>
        <div className="grid space-y-2 lg:flex lg:flex-col">
          <div>Get in touch</div>
          <ContactUsForm />
        </div>
      </div>

      <div className="bg-white ">
        <div className="container flex flex-wrap  justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Journify Logo"
              width="80"
              height="80"
              priority
            />
          </Link>
          <span className="flex items-center text-sm text-black ">
            © {today.getFullYear()} Target. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
