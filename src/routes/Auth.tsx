import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEthers } from '@usedapp/core';
import find from 'lodash/find';

import { useAppDispatch } from 'app/hooks';
import { setUserAuth } from 'app/User';

import accounts from 'accounts.json';
import { CircularProgress } from '@material-ui/core';

const Auth = ({ children }: any) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { account } = useEthers();
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, []);

  React.useEffect(() => {
    if (!loading && !account) {
      navigate('/', { state: { from: location } });
    }

    const manager = find(accounts.managers, { bsc: account });
    const scholar = find(accounts.scholars, { bsc: account });

    if (!loading && account && typeof manager !== 'object' && typeof scholar !== 'object') {
      navigate('/', { state: { from: location } });
    }

    if (typeof manager === 'object') {
      dispatch(setUserAuth({
        isAuthenticated: true,
        type: 'manager',
        name: manager.name,
        ronin: manager.ronin,
      }));

      if (location.pathname.includes('/scholar/')) {
        navigate('/manager/scholars');
      }
    }

    if (typeof scholar === 'object') {
      dispatch(setUserAuth({
        isAuthenticated: true,
        type: 'scholar',
        name: scholar.name,
        ronin: scholar.ronin,
      }));

      if (location.pathname.includes('/manager/')) {
        navigate('/scholar/claims');
      }
    }
  }, [loading, account, dispatch, location, navigate]);

  if (loading) {
    return (
      <div style={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <CircularProgress color="primary" size={25} />
      </div>
    );
  }

  return children;
};

export default (Auth);
