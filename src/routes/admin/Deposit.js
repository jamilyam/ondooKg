import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  const history = useHistory();
  const totalOrdersAmount = useSelector((state) => {
    return state.products.orders.total;
  });
  return (
    <React.Fragment>
      <Title>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        {totalOrdersAmount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {new Date().toLocaleString()}
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={() => history.replace("/admin/orders")}
        >
          Посмотреть заказы
        </Link>
      </div>
    </React.Fragment>
  );
}
