import React from "react";
import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  Grid,
  IconButton,
} from "@material-ui/core";
import { FavoriteBorderRounded, Favorite } from "@material-ui/icons";
import { toTitleCase } from "../../Utils";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    width: "80%",
    margin: "auto",
  },
  media: {
    height: 140,
  },
  search: {
    backgroundColor: "yellow",
  },
}));

export default function CardList(props) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Grid container spacing={2} className={classes.root}>
      {props.recipes.map((recipe) => (
        <Grid item xs={12} md={6} lg={3} key={recipe.id}>
          <Card>
            <CardActionArea
              onClick={() => {
                history.push(`/recipes/${recipe.id}`);
              }}
            >
              <CardMedia
                className={classes.media}
                image={recipe.image}
                title={recipe.name}
              />
              <div style={{ position: "absolute", opacity: "0" }}></div>
            </CardActionArea>
            <CardContent>
              <Grid container>
                <Grid
                  item
                  xs={10}
                  className={recipe.isSearch ? classes.search : ""}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {recipe.name}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <IconButton
                    style={{ padding: "0px" }}
                    onClick={() => props.changeFav(recipe.id)}
                  >
                    {recipe.isFav ? (
                      <Favorite style={{ color: "red" }} />
                    ) : (
                      <FavoriteBorderRounded />
                    )}
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Catergory  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {toTitleCase(recipe.category)}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Typography align="right" variant="subtitle1">
                    {"Price  :"}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" color="textSecondary">
                    {`$ ${recipe.price}`}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2" color="textSecondary" component="p">
                {recipe.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
