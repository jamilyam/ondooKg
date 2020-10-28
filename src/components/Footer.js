import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useHistory } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";

export default function Footer() {
  const history = useHistory();
  return (
    <div
      style={{
        borderTop: "4px solid orange",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Divider style={{ margin: "24px auto", width: 60 }} />
      <Grid container maxWidth="lg" justify={"center"} spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            align={"left"}
            gutterBottom
            color={"textPrimary"}
            onClick={() => history.replace("/about-us")}
          >
            О нас
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Блог
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Контакты
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Доставка
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Как оплатить
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Как заказать
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Как оплатить
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            Клиентская поддержка
          </Typography>
          <Typography align={"left"} gutterBottom color={"textPrimary"}>
            <InstagramIcon
              onClick={() => history.replace("https://www.instagram.com/")}
            />
            <YouTubeIcon
              onClick={() => history.replace("https://www.youtube.com/")}
            />
            <FacebookIcon onClick={() => history.replace("https://www.facebook.com/")} />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
