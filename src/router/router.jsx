import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DummyPage from "../pages/DummyPage";
import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import PostList from "../pages/PostList";
import PostDetail from "../pages/PostDetail";
import UserList from "../pages/UserList";
import CounterApp from "../pages/CounterApp";
import AddProduct from "../pages/AddProductForm";
import AllProducts from "../pages/AllProducts";


export const rootRouter = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout/>, 
    children: [
      {path: "/", index: true, element: <Shop/>},
      {path: "/cart", index: true, element: <Cart/>},
      {path: "*", element: <DummyPage />},
      {path: "/posts", element: <PostList />},
      {path: "/posts/:id", element: <PostDetail />},
      {path: "/users", element: <UserList />},
      {path: "/counter-app", element: <CounterApp/>},
      {path: "/add-product", element: <AddProduct />},
      {path: "/all-product", element: <AllProducts />},
    ]
  }
    
])