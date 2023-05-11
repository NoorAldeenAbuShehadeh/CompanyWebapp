import React from "react";
import { useTheme } from "react-jss";
import Style from "./Style";
import { Alert } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import { IoMdDesktop } from "react-icons/io";
import DivCircle from "./DivCircle";

const Development = () => {
  const theme = useTheme();
  const classes = Style({ theme });
  return (
    <>
      <Alert className={classes.DoContainer}>
        <Alert variant="light" className={classes.AlertCont}>
          <div className={classes.baseDevComp}>
            <DivCircle color={"#FD5B71"} Logo={BsCodeSlash} />
            <div style={{ marginLeft: "12px" }}>
              <span className={classes.textDevComp}>Web Development</span>
              <div className={classes.baseDevComp}>
                <Alert variant="secondary" className={classes.AlertTxt}>
                  Personal
                </Alert>
                <Alert variant="danger" className={classes.AlertTxt}>
                  Coding
                </Alert>
              </div>
            </div>
          </div>
        </Alert>

        <Alert variant="light" className={classes.AlertCont1}>
          <div className={classes.baseDevComp}>
            <DivCircle color={"#9B51E0"} Logo={IoMdDesktop} />
            <div style={{ marginLeft: "12px" }}>
              <span className={classes.textDevComp}>Game Develepmet</span>
              <div className={classes.baseDevComp}>
                <Alert variant="danger" className={classes.AlertTxt}>
                  Work
                </Alert>
                <Alert variant="secondary" className={classes.AlertTxt}>
                  Interactive games
                </Alert>
              </div>
            </div>
          </div>
        </Alert>
      </Alert>
    </>
  );
};

export default Development;
