import React, { useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Zoom from "react-reveal/Zoom";
import emptyImage from "../assets/empty-image.png";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/products/actions";
import ProductDesc from "./ProductDesc";
import { CardContent, Box, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  image: {
    width: 500,
    height: 500,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  oldPrice: {
    textDecoration: "line-through",
  },
}));

export default function ProductPage() {
    const classes = useStyles();
    const[data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();
    const dispatch = useDispatch();

    const fetchDetails = () => {
      Axios.get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch(setError)
        .finally(() => setLoading(false));
    };

    useEffect(() => {
      fetchDetails();
    }, [params]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1 className="text-danger">Error : {error.message}</h1>;

  const handleAddToCart = () => {
    dispatch(addItemToCart(data));
  };

  // const cart = useSelector((state) => state.products.cart);

  // const isInCart = useMemo(() => {
  //   return cart.some((cartItem) => cartItem.id === data.id);
  // }, [cart, data.id]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Zoom>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  src={data.image || emptyImage}
                  onError={(e) => {
                    e.target.src = emptyImage;
                  }}
                  alt={data.title}
                />
              </ButtonBase>
            </Zoom>
          </Grid>
          <Grid item xs={12} sm={6} container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Арт.{data.id}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {data.title}
                  </Typography>
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                      name="simple-controlled"
                      // value={value}
                      // onChange={(event, newValue) => {
                      //   setValue(newValue);
                      // }}
                    />
                  </Box>
                </CardContent>
                {data.salePrice != null && (
                  <Typography className={classes.oldPrice} color="secondary">
                    {data.price} сом/шт
                  </Typography>
                )}
                <Typography variant="h3">
                  {data.salePrice ?? data.price} сом/шт
                </Typography>
                <Grid item>
                  {/* {isInCart ? (
                  <Button style={{ color: "orange" }} aria-label="add to card">
                    В корзину
                  </Button>
                ) : ( */}
                  <Button
                    onClick={handleAddToCart}
                    disabled={data.inventory > 0 ? "" : "disabled"}
                    aria-label="add to card"
                    color="primary"
                    variant="contained"
                  >
                    {data.inventory > 0 ? "" : "Нет в наличии"}В корзину
                  </Button>
                  {/* )} */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ProductDesc item={data} />
          </Grid>
        </Grid>
        {/* <Grid container>
          <Grid item xs={12} md={8}>
            <Typography variant="h2" gutterBottom>
              Описание
            </Typography>
            <Divider />
            <Typography>
              {data.description}
            </Typography>
          </Grid>
        </Grid> */}
      </Paper>
    </div>
  );
}
