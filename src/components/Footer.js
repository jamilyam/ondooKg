import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";


export default function Footer() {
  const history = useHistory();
  return (
    <div
      style={{
        borderTop: "4px solid green",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Divider style={{ margin: "24px auto", width: 60 }} />
      <Grid container justify={"center"} spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            align={"center"}
            gutterBottom
            color={"textSecondary"}
            onClick={() => history.replace("/about-us")}
          >
            О нас
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Блог
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Контакты
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Доставка
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Как оплатить
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Пункт выдачи заказов
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Как заказать
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Как оплатить
          </Typography>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            Клиентская поддержка
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}


