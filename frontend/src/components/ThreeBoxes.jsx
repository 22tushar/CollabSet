import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  Chat as ChatIcon,
  People as PeopleIcon,
  Assignment as AssignmentIcon
} from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  boxesContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: "30px"
  },
  box: {
    width: "30%",
    padding: "30px",
    textAlign: "center",
    border: "1px solid lightgray",
    borderRadius: "5px"
  },
  fourthBox: {
    width: "90%",
    height: "100px",
    marginTop: "30px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "lightgray"
  }
});

const ThreeBoxes = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.boxesContainer}>
        <div className={classes.box}>
          <ChatIcon fontSize="large" />
          <h3>Connect</h3>
        </div>
        <div className={classes.box}>
          <PeopleIcon fontSize="large" />
          <h3>Collaborate</h3>
        </div>
        <div className={classes.box}>
          <AssignmentIcon fontSize="large" />
          <h3>Keep Track</h3>
        </div>
      </div>
      <div className={classes.fourthBox}>
        <h3>Connecting Opportunities with Talent</h3>
      </div>
    </div>
  );
};

export default ThreeBoxes;
