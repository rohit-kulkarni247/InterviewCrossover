import React from "react";
import Navbar from "./UI/Navbar";
import laptop from "../laptop.png";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardInfo from "./UI/CardInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "4%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  head: {
    marginTop: "100px",
    fontSize: "70px",
    fontFamily: "monospace",
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
            <h2 className={classes.head}>hello world</h2>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <CardInfo />
        </Grid>
        <Grid item xs={3}>
          <CardInfo />
        </Grid>
      </Grid>
      <form>
        <script
          src="https://checkout.razorpay.com/v1/payment-button.js"
          data-payment_button_id="pl_HzBC0zvisy2gx6"
          async
        ></script>
      </form>
    </div>
  );
}

export default Landing;
