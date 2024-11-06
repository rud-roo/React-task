import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DummyPage from "../pages/DummyPage";
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";


export const rootRouter = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout/>, 
    children: [
      {path: "/", index: true, element: <Shop/>},
      {path: "/cart", index: true, element: <Cart/>},
      {path: "*", element: <DummyPage />},
    ]
  }
    
])