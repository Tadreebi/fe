import React, { Suspense } from 'react';
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';
import { default as AdminRoutes, default as CompStaffRoutes, default as StudentRoutes, default as UniStaffRoutes } from 'src/Routes/dashboard';
import Container from '../Root/Container';
import Spinner from '../Root/Spinner';

const DashboardContent = () => {

  const { user } = useSelector(_ => _);

  const decideUser = () => {
    switch (user?.type) {
      case "Student": return StudentRoutes;
      case "University Employee": return UniStaffRoutes;
      case "Company": return CompStaffRoutes;
      default: return AdminRoutes;
    }
  };

  const routes = decideUser();

  return (
    <Container lg>
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {routes?.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </Container>
  )
}

export default React.memo(DashboardContent)
