import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';

import useStyles from './useStyles';

const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Button size="small">
          <HomeIcon />
          <Typography>Go Back</Typography>
        </Button>
        <Typography variant="h4">Log in</Typography>
      </Card>
    </div>
  );
};

export default LoginPage;
