import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthLayout, AppLayout } from '../layout';
import { HomeView, LoginView, SignupView } from '../views';

const routesConfig = (token) => {
  const adminRoutesConfig = [
    {
      path: '/',
      exact: true,
      component: () => {
        if (token) {
          return <Redirect to="/app" />;
        }
        return <Redirect to="/auth" />;
      },
    },
    {
      path: '/auth',
      layout: AuthLayout,
      routes: [
        {
          path: '/auth',
          exact: true,
          component: () => <Redirect to="/auth/login" />,
        },
        {
          path: '/auth/login',
          exact: true,
          component: () => <LoginView />,
        },
        {
          path: '/auth/signup',
          exact: true,
          component: () => <SignupView />,
        },
      ],
    },
    {
      path: '/app',
      layout: AppLayout,
      routes: [
        {
          path: '/app',
          exact: true,
          component: () => <Redirect to="/app/home" />,
        },
        {
          path: '/app/home',
          exact: true,
          component: () => <HomeView />,
        },
      ],
    },
    // {
    //   path: '/settings',
    //   layout: SettingsLayout,
    //   key: 10,
    //   routes: [
    //     {
    //       path: '/settings/',
    //       exact: true,
    //       component: () => <Redirect to="/settings/profile" />,
    //       key: 11,
    //     },
    //     {
    //       path: '/settings/profile',
    //       exact: true,
    //       component: () => <div>Settings</div>,
    //       key: 12,
    //     },
    //   ],
    // },
  ];

  return adminRoutesConfig;
};

const renderRoutes = (routes) => {
  if (routes) {
    return (
      <Switch>
        {routes.map((route, index) => {
          const Layout = route.layout || React.Fragment;
          const Component = route.component;
          const key = `${route.path}-${index}`;
          return (
            <Route
              key={key}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Component {...props} />
                  )}
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    );
  }
  return null;
};

function Routes() {
  const token = '';
  return renderRoutes(routesConfig(token));
}

export default Routes;
