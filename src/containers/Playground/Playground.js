import React from 'react';

import CircleProgressBar from '../../components/CircleProgressBar';
import './Playground.scss';

const Playground = () => {
  return (
    <div className="playground">
      <CircleProgressBar
        trailStrokeColor="gray"
        strokeColor="teal"
        percentage={75}
        innerText="complete"
        speed={1}
      />
    </div>
  );
};

export default Playground;
