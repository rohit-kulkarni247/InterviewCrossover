import React from "react";
import Navbar from "./UI/Navbar";
import "./Landing.css";
import laptop from "../laptop.png";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function Landing() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <img src={laptop} alt="laptop" className="laptop" />
          </Grid>
          <Grid item xs={6}>
            <h2>hello world</h2>
          </Grid>
        </Grid>
      </div>
    </div>
    /* <img src={laptop} alt="laptop" className="laptop" />
      <h2>hello world</h2>*/
  );
}

export default Landing;
