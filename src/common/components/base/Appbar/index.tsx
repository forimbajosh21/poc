import React from 'react';
import {
  AppBar, IconButton, Toolbar, Typography, Button, Avatar,
} from '@material-ui/core';
import { capitalize, find } from 'lodash';
import { useEthers } from '@usedapp/core';
import { useLocation } from 'react-router-dom';

import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import { useAppSelector } from 'app/hooks';

import { getInitial } from 'common/utils/string';

import { managerRoutes, scholarRoutes } from 'routes/routes';

import useStyles from './useStyles';

const Appbar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const { name, type } = useAppSelector((state) => state.user);
  const { account } = useEthers();

  const title = React.useMemo(() => {
    let route;
    if (type === 'manager') {
      route = find(managerRoutes, { link: location.pathname });
    } else {
      route = find(scholarRoutes, { link: location.pathname });
    }

    return route?.name;
  }, [type, location.pathname]);

  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>{title}</Typography>
        <IconButton className={classes.iconBtn}>
          <NotificationsIcon />
        </IconButton>
        <Button disableElevation variant="contained" className={classes.rectangleBtn}>
          <Avatar className="avatar">{getInitial(name)}</Avatar>
          <div style={{ maxWidth: 80 }}>
            <Typography className="name" noWrap>
              {name}
            </Typography>
            <Typography className="role">
              {type && capitalize(type)}
            </Typography>
          </div>
          <ArrowDropDownIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
