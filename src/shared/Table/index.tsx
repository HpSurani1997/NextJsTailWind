import clsx from 'clsx';
import React, { FunctionComponent } from 'react';

import Text from '../Text';

type Header = {
  label: string;
  className?: string;
};

type Row = {
  value1: string;
  value2: string | number;
  value1ClassName?: string;
  value2ClassName?: string;
};

type Props = {
  header: Header[];
  data: Row[];
  classNames?: {
    containerStyle?: string;
    headerStyle?: string;
    rowStyle?: string;
    cellStyle?: string;
  };
};

const Table: FunctionComponent<Props> = ({ header, data, classNames = {} }) => {
  return (
    <div className={clsx('w-full h-full', classNames.containerStyle)}>
      <div
        className={clsx(
          'flex flex-row justify-around items-center h-[60px] bg-custom-gradient shadow-custom-shadow rounded-t-lg',
          classNames.headerStyle,
        )}
      >
        {header.map((item, index) => (
          <Text
            key={index}
            color="text-[#ECF3F9]"
            className={clsx('text-[17px]', item.className)}
          >
            {item.label}
          </Text>
        ))}
      </div>
      <div className="max-h-[210px] overflow-y-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={clsx(
              'flex flex-row justify-around items-center h-[60px]',
              classNames.rowStyle,
              index % 2 === 0 ? 'bg-[#ECF3F9]' : 'bg-[#F9FBFC]',
            )}
          >
            <div className={clsx('flex-1 text-center', classNames.cellStyle)}>
              <Text
                color="text-[#94AABB]"
                className={clsx('text-[17px]', item.value1ClassName)}
              >
                {item.value1}
              </Text>
            </div>
            <div className={clsx('flex-1 text-center', classNames.cellStyle)}>
              <Text
                color="text-[#004EA8]"
                className={clsx('text-[17px]', item.value2ClassName)}
                weight="bold"
              >
                {item.value2}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
