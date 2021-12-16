import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import find from 'lodash/find';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import { useAppDispatch } from 'app/hooks';
import { setUserAuth } from 'app/User';

import accounts from 'accounts.json';

const Public = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = useEthers();

  const [noAccount, setNoAccount] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (account) {
      const manager = find(accounts.managers, { bsc: account });
      const scholar = find(accounts.scholars, { bsc: account });

      if (!noAccount && typeof manager !== 'object' && typeof scholar !== 'object') {
        setNoAccount(true);
      }

      if (typeof manager === 'object') {
        dispatch(setUserAuth({
          isAuthenticated: true,
          type: 'manager',
          name: manager.name,
          ronin: manager.ronin,
        }));
        navigate('/manager/scholars');
      }

      if (typeof scholar === 'object') {
        dispatch(setUserAuth({
          isAuthenticated: true,
          type: 'scholar',
          name: scholar.name,
          ronin: scholar.ronin,
        }));
        navigate('/scholar/claims');
      }
    }
  }, [account, dispatch, location, navigate, noAccount]);

  return (
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={noAccount}
        autoHideDuration={3000}
      >
        <Alert severity="error">No account connected.</Alert>
      </Snackbar>
      {children}
    </>
  );
};

export default Public;
