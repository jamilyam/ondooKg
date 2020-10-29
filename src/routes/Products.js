import React from "react";
import { Container, makeStyles, Grid } from "@material-ui/core";
import ProductList from "../components/ProductList";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: "30px",
  },
}));

export default function Products() {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="md">
      <Grid>
        <ProductList />
      </Grid>
    </Container>
  );
}
