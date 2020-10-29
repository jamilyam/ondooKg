import React, { lazy, Suspense } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import AdminLayout from "../components/layouts/AdminLayout";
import ProductPage from "../components/ProductPage";
import {useSelector} from 'react-redux';
import history from "./history";

const PrivateRoute = (props) => {
  const auth = useSelector(state => state.firebaseReducer.auth);
  const { children, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) => {
        return !auth.isEmpty ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

///?Pages
const Home = lazy(() => import("./Home"));
const Blog = lazy(() => import("./Blog"));
const Admin = lazy(() => import("./admin"));
const ShoppingCart = lazy(() => import("./ShoppingCart"));
const AboutUs = lazy(() => import("./AboutUs"));
const Catalog = lazy(() => import("./Catalog"));
const Products = lazy(()=> import("./Products"));

///?Auth pages
// const Login = lazy(() => import("./auth/Login"));
// const Logout = lazy(() => import("./auth/Logout"));
// const Register = lazy(() => import("./auth/Register"));

//firebaseAuth
const Login = lazy(() => import("./firebaseauth/Login"));

const Routes = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>

          <Route exact path="/catalog">
            <Layout>
              <Catalog />
            </Layout>
          </Route>

          <Route exact path="/products">
            <Layout>
              <Products />
            </Layout>
          </Route>

          <Route exact path="/products/:id">
            <Layout>
              <ProductPage />
            </Layout>
          </Route>

          <Route exact path="/blog">
            <Layout>
              <Blog />
            </Layout>
          </Route>

          <PrivateRoute path="/admin">
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </PrivateRoute>

          <Route exact path="/shopping-cart">
            <Layout>
              <ShoppingCart />
            </Layout>
          </Route>

          <Route exact path="/about-us">
            <Layout>
              <AboutUs />
            </Layout>
          </Route>

          <Route exact path="/auth/login">
            <Layout>
              <Login />
            </Layout>
          </Route>

          {/* <Route exact path="/auth/register">
            <Layout>
              <Register />
            </Layout>
          </Route>

          <Route exact path="/auth/logout">
            <Logout />
          </Route> */}

          <Route>
            <Layout>
              <div style={{ height: "100vh" }}>
                <h1>Ошибка: 4040. Страница не найдена.</h1>
              </div>
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;
