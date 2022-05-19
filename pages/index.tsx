import React from 'react';
import { NextPage } from '../typings/types';
import { TopSection } from '@/components/TopSection/TopSection';

import type { GetStaticProps } from 'next';
import { Tabs } from '@/components/Tabs/Tabs';

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  const login = () => {};

  return (
    <div className="space-y-2">
      <TopSection />

      <Tabs />
    </div>
  );
};

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  return {
    props: {},
  };
};

export default IndexPage;
