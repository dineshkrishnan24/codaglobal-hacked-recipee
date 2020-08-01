import React from "react";
import { Typography, Grid, TextField, makeStyles } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
  },
});

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        container
        spacing={2}
        alignItems="flex-end"
      >
        <Grid item xs={12} lg={6}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchRounded />
            </Grid>
            <Grid item>
              <TextField
                id="input-with-icon-grid"
                label="Search you recipe... "
                onChange={(event) => {
                  props.searchRecipe(event.target.value);
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography align="right" color="textSecondary">
            {" "}
            CATEGORY
          </Typography>
          <Typography
            variant="h3"
            align="right"
          >{`Pizza & Noodels`}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
