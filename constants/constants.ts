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
import IconApply from '@/assets/svg/icon_apply.svg';
import IconLocate from '@/assets/svg/icon_locate.svg';
import IconInsurance from '@/assets/svg/icon_insurance.svg';
import IconGraph from '@/assets/svg/icon_graph.svg';
import IconCalculator from '@/assets/svg/icon_calculator.svg';
import IconCall from '@/assets/svg/icon_call.svg';
import IconHome from '@/assets/svg/icon_home.svg';
import IconSavings from '@/assets/svg/icon_savings.svg';

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

export const TABS_DETAILS: RowProp[] = [
  {
    link: '#',
    name: 'Home Loans',
    icon: IconHome,
  },
  {
    link: '#',
    name: 'Calculators',
    icon: IconCalculator,
  },
  {
    link: '#',
    name: 'Rates & Fees',
    icon: IconGraph,
  },
  {
    link: '#',
    name: 'Savings',
    icon: IconSavings,
  },
  {
    link: '#',
    name: 'Insurance',
    icon: IconInsurance,
  },
  {
    link: '#',
    name: 'Contact Us',
    icon: IconCall,
  },
];
