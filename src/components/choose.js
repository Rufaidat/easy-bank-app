import { Grid, Typography } from "@mui/material";
import online from "../images/icon-online.svg";
import onboarding from "../images/icon-onboarding.svg";
import budgeting from "../images/icon-budgeting.svg";
import api from "../images/icon-api.svg";
import { fontSize } from "@mui/system";
const cards = [
  {
    img: `${online}`,
    title: " Online Banking",
    text: " Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    img: `${budgeting}`,
    title: "Simple Budgeting",
    text: " See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    img: `${onboarding}`,
    title: " Fast Onboarding",
    text: "   We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    img: `${api}`,
    title: " Open API",
    text: " Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];
const Choose = () => {
  const style = {
    padding: "10rem 15rem 5rem 10rem ",
    backgroundColor: "hsl(220, 16%, 96%)",
    position: "relative",
    height: "65vh",
    zIndex: "-1",
  };

  const chooseStyle = {
    width: "40rem",
    marginTop: "3rem",
  };
  return (
    <div style={style}>
      <div style={chooseStyle}>
        <h1>Why choose Easybank?</h1>
        <p
          component="p"
          style={{ color: "hsl(233, 8%, 62%)", fontSize: "1.1rem" }}
        >
          {" "}
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div>
        <Grid container spacing={3}>
          {cards.map((elem) => (
            <Grid item xs={3}>
              <img src={elem.img} style={{ margin: "4rem 0 1rem" }} />

              <h3 style={{ margin: "1rem 0", fontWeight: "lighter" }}>
                {elem.title}
              </h3>
              <p>{elem.text}</p>
            </Grid>
            // <Grid item xs={3}>
            //   {/* <img src={elem.img} /> */}
            //   <Typography>{elem.title}</Typography>
            // </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Choose;
