import React from 'react';
import { NextPage } from '../typings/types';
import { TopSection } from '@/components/TopSection/TopSection';
import { Tabs } from '@/components/Tabs/Tabs';
import { MidSection } from '@/components/MidSection/MidSection';

import type { GetStaticProps } from 'next';
import { CommunitySection } from '@/components/CommunitySection/CommunitySection';
import { SiteMap } from '@/components/SiteMap/SiteMap';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  const login = () => {};

  return (
    <div className="space-y-8">
      <TopSection />
      <Tabs />
      <MidSection />
      <CommunitySection />
      <SiteMap />
    </div>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
