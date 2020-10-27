import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ProductList from "../components/ProductList";
import SlideShow from "../components/Carousel";
import CategoriesSlides from "../components/CategoriesSlides";
import SaleBanner from "../components/SaleBanner";
import Blog from "./Blog";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    marginBottom: "20px",
    backgrounColor: "#eee",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <SlideShow />
        <CategoriesSlides />
        <SaleBanner />
        <Blog/>
        {/* <ProductList /> */}
      </Container>
    </>
  );
}
