'use client';

import clsx from 'clsx';
import { Assistant } from 'next/font/google';
import Image from 'next/image';
import { useState, ComponentProps } from 'react';

const assistant = Assistant({ subsets: ['latin'] });

export default function Input({
  className = '',
  type = 'text',
  ...props
}: ComponentProps<'input'>) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="relative w-full inline-block">
      <input
        type={type === 'password' ? (visible ? 'text' : type) : type}
        className={clsx(
          `py-[19px] rounded-xl border-[1px] pl-7 pr-12 outline-none focus:shadow-xl font-normal text-[17px] text-gray_850 ${assistant.className}`,
          className,
        )}
        {...props}
      />
      <Image
        src={visible ? '/svgs/eye_off.svg' : '/svgs/eye_on.svg'}
        width={20}
        height={20}
        alt="password eye"
        className={clsx(
          'cursor-pointer absolute top-[calc(50%-10px)] right-5',
          {
            hidden: type !== 'password',
          },
        )}
        onClick={() => setVisible(!visible)}
      />
    </div>
  );
}
