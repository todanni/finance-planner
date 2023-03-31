/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  bgColour?: string;
};

const Container = ({ children, bgColour }: Props) => (
  <div className={`flex items-center justify-center ${bgColour} px-6 sm:px-16`}>
    <div className='w-full px-4 sm:px-8 xl:max-w-[1280px]'>{children}</div>
  </div>
);

export default Container;