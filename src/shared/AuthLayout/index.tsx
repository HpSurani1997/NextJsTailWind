import { Assistant } from 'next/font/google';
import Image from 'next/image';

interface Props {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="fixed h-screen w-screen flex-col md:flex-row z-50 top-0 flex">
      <div className="w-full h-[12.5%] md:h-full relative flex items-center justify-center">
        <Image 
        src={'/jpg/background.jpg'} layout="fill" alt="BlueZones image" />
        <div className="w-2/5 md:w-1/3 z-10 flex">
          <Image
            src={'/pngs/logo.png'}
            layout="responsive"
            height={0}
            width={0}
            alt="BlueZones logo"
          />
        </div>
      </div>
      <div className="w-full h-full bg-white flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
