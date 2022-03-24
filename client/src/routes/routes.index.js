import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

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
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/alert",
          element: <Alert />,
        },
        {
          path:"/cameras",
          element:<Cameras/>
        },
        {
          path:"/cameras/:id",
          element:<CameraStream/>
        }
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

const History = Loadable(
  lazy(() => import("../pages/history/History.component"))
);

const Alert = Loadable(
  lazy(() => import("../pages/alert/Alert.component"))
)

const Cameras = Loadable(
  lazy(()=> import("../pages/cameras/cameras.component"))
)
const CameraStream = Loadable(
  lazy(()=> import("../pages/cameraStream/cameraStream.component"))
)