import React from 'react';
import Image from 'next/image';

import EmptyList from '../../assets/svgs/empty-list.svg';

function NoData({ message, py }) {
  return (
    <div className={`w-full h-full ${py} flex justify-center items-center`}>
      <div className="text-center">
        <div className="flex justify-center mb-5">
          <Image src={EmptyList} alt="Icon" className="w-28 h-28" />
        </div>
        <p className="text-base font-semibold">{message}</p>
      </div>
    </div>
  );
}

NoData.defaultProps = {
  message: 'No Data',
  py: 'py-20'
};

export default NoData;
