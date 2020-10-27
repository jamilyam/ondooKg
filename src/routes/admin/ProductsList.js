import React, { useState, useEffect } from "react";
import {
  CardHeader,
  Card,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
  Button,
  Grid,
} from "@material-ui/core";
import { MoreVert as MoreVertIcon } from "@material-ui/icons";
import emptyImage from "../../assets/empty-image.png";
import { useHistory, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/products/actions";
import { Pagination, PaginationItem } from "@material-ui/lab";

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

function ProductCard({ data }) {
  const classes = useStyles();
  const [isEdit, setEdit] = useState(false);
  const history = useHistory();

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEdit(!isEdit);
    history.replace("/admin/productsList/" + data.id);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>{data.author[0] || "?"}</Avatar>}
        action={
          <IconButton aria-label="settings" onClick={handleEditClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.author}
        onError={(e) => {
          console.log("error");
          e.target.src = emptyImage;
        }}
      />
      <CardMedia className={classes.media}>
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
            size="medium"
            className={classes.saleIndicator}
            color="secondary"
            variant="contained"
          >
            -{data.discountInPercent}
          </Button>
        )}
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.CardActions} disableSpacing>
        <div>
          {data.salePrice != null && (
            <Button className={classes.oldPrice} color="secondary">
              {data.price}{" "}
            </Button>
          )}

          <Button size="large" color="primary">
            {data.salePrice ?? data.price}
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

export default function ProductsList() {
  const { data, loading, error, totalCount } = useSelector(
    (state) => state.products
  );

  const dispatch = useDispatch();

  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const page = query.get("_page") || 1;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch, location.search]);

  if (loading) {
    return <h1>Fetch data...</h1>;
  }
  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
    <>
      <Grid container>
        {data.map((item) => (
          <Grid key={"product-card-" + item.id} item xs={12} md={4}>
            <ProductCard data={item} />
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Pagination
          count={Math.ceil(totalCount / 6)}
          page={parseInt(page)}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/admin/productsList/?_page=${item.page}`}
              {...item}
            />
          )}
        />
      </Grid>
    </>
  );
}