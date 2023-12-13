import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "black" }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="2023 Annual Metro Sportz Bar & Billiards Tournament"
        subheader="December 29th, 2023 @ 7PM"
      />
      <CardMedia
        component="img"
        height="194"
        image="/billiards-image.jpg"
        alt="2023 Annual Pool Tournament"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          10111 N Metro Pkwy E, Phoenix, AZ 85051
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Details:</Typography>
          <Typography paragraph>Hosted by Metro Sportz Bar.</Typography>
          <Typography paragraph>
            Location:{" "}
            <a
              href="https://www.google.com/maps/place/Metro+Sportz+Bar+%26+Billiards/@33.5794613,-112.1372131,15z/data=!3m1!4b1!4m6!3m5!1s0x872b6c41f8d218ff:0x5ad55f97e68cc4b7!8m2!3d33.5794448!4d-112.1187591!16s%2Fg%2F11b77bx7ff?entry=ttu"
              target="_blank"
            >
              10111 N Metro Pkwy E, Phoenix, AZ 85051
            </a>
            <br />
            Phone:{" "}
            <a href="tel:+16029975717" target="_blank">
              (602) 997-5717
            </a>{" "}
            <br />
            Time: December 29th, 2023 @ 7PM <br />
            <br />
            Entry: TBD <br />
            Side Pot: TBD
          </Typography>
          <Typography paragraph>
            Rules: Standard <br />
            Prizes: Cash <br />
            Space to Play: Spacious <br />
            Noise Level: Loud <br />
            Equipment: Good <br />
            Tables In Use: 40
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
