type RowProp = {
  link: string;
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

import IconLock from '@/assets/svg/icon_lock_3.svg';

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
