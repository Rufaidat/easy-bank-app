import { AppBar, Toolbar, Grid } from "@mui/material";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../images/logo.svg";

const NavBar = () => {
  const headerStyle = {
    background: "hsl(0, 0%, 100%)",
    color: "hsl(233, 8%, 62%)",
    // padding: ".5rem 0",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 0 0 9rem",
  };
  const linkStyle = {
    margin: "0 15rem 0 18rem",
  };

  return (
    <div className="header">
      <Router>
        <AppBar position="fixed" elevation={0} style={headerStyle}>
          <Grid item xs={2}>
            <img src={logo} id="logo"></img>
          </Grid>
          <Grid item xs={8} style={linkStyle}>
            <Toolbar>
              {" "}
              <Link className="link">Home</Link>
              <Link className="link">About</Link>
              <Link className="link">Contact</Link>
              <Link className="link">Blog</Link>
              <Link className="link">Careers</Link>
            </Toolbar>
          </Grid>
          <Grid item xs={2}>
            <button color="inherit" style={{ marginTop: ".6rem" }}>
              Request Invite
            </button>
          </Grid>
          <Grid container></Grid>
        </AppBar>
      </Router>
    </div>
  );
};
export default NavBar;
