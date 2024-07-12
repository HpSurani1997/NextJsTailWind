'use client';

import Image from 'next/image';
import { useState } from 'react';

import Button from '@/shared/Button';
import DashboardLayout from '@/shared/DashboardLayout';
import Table from '@/shared/Table';

export default function App() {
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const header = [{ label: 'Date' }, { label: 'Score' }];

  const data = [
    { value1: 'April 20, 2022', value2: '78' },
    { value1: 'April 22, 2022', value2: '88' },
    { value1: 'May 14, 2022', value2: '90' },
    { value1: 'May 17, 2022', value2: '67' },
  ];

  return (
    <DashboardLayout>
      <div
        className={`flex flex-col md:flex-row ${showDetails ? 'md:w-full' : 'md:w-[375px]'}`}
      >
        <div className="flex-1 flex-col">
          {showDetails && (
            <Image
              alt="back-arrow"
              width={35}
              height={35}
              src="/svgs/back-arrow.svg"
              className="absolute cursor-pointer"
              onClick={() => setShowDetails(false)}
            />
          )}
          <div className="flex justify-center">
            <Image alt="logo" width={200} height={35} src="/pngs/logo.png" />
          </div>
          <p
            className={`font-[Assistant] text-[25px] font-bold leading-[32.7px] text-center text-[#004EA8] ${showDetails ? 'mt-5 md:mt-20' : 'mt-5 md:mt-10'}`}
          >
            True Vitality Test
          </p>
          <p className="font-[Assistant] text-[17px] font-normal leading-[22.24px] text-center text-[#6C8093] mt-3 md:px-2">
            Take the test and see how you can improve your health and wellbeing!
            <u className="font-[Assistant] text-[#005FCC] pl-[6px] font-bold text-[17px]">
              Learn more
            </u>
          </p>
          <div className="flex justify-center">
            <Button
              className="mt-5 bg-custom-gradient"
              onClick={() => setShowDetails(true)}
            >
              Take assessment
            </Button>
          </div>
        </div>
        {showDetails && (
          <div className="flex-1 md:ml-16">
            <h4 className="text-[17px] font-bold text-center text-[#004EA8] pb-6 mt-10 md:mt-0">
              Past completions
            </h4>
            <Table header={header} data={data} />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
