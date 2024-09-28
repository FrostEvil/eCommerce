import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NewOrderPage from "./pages/NewOrderPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();
const el = document.getElementById("root");
const root = createRoot(el!);

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <ProductsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders/new",
        element: (
          <ProtectedRoute>
            <NewOrderPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sales",
        element: (
          <ProtectedRoute notAllowed={["User", "Employee"]}>
            <SalesPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <ProtectedRoute notAllowed={["User"]}>
            <OrdersPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
