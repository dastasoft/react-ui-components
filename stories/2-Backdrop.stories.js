/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import Backdrop from '../src/components/Backdrop';

export default {
  title: 'Backdrop',
  component: Backdrop
};

export const Main = () => {
  const [show, setShow] = useState(true);

  return <Backdrop show={show} onClick={() => setShow(false)} />;
};
