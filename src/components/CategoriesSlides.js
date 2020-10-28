import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Paper,
  Button,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const images = [
  {
    name: "Краски",
    description:
      "Специальное предложение на сноуборд СНОУБОРД BURTON CLASH за 8000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/11467386.jpg",
    link: "/catalog?category=suhie",
  },
  {
    name: "Электроинструменты",
    description: "СНОУБОРД BLACK FIRE FIRE за 14000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/18769951.jpg",
    link: "/catalog?category=udlinit",
  },
  {
    name: "Плитка",
    description: "Акция на все модели СНОУБОРДОВ BURTON скидка 20%",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/82506199.jpg",
    link: "/catalog?category=oblic",
  },
  {
    name: "Обои",
    description: "Хит продаж СНОУБОРД BURTON CLASH за 14000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/82410472_i.jpg",
    link: "/auth/register",
  },
  {
    name: "Краски",
    description:
      "Специальное предложение на сноуборд СНОУБОРД BURTON CLASH за 8000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_160,c_pad,b_white,d_photoiscoming.png/LMCode/11467386.jpg",
    link: "/catalog?category=suhie",
  },
  {
    name: "Электроинструменты",
    description: "СНОУБОРД BLACK FIRE FIRE за 14000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/18769951.jpg",
    link: "/catalog?category=udlinit",
  },
  {
    name: "Плитка",
    description: "Акция на все модели СНОУБОРДОВ BURTON скидка 20%",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/82506199.jpg",
    link: "/catalog?category=oblic",
  },
  {
    name: "Обои",
    description: "Хит продаж СНОУБОРД BURTON CLASH за 14000 сом",
    image:
      "https://res.cloudinary.com/lmru/image/upload/f_auto,q_auto,h_240,c_pad,b_white,d_photoiscoming.png/LMCode/82410472_i.jpg",
    link: "/auth/register",
  },
];
export default class CategoriesSlides extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <h2> Категории товаров </h2>
        <Slider {...settings}>
          {images.map((item, i) => (
            <div>
              <Item key={i} item={item} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  banner: {
    height: "400px",
    position: "relative",
  },
  media: {
    height: 0,
    paddingTop: "76.25%",
    backgroundSize: "contain",
    position: "relative",
  },
  mediaCaption: {
    textOverflow: "ellipsis",
    position: "absolute",
    // bottom: 20,
    top: 10,
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    opacity: 0.8,
    width: "70%",
    textAlign: "center",
    left: "30px",
  },
  viewButton: {
    color: "black",
    border: "none",
    // border: "3px solid white",
    // textTransform: "capitalize",
    transition: "200ms",
  },
  slide: {
    margin: "15px",
  },
}));

function Item(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.slide}>
      <Paper>
        <Grid item xs={12} key={props.item.name}>
          <CardMedia
            className={classes.media}
            image={props.item.image}
            title={props.item.name}
          >
            <Typography className={classes.mediaCaption}>
              <Button
                className={classes.viewButton}
                variant="outlined"
                color="primary"
                onClick={() => history.replace(props.item.link)}
              >
                {props.item.name}
              </Button>
            </Typography>
          </CardMedia>
        </Grid>
      </Paper>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}
