import LoginPage from "../page/Auth/LoginPage";
import RegisterPage from "../page/Auth/RegisterPage";

// create public router
const publicRouter = [
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <RegisterPage />,
    path: "/register",
  },
];

// export router
export default publicRouter;
