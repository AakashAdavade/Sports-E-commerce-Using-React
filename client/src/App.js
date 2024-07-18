import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product"
import Products from "./Pages/Products/Products";
import Login from './Components/Login/Login';
import Logout from "./Components/Logout/Logout"
import Registration from "./Components/Registration/Registration"


const Layout = () =>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/Products/:id",
        element:<Products />
      },
      {
        path:"/Product/:id",
        element:<Product />
      },
      {
        path:"/Login",
        element:<Login />
      },
      {
        path:"/Logout",
        element:<Logout />
      },
      {
        path:"/Registration",
        element:<Registration />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
