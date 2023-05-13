import React from "react"
import { useTheme } from "react-jss"
import Style from "../Style"
const Facts = () => {
  const theme = useTheme()
  const classes = Style({ theme })
  return (
    <div className={classes.countContainer}>
      <div>
        <h1 className={classes.numberTxt}>1234</h1>
        <p className={classes.subTxt}>Lorem Ipsum is simply.</p>
      </div>
      <div>
        <h1 className={classes.numberTxt}>1234</h1>
        <p className={classes.subTxt}>Lorem Ipsum is simply.</p>
      </div>
    </div>
  );
};

export default Facts;
