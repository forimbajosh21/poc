import React from 'react';
import {
  Dialog,
  DialogTitle,
  IconButton,
  Divider,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import clsx from 'clsx';

import CloseIcon from '@material-ui/icons/Close';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { calculateSlpPhp } from 'common/utils/slp';

import moment from 'moment';
import { capitalize } from 'lodash';
import ClaimAccordion from './Accordion';
import DetailsScholar from './details/scholar';
import DetailsClaim from './details/claim';

import useStyles from './useStyles';

interface ClaimDialogProps {
  loading: boolean
  open: boolean;
  onClose: () => void;
}

const ClaimDialog: React.FC<ClaimDialogProps> = ({ loading, open, onClose }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const {
    slpPrice, claimStep, claimDetails, selectedScholar,
  } = useAppSelector((state) => state.manager);

  return (
    <Dialog open={open} fullWidth maxWidth="sm" scroll="body" onClose={onClose}>
      <DialogTitle className={classes.title}>
        Claim SLP
        <IconButton size="small" onClick={onClose} disabled={loading}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Divider />
      <DialogContent className={classes.content}>
        {claimStep === 1 && claimDetails !== undefined && claimDetails.slp > 0 && (
          <div className="success">
            <CheckCircleOutlineIcon htmlColor="#86b63a" fontSize="large" />
            <Typography color="primary" variant="h6">Claim Successful!</Typography>
          </div>
        )}
        {claimStep === 1 && claimDetails !== undefined && claimDetails.slp < 1 && (
          <div className="error">
            <CancelOutlinedIcon color="error" fontSize="large" />
            <Typography color="error" variant="h6">Claim Successful!</Typography>
          </div>
        )}
        <div className="pricing">
          <div>
            <Typography>Available SLP</Typography>
            <div>
              {loading ? (
                <Typography className="dots-loading">Loading</Typography>
              ) : (
                <Typography>
                  {claimDetails?.slp || 0}
                  {' '}
                  SLP
                </Typography>
              )}
            </div>
          </div>
          <span>=</span>
          <div>
            <Typography>PHP Equivalent</Typography>
            <div>
              {loading ? (
                <Typography className="dots-loading">Loading</Typography>
              ) : (
                <Typography>
                  PHP
                  {' '}
                  {calculateSlpPhp(slpPrice, claimDetails?.slp || 0)}
                </Typography>
              )}
            </div>
          </div>
        </div>

        <div className="accordationContainer">
          {claimStep === 0 ? (
            <ClaimAccordion title="Scholar Details">
              <DetailsScholar
                name={selectedScholar?.name}
                method={capitalize(selectedScholar?.method)}
                number="N/A"
                ronin={selectedScholar?.ronin_id}
                binance="N/A"
              />
            </ClaimAccordion>
          ) : (
            <ClaimAccordion title="Claim Details">
              <DetailsClaim
                claimId={claimDetails?.id || ''}
                binanceId={claimDetails?.binanceId || ''}
                totalSlp={`${claimDetails?.slp || 0}`}
                gcashId="N/A"
                totalCash={`${calculateSlpPhp(slpPrice, claimDetails?.slp || 0)}`}
                dateClaimed={moment().format('MMM dd, YYYY - HH:mm:SS')}
              />
            </ClaimAccordion>
          )}
        </div>

        <Button
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          className="claimBtn"
          disabled={loading}
        >
          <span className={clsx({ 'dots-loading': loading })}>{claimStep === 0 ? 'Claiming SLP' : 'Done'}</span>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ClaimDialog;
