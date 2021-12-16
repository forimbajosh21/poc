import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  Select,
  MenuItem,
  Typography,
  TableBody,
} from '@material-ui/core';

import StyledTableRow from 'common/components/base/Table/Row';

import { getClaims } from 'app/Scholar/actions';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import moment from 'moment';
import { capitalize } from 'lodash';
import { getSlpPrice } from 'app/Manager/actions';
import { calculateSlpPhp } from 'common/utils/slp';
import useStyles from './useStyles';

const ScholarClaimsPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { slpPrice } = useAppSelector((state) => state.manager);
  const { claims } = useAppSelector((state) => state.scholar);

  React.useEffect(() => {
    dispatch(getSlpPrice());
    dispatch(getClaims());
  }, []);

  return (
    <>
      <div className={classes.searchbarContainer}>
        <Typography variant="h6">Claims</Typography>
        <Select
          variant="outlined"
          margin="dense"
          // endAdornment: {}
          value="date"
        >
          <MenuItem selected value="date">
            Date
          </MenuItem>
        </Select>
      </div>
      <div>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Date and Time</TableCell>
              <TableCell>Amount (SLP)</TableCell>
              <TableCell>Amount (PHP)</TableCell>
              <TableCell>Claim ID</TableCell>
              <TableCell>Send to Binance ID</TableCell>
              <TableCell>Method</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {
              React.useMemo(() => claims.map((claim) => (
                <StyledTableRow key={claim.id}>
                  <TableCell>{moment(claim.timestamp).format('MMM DD, YYYY - HH:mm:SS')}</TableCell>
                  <TableCell>{claim.amount}</TableCell>
                  <TableCell>{calculateSlpPhp(slpPrice, claim.amount)}</TableCell>
                  <TableCell>{claim.id}</TableCell>
                  <TableCell>{claim.binance_id || 'N/A'}</TableCell>
                  <TableCell>{capitalize(claim.method)}</TableCell>
                </StyledTableRow>
              )),
              [claims, slpPrice])
            }
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ScholarClaimsPage;
