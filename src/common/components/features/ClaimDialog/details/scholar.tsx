import React from 'react';
import { Typography, Avatar } from '@material-ui/core';

import { getInitial } from 'common/utils/string';

import useStyles from './useStyles';

interface DetailsScholarProps {
  name?: string
  method?: string
  number?: string
  ronin?: string
  binance?: string
}

const DetailsScholar: React.FC<DetailsScholarProps> = ({
  name, method, number, ronin, binance,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div>
          <Typography>Scholar Name</Typography>
        </div>
        <div>
          <div className="nameContainer">
            <Avatar className="avatar">{getInitial(name || '')}</Avatar>
            <Typography>{name}</Typography>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Typography>Payment Method</Typography>
        </div>
        <div>
          <Typography>{method}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>GCash Number</Typography>
        </div>
        <div>
          <Typography>{number}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Ronin Address</Typography>
        </div>
        <div>
          <Typography>{ronin}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Binance Address</Typography>
        </div>
        <div>
          <Typography>{binance}</Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailsScholar;
