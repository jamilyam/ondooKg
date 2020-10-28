import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "200px",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "26.25%",
    backgroundSize: "cover",
    position: "relative",
  },
  mediaCaption: {
    textOverflow: "ellipsis",
    position: "absolute",
    // bottom: 20,
    top: 15,
    right: 0,
    padding: "25px",
    backgroundColor: "white",
    color: "black",
    // opacity: 0.9,
    width: "35%",
    height: "87%",
    textTransform: "capitalize",
    fontSize: "18px",
    boxSizing: "border-box",
  },
  viewButton: {
    color: "black",
    // border: "3px solid white",
    // textTransform: "capitalize",
    transition: "200ms",
    marginTop: "40px",
  },
}));
export default function SlideShow(props) {
  var items = [
    {
      name: "Распродажа",
      description: "Уют начинается здесь. Декор для дома по низким ценам",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/uyut-nachinaetsya-s-leroy-merlin_d.jpg",
    },
    {
      name: "Новинка",
      description: "Воспоминания о доме. Новые коллекции уже здесь.",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/vospominaniya-o-puteshestiviyakh-stilevaya-d.png",
    },
    {
      name: "Акция",
      description: "Встречаем осень на даче. Все для сада и огорода здесь.",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/vstrechaem-osen-na-dache-d.jpg",
    },
    {
      name: "Хит продаж",
      description: "Пора навести порядок. Новые системы хранения уже здесь.",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto,c_pad,b_white,d_photoiscoming.png/elbrus/images/banners2020/pora-navesti-poryadok-d-min-1.jpg",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper>
      <Grid item xs={12} key={props.item.name}>
        <CardMedia
          className={classes.media}
          image={props.item.image}
          title={props.item.name}
        >
          <Typography size="large" className={classes.mediaCaption}>
            {props.item.description}
            <Button
              className={classes.viewButton}
              variant="contained"
              color="secondary"
              onClick={() => history.replace("/auth/register")}
            >
              Подробнее
            </Button>
          </Typography>
        </CardMedia>
      </Grid>
    </Paper>
  );
}
