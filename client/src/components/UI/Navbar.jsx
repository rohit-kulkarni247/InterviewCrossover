import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import DeckSharpIcon from "@material-ui/icons/DeckSharp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ background: "white", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton edge="start" className={classes.logo} aria-label="menu">
            <DeckSharpIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Interview Crossover
          </Typography>
          <Link
            to="/getallposts"
            style={{ textDecoration: "none", color: "black" }}
            color="inherit"
          >
            <Button color="inherit">Experiences</Button>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "black" }}
            color="inherit"
          >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
