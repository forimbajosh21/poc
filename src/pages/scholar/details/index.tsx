import React from 'react';
import {
  Typography, TextField, Select, MenuItem, Box, Button,
} from '@material-ui/core';
import { useEthers } from '@usedapp/core';

import { useAppSelector } from 'app/hooks';

import BinanceLogo from 'common/assets/images/binance-logo.png';
import RoninLogo from 'common/assets/images/ronin-wallet.jpeg';

import useStyles from './useStyles';

const ScholarDetailsPage: React.FC = () => {
  const classes = useStyles();

  const { name, ronin } = useAppSelector((state) => state.user);
  const { account } = useEthers();

  return (
    <div className={classes.root}>
      <div className="inputContainer">
        <div>
          <Typography>School Name</Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            placeholder="Enter Scholar Name"
            value={name}
          />
        </div>
        <div>
          <Typography>Gcash Number</Typography>
          <TextField
            fullWidth
            variant="outlined"
            margin="dense"
            placeholder="Enter GCash Number"
            value="N/A"
          />
        </div>
        <div>
          <Typography gutterBottom>Preferred Payment Channel</Typography>
          <Select
            fullWidth
            variant="outlined"
            margin="dense"
            value="gcash"
          >
            <MenuItem selected value="gcash">GCash</MenuItem>
            <MenuItem selected value="7/11">7/11</MenuItem>
          </Select>
        </div>
        <div>
          <Button disableElevation variant="contained" color="primary">Save Changes</Button>
        </div>
      </div>
      <Box width={30} />
      <div className="addressContainer">
        <div className="card">
          <img src={BinanceLogo} alt="Binance" />
          <div>
            <Typography>Binance Address</Typography>
            <TextField
              fullWidth
              multiline
              disabled
              variant="outlined"
              margin="dense"
              value={account}
            />
          </div>
        </div>
        <div className="card">
          <img src={RoninLogo} alt="Ronin" />
          <div>
            <Typography>Ronin Address</Typography>
            <TextField
              fullWidth
              multiline
              disabled
              variant="outlined"
              margin="dense"
              value={ronin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarDetailsPage;
