/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import SideDrawer from '../src/components/SideDrawer';
import Button from '../src/components/Button';

export default {
  title: 'SideDrawer',
  component: SideDrawer
};

export const Main = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        text="Open SideDrawer"
      />
      <SideDrawer open={open} onClick={() => setOpen(false)}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </SideDrawer>
    </div>
  );
};
