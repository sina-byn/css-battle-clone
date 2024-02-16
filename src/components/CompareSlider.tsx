'use client';

import { useState } from 'react';
import clsx from 'clsx';

// * react-compare-slider
import { ReactCompareSlider } from 'react-compare-slider';

// * types
type CompareSliderProps = {
  items: [React.ReactNode, React.ReactNode];
};

const CompareSlider = ({ items }: CompareSliderProps) => {
  const [position, setPosition] = useState<number>(100);

  const mouseLeaveHandler = () => setPosition(100);

  return (
    <div className='compare-slider-box box'>
      <ReactCompareSlider
        itemOne={items[0]}
        itemTwo={items[1]}
        position={position}
        changePositionOnHover
        onPositionChange={setPosition}
        onMouseLeave={mouseLeaveHandler}
        className={clsx('compare-slider w-full h-full', position === 100 && 'no-handle')}
      />
    </div>
  );
};

export default CompareSlider;
