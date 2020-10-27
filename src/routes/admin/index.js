import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Orders from "./Orders";
import AddProductForm from "./AddProductForm";
import EditProduct from "./EditProduct";
import Dashboard from "./Dashboard";
import ProductsList from "./ProductsList"

export default function AdminRoutes() {
  const { path} = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}/`} component={Dashboard} />
        <Route exact path={`${path}/orders`} component={Orders} />
        <Route exact path={`${path}/addForm`} component={AddProductForm} />
        <Route
          exact
          path={`${path}/productsList/:id`}
          component={EditProduct}
        />
        <Route exact path={`${path}/productsList`} component={ProductsList} />
      </Switch>
    </>
  );
}
