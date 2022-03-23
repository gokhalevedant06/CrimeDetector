import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import { CircularProgress } from "@mui/material";

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <CircularProgress
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: "fixed",
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/admin",
          element: <AddAdmin />,
        },
      ],
    },
  ]);
}

//layouts
const MainLayout = Loadable(
  lazy(() => import("../layouts/mainLayout.component"))
);

//pages
const Home = Loadable(
  lazy(() => import("../pages/dashboard/dashboard.component"))
);

const Test = Loadable(lazy(() => import("../components/test/test.component")));
const Login = Loadable(lazy(() => import("../pages/login/login.component")));
const AddAdmin = Loadable(
  lazy(() => import("../pages/addAdmin/AddAdmin.component"))
);
