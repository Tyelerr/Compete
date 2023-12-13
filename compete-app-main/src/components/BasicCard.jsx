import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Player Spotlight
        </Typography>
        <Typography variant="h5" component="div">
          Tyelerr Hill
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Presented by Metro Sports Bar & Billiards
        </Typography>
        <Typography variant="body2">
          2023 Annual Metro Sportz Bar & Billiards Tournament Winner
          <br />
          #1 of 78 Contestants
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
}
