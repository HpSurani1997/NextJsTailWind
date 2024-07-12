import Image from 'next/image';
import React from 'react';

type DashBoardType = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashBoardType) {
  return (
    <div className="w-screen h-screen relative">
      <Image
        className="w-screen h-screen object-cover"
        src={'/jpg/background.jpg'}
        alt="background-view"
        fill
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center">
        <div className=" bg-white rounded-2xl py-6 sm:py-12 px-2 md:px-10 mx-4">
          {children}
        </div>
      </div>
    </div>
  );
}
