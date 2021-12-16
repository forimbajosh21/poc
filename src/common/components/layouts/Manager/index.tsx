import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Sidebar from 'common/components/base/Sidebar';
import Appbar from 'common/components/base/Appbar';

import useStyles from './useStyles';

const LayoutManager: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Sidebar />
      <div className={classes.content}>
        <Appbar />
        <div className={classes.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutManager;
