import React from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { SideNav } from '@/components/SideNav/SideNav';
import { BottomCorner } from '../BottomCorner/BottomCorner';

type BaseLayoutProps = {};

export const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SideNav />
        <Header />
        <div className="flex-1 p-0 md:p-4">{props.children}</div>
        <Footer />
        <BottomCorner />
      </div>
    </>
  );
};
