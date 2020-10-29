import React, { useMemo } from "react";
import {
  Card,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
  Box,
} from "@material-ui/core";
import emptyImage from "../assets/empty-image.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart} from "../redux/products/actions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from "@material-ui/lab/Rating";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundSize: "contain",
    position: "relative",
  },
  mediaImage: {
    position: "absolute",
    height: "100%",
    maxWidth: "100%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
  oldPrice: {
    textDecoration: "line-through",
  },
  card: {
    margin: "10px",
    display: 'block',
    transitionDuration: "0.3s",
    height:"30vw",
  },
  saleIndicator: {
    position: "absolute",
    top: "5px",
    right: "5px",
  },
  CardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function ProductCard({ data }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(data));
  };

  const cart = useSelector((state) => state.products.cart);

  const isInCart = useMemo(() => {
    return cart.some((cartItem) => cartItem.id === data.id);
  }, [cart, data.id]);

  const [value, setValue] = React.useState(2);

  return (
    <Card height="100%" className={classes.card}>
      <CardMedia height="50%" className={classes.media}>
        <img
          className={classes.mediaImage}
          src={data.image || emptyImage}
          onError={(e) => {
            e.target.src = emptyImage;
          }}
          alt={data.title}
        />
        {data.discountInPercent != null && (
          <Button
            size="small"
            className={classes.saleIndicator}
            color="primary"
            variant="contained"
          >
            -{data.discountInPercent}
          </Button>
        )}
      </CardMedia>
      <CardContent height="35%">
        <Typography variant="body2" color="textSecondary" component="p">
          Арт.{data.id}
        </Typography>
        <Typography gutterBottom variant="h6" component="h6">
          {data.title}
        </Typography>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>
      </CardContent>
      <CardActions className={classes.CardActions} disableSpacing>
        <div>
          {isInCart ? (
            <IconButton style={{ color: "orange" }} aria-label="add to card">
              <ShoppingCartIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={handleAddToCart}
              disabled={data.inventory > 0 ? "" : "disabled"}
              aria-label="add to card"
            >
              {data.inventory > 0 ? "" : "Нет в наличии"}
              <ShoppingCartIcon />
            </IconButton>
          )}
        </div>
        <div>
          {data.salePrice != null && (
            <Button className={classes.oldPrice} color="secondary">
              {data.price}
              {"сом/шт"}
            </Button>
          )}
          <Button size="large" color="primary">
            {data.salePrice ?? data.price}
          </Button>
          <Button
            size="large"
            color="primary"
            onClick={() => history.replace("/products/" + data.id)}
          >
            Подробнее
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}