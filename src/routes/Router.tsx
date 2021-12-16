import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from 'pages/landing';
import Loginpage from 'pages/login';

import LayoutManager from 'common/components/layouts/Manager';
import ManagerScholarsPage from 'pages/manager/scholars';
import ScholarClaimsPage from 'pages/scholar/claims';
import ScholarDetailsPage from 'pages/scholar/details';
import Auth from './Auth';
import Public from './Public';

const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <Public>
            <LandingPage />
          </Public>
      )}
      />
      {/* <Route path="/login" element={<Loginpage />} /> */}
      <Route
        path="manager"
        element={(
          <Auth>
            <LayoutManager />
          </Auth>
        )}
      >
        <Route path="dashboard" element={<h1>Manager Dashboard</h1>} />
        <Route path="scholars" element={<ManagerScholarsPage />} />
      </Route>
      <Route
        path="scholar"
        element={(
          <Auth>
            <LayoutManager />
          </Auth>
        )}
      >
        <Route path="dashboard" element={<h1>Scholar Dashboard</h1>} />
        <Route path="claims" element={<ScholarClaimsPage />} />
        <Route path="details" element={<ScholarDetailsPage />} />
      </Route>
      <Route
        path="*"
        element={(
          <div style={{ padding: '1rem' }}>
            <p>There`s nothing here!</p>
          </div>
        )}
      />
    </Routes>
  </BrowserRouter>
);

export default React.memo(Router);
