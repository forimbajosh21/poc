import React from 'react';
import {
  Table,
  TableRow,
  TableCell,
  TableHead,
  TextField,
  Typography,
  TableBody,
  Avatar,
  Button,
  IconButton,
} from '@material-ui/core';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { claimSlp, getScholarList } from 'app/Manager/actions';

import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import StyledTableRow from 'common/components/base/Table/Row';
import ClaimDialog from 'common/components/features/ClaimDialog';

import { getInitial } from 'common/utils/string';
import useStyles from './useStyles';

const ManagerScholarsPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { scholars } = useAppSelector((state) => state.manager);
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    dispatch(getScholarList());
  }, []);

  const handleClaimSlp = React.useCallback((roninId: string) => {
    setOpen(true);
    dispatch(claimSlp(roninId, setLoading));
  }, [dispatch]);

  return (
    <>
      <div className={classes.searchbarContainer}>
        <Typography variant="h6">Scholars</Typography>
        <TextField
          variant="outlined"
          margin="dense"
          placeholder="Enter Scholar Name"
          InputProps={{
            endAdornment: (
              <SearchIcon fontSize="small" className="searchIcon" />
            ),
          }}
        />
      </div>
      <div>
        <Table>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell>Scholar</TableCell>
              <TableCell>Claim Method</TableCell>
              <TableCell>Ronin Address</TableCell>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {React.useMemo(
              () => scholars.map((scholar) => (
                <StyledTableRow key={scholar.ronin_id}>
                  <TableCell>
                    <div className="name">
                      <Avatar className="avatar">
                        {getInitial(scholar.name)}
                      </Avatar>
                      {scholar.name}
                    </div>
                  </TableCell>
                  <TableCell>{scholar.method}</TableCell>
                  <TableCell>{scholar.ronin_id}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleClaimSlp(scholar.ronin_id)}
                    >
                      Claim SLP
                    </Button>
                  </TableCell>
                  <TableCell>
                    <IconButton size="small">
                      <MoreHorizIcon />
                    </IconButton>
                  </TableCell>
                </StyledTableRow>
              )),
              [handleClaimSlp, scholars],
            )}
          </TableBody>
        </Table>
      </div>
      <ClaimDialog loading={loading} open={open} onClose={() => setOpen((prev) => !prev)} />
    </>
  );
};

export default ManagerScholarsPage;
