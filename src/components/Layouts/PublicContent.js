import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import routes from 'src/Routes/public';
import Container from '../Root/Container';
import Spinner from '../Root/Spinner';

const PublicContent = () => {
  return (
    <Container lg>
      <Suspense fallback={<Spinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
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
};

export default React.memo(PublicContent)
