import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    marginTop: "40px",
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/specialnye-ceny-oktyabrya-d.jpg)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    maxHeight: "190px",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    textAlign: "center",
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
    backgroundColor: "white",
    color: "black",
    width: "50%",
    // height: "90%",
    top: 0,
    left: "70%",
    // margin: "auto",
    // padding:"0 20px",
    alignItems: "center",
  },
  viewButton: {
    transition: "200ms",
  },
}));

export default function SaleBanner() {
  const classes = useStyles();
  const history = useHistory();
  const post = {
    title: "Специальные цены октября",
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image:
      "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/specialnye-ceny-oktyabrya-d.jpg",
    imgText: "Акции",
    linkText: "Успей купить",
  };

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${post.image})` }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h5"
              variant="h5"
              color="inherit"
              gutterBottom
            >
              {post.title}
            </Typography>
            <Button
              className={classes.viewButton}
              variant="contained"
              color="secondary"
              onClick={() => history.replace("/auth/register")}
            >
              {post.linkText}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
