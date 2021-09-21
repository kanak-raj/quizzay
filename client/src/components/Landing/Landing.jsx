import React from "react";
import DemoButton from "./DemoButton";
import Icon from "../Layout/Icon";
import NavBar from "../Layout/NavBar";

const Landing = (props) => {
  return (
    <React.Fragment>
      <NavBar
        isLoggedIn={props.isLoggedIn}
        checkLogin={props.checkLogin}
        onLogout={props.onLogout}
      />
      <div className="container-fluid bg">
        <div className="" style={{ textAlign: "center", marginTop: "10vh" }}>
          <Icon size="240px" />
        </div>
        <div className="jumbo">Quizzay: The Quiz Builder</div>
        <div className=" jumbo-subtitle">
          Get a quiz code to join
        </div>
        {/* <div className="mt-5" style={{ textAlign: "center" }}>
          <DemoButton />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Landing;
