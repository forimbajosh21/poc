import React from 'react';
import { Typography, Avatar } from '@material-ui/core';

import { getInitial } from 'common/utils/string';

import useStyles from './useStyles';

interface DetailsClaimProps {
  claimId?: string
  binanceId?: string
  totalSlp?: string
  gcashId?: string
  totalCash?: string
  dateClaimed?: string
}

const DetailsClaim: React.FC<DetailsClaimProps> = ({
  claimId, binanceId, totalSlp, gcashId, totalCash, dateClaimed,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div>
          <Typography>Claim Transaction ID</Typography>
        </div>
        <div>
          <Typography>{claimId}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Binance Transaction ID</Typography>
        </div>
        <div>
          <Typography>{binanceId}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Total SLP Claimed</Typography>
        </div>
        <div>
          <Typography>
            {totalSlp}
            {' '}
            SLP
          </Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>GCash Transaction ID</Typography>
        </div>
        <div>
          <Typography>{gcashId}</Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Total Cash Claimed</Typography>
        </div>
        <div>
          <Typography>
            PHP
            {' '}
            {totalCash}
          </Typography>
        </div>
      </div>
      <div>
        <div>
          <Typography>Date Claimed</Typography>
        </div>
        <div>
          <Typography>{dateClaimed}</Typography>
        </div>
      </div>
    </div>
  );
};

export default DetailsClaim;
