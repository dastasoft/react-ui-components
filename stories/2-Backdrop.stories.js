/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import Backdrop from '../src/components/Backdrop';
import Button from '../src/components/Button';

export default {
  title: 'Backdrop',
  component: Backdrop
};

export const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Button
        type="button"
        onClick={() => setShow(true)}
        text="Open Backdrop"
      />
      <Backdrop show={show} onClick={() => setShow(false)} />
    </div>
  );
};
