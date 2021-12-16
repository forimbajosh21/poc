import React from 'react';
import {
  AppBar, Container, Toolbar, Button, Grid, Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { useEthers } from '@usedapp/core';

import PeopleIcon from '@material-ui/icons/People';

import AxieDashboard from 'common/assets/images/axie-dashboard.png';
import Metamask from 'common/assets/images/metamask.png';
import Macbook from 'common/assets/images/mac-book-white.png';

import useStyles from './useStyles';

const LandingPage: React.FC = () => {
  const classes = useStyles();
  const { activateBrowserWallet } = useEthers();

  return (
    <>
      <AppBar elevation={0} position="relative">
        <Container>
          <Toolbar className={classes.toolbar}>
            <div className={classes.rectangle}>
              <img src={AxieDashboard} alt="Axie Dashboard" />
            </div>
            <div>
              <Button className={classes.btn}>Home</Button>
              <Button className={classes.btn}>Contact Us</Button>
              <Button className={clsx(classes.btn, classes.metamaskBtn)} onClick={() => activateBrowserWallet()}>
                <img src={Metamask} alt="Metamask" width="32" height="32" className={classes.metamaskIcon} />
                Log-in with via Metamask
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.content}>
        <Container>
          <Grid container className={classes.hero}>
            <Grid item lg={5} md={12}>
              <Typography variant="h3" className="header">
                Manage your Scholars like a boss
              </Typography>
              <Typography variant="h6" className="subheader">
                Easy management of scholars, claiming of SLP, payouts, all in one dashboard.
              </Typography>
            </Grid>
            <Grid item lg={7} md={12}>
              <img src={Macbook} alt="Macbook" width="100%" />
            </Grid>
          </Grid>
          <Grid container className={classes.features}>
            <Grid item lg={12}>
              <Typography variant="h4" align="center" className="header">Features</Typography>
            </Grid>
            <Grid container item lg={12} spacing={6}>
              <Grid item lg={4}>
                <div className="feature">
                  <div className="header">
                    <PeopleIcon className="svg" />
                    <Typography variant="h6">Manage Scholars</Typography>
                  </div>
                  <Typography>Save all your scholar info for quick management actions.</Typography>
                </div>
              </Grid>
              <Grid item lg={4}>
                <div className="feature">
                  <div className="header">
                    <span className="material-icons svg">
                      download_for_offline
                    </span>
                    <Typography variant="h6">Claim SLP</Typography>
                  </div>
                  <Typography>Track all claimable SLP of your scholars and see its equivalent to Peso.</Typography>
                </div>
              </Grid>
              <Grid item lg={4}>
                <div className="feature">
                  <div className="header">
                    <span className="material-icons svg">
                      download_for_offline
                    </span>
                    <Typography variant="h6">Easy Payout Process</Typography>
                  </div>
                  <Typography>Integrated payout process to the preferred method of your scholars.</Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Toolbar className={classes.footer}>
        <Typography>AxieDashboard © 2022</Typography>
      </Toolbar>
    </>
  );
};

export default LandingPage;
