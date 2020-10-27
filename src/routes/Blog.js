import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default function Blog() {
  const featuredPosts = [
    {
      title: "Статья",
      date: "Окт 12",
      description: "Стилизуй гостинную в оттенках синего и зеленного цвета",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto/elbrus/gallery_project/ottenki-sinego-i-zelenogo-v-gostinoy.jpg",
      imageText: "",
    },
    {
      title: "Рекоммендации по выбору мебели",
      date: "Окт 19",
      description:
        "Закажи кухню в натуральных оттенках или в скандинавском стиле.",
      image:
        "https://res.cloudinary.com/lmru-test/image/upload/f_auto,q_auto/elbrus/gallery_project/linii-i-naturalnye-ottenki-na-kuhne.png",
      imageText: "",
    },
  ];

  return (
    <Grid container spacing={4}>
      {featuredPosts.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))}
    </Grid>
  );
}
