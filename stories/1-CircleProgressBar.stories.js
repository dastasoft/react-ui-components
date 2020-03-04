/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import CircleProgressBar from '../src/components/CircleProgressBar';

export default {
  title: 'CircleProgressBar',
  component: CircleProgressBar
};

export const Main = () => <CircleProgressBar percentage={50} />;
