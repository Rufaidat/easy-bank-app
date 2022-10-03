import background from "../images/bg-intro-desktop.svg";
import phones from "../images/image-mockups.png";
import { Button, Typography } from "@mui/material";
const Banking = () => {
  const style = {
    padding: "10rem 0 5rem 10rem ",
    marginTop: "3rem",
    backgroundColor: "hsl(0, 0%, 98%)",
    position: "relative",
    height: "60vh",
    // overflowY: "hidden",
  };
  const introStyle = {
    width: "25rem",
    marginTop: "3rem",
  };
  const backgroundImgStyle = {
    position: "absolute",
    right: "-20%",
    top: "-14rem",
    // height: "50rem",
  };
  const phonesStyle = {
    position: "absolute",
    right: "-8rem",
    top: "-5.5rem",
  };
  return (
    <div style={style}>
      <div style={introStyle}>
        <Typography
          variant="h3"
          component="p"
          style={{ color: "hsl(233, 26%, 24%)" }}
        >
          Next generation digital banking
        </Typography>
        <Typography component="p" style={{ color: "hsl(233, 8%, 62%)" }}>
          {" "}
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Typography>
        <button style={{ marginTop: "1rem" }}>Request Invite</button>
      </div>
      <img src={background} style={backgroundImgStyle} />
      <img src={phones} style={phonesStyle} />
    </div>
  );
};

export default Banking;
