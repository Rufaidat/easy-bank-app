import { Grid } from "@mui/material";
import logo from "../images/logo.svg";
import facebook from "../images/icon-facebook.svg";
import youtube from "../images/icon-youtube.svg";
import twitter from "../images/icon-twitter.svg";
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
import { BrowserRouter as Link } from "react-router-dom";
const Footer = () => {
  const style = {
    padding: "5rem 11rem 5rem 10rem ",
    backgroundColor: "hsl(233, 26%, 24%)",
    position: "relative",
  };
  return (
    <div style={style}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Grid container spacing={10}>
            <Grid item>
              <img src={logo} />
              <Grid container>
                <Grid item xs={2.4}>
                  <img src={facebook} />
                </Grid>
                <Grid item xs={2.4}>
                  <img src={youtube} />
                </Grid>
                <Grid item xs={2.4}>
                  <img src={twitter} />
                </Grid>
                <Grid item xs={2.4}>
                  <img src={pinterest} />
                </Grid>
                <Grid item xs={2.4}>
                  <img src={instagram} />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              {" "}
              <Link className="footer-link">About Us</Link>
              <br />
              <br />
              <Link className="footer-link">Contact</Link>
              <br />
              <br />
              <Link className="footer-link">Blog</Link>
            </Grid>
            <Grid item xs={3}>
              <Link className="footer-link">Careers</Link>
              <br />
              <br />
              <Link className="footer-link">Support</Link>
              <br />
              <br />
              <Link className="footer-link">Privacy Policy</Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <button style={{ marginLeft: "16rem" }}>Request Invite</button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
