type RowProp = {
  link: string;
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

type FooterSocialProp = {
  link: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type FooterPathProp = {
  link: string;
  name: string;
};

import IconLock from '@/assets/svg/icon_lock.svg';

import IconFB from '@/assets/svg/icon_fb.svg';
import IconIG from '@/assets/svg/icon_instagram.svg';
import IconWhatsapp from '@/assets/svg/icon_whatsapp.svg';

export const NAV_FIRST_ROW: RowProp[] = [
  {
    link: '#',
    name: 'BSB 802 126',
  },
  {
    link: '#',
    name: 'eStatement Login',
    icon: IconLock,
  },
  {
    link: '#',
    name: 'Internet Login',
    icon: IconLock,
  },
];

export const NAV_SECOND_ROW: RowProp[] = [
  {
    link: '#',
    name: 'Loans',
  },
  {
    link: '#',
    name: 'Banking',
  },
  {
    link: '#',
    name: 'Why Macquarie',
  },
  {
    link: '#',
    name: 'Support',
  },
];

export const FOOTER_PATH: FooterPathProp[] = [
  {
    name: 'Privacy',
    link: '#',
  },
  {
    name: 'Security',
    link: '#',
  },
  {
    name: 'Disclosure Documents',
    link: '#',
  },
  {
    name: 'Contact Us',
    link: '#',
  },
];

export const SOCIAL_ICONS: FooterSocialProp[] = [
  {
    icon: IconFB,
    link: 'https://www.facebook.com',
  },
  {
    icon: IconIG,
    link: 'https://www.instagram.com',
  },
  {
    icon: IconWhatsapp,
    link: 'https://www.whatsapp.com',
  },
];
