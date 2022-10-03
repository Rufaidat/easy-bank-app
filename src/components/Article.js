import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

const Article = () => {
  const style = {
    padding: "5rem 10rem 7rem 10rem ",
    backgroundColor: "hsl(0, 0%, 98%)",
    position: "relative",
    height: "60vh",
  };
  return (
    <div style={style}>
      <h1>Latest Articles</h1>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 250 }} elevation={0}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={currency}
            />
            <CardContent>
              <p className="article-author">By Claire Robinson</p>
              <h4 className="article-title">
                Receive money in any currency with no fees
              </h4>
              <p className="article-content">
                {" "}
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 250 }} elevation={0}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={restaurant}
            />
            <CardContent>
              <p className="article-author"> By Wilson Hutton</p>
              <h4 className="article-title">
                Treat yourself without worrying about money
              </h4>
              <p className="article-content">
                {" "}
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 250 }} elevation={0}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={plane}
            />
            <CardContent>
              <p className="article-author"> By Wilson Hutton</p>
              <h4 className="article-title">
                Take your Easybank card wherever you go
              </h4>
              <p className="article-content">
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 250 }} elevation={0}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="200"
              image={confetti}
            />
            <CardContent>
              <p className="article-author">By Claire Robinson</p>
              <h4 className="article-title">
                Our invite-only Beta accounts are now live!
              </h4>
              <p className="article-content">
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Article;
