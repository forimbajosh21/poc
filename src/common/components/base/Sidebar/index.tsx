import React from 'react';
import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { useAppSelector } from 'app/hooks';
import { managerRoutes, scholarRoutes } from 'routes/routes';

import useStyles from './useStyles';

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const { type } = useAppSelector((state) => state.user);

  const urlMatch = (url: string): boolean => location.pathname === url;

  return (
    <div className={classes.root}>
      <div
        className={clsx(classes.logo, {
          [classes.logoManager]: type === 'manager',
          [classes.logoScholar]: type === 'scholar',
        })}
      />
      <div>
        <List>
          {React.useMemo(() => {
            const routes = type === 'manager' ? managerRoutes : scholarRoutes;

            return routes.map((route) => (
              <ListItem
                button
                key={route.link}
                className={clsx(classes.listBtn, {
                  [classes.active]: urlMatch(route.link),
                })}
                component={Link}
                to={route.link}
              >
                <ListItemIcon className={classes.listIcon}>
                  <route.icon />
                </ListItemIcon>
                <ListItemText primary={route.name} />
              </ListItem>
            ));
          }, [classes.active, classes.listBtn, classes.listIcon, type, urlMatch])}
        </List>
      </div>
    </div>
  );
};

export default Sidebar;
