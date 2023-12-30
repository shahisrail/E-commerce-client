import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Regestar from "../Pages/Shared/Login/Regester/Regestar";
import Dashbord from "../Layout/Dashbord";
import AllUsers from "../Pages/Dashborad/AdminRoutes/AllUsers";
import SallerHome from "../Pages/Dashborad/SalllerRoutes/SallerHome";
import AdminHome from "../Pages/Dashborad/AdminRoutes/AdminHome";
import UserHome from "../Pages/Dashborad/UserRoutes/UserHome";
import AddProduct from "../Pages/Dashborad/SalllerRoutes/AddProduct";
import SellerReq from "../Pages/Dashborad/AdminRoutes/SellerReq";
import MyProduct from "../Pages/Dashborad/SalllerRoutes/MyProduct";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Regestar></Regestar>,
  },
  {
    path: "dashboard",
    element: <Dashbord></Dashbord>,
    // addmin routes
    children: [
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path:'adminHome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'sallerRequest',
        element:<SellerReq></SellerReq>
      },
      // saller dashbord 
      {
        path:'sallerHome',
        element:<SallerHome></SallerHome>
      },
      {
        path:'myProduct',
        element:<MyProduct></MyProduct>
      },
      {
       path:'addProduct',
       element:<AddProduct></AddProduct>
      },
      // user dashbord
      {
        path:"userHome",
        element:<UserHome></UserHome>
      }
    ],
  },
]);

export default router;
