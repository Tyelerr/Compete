import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Paper from "@mui/material/Paper";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ScatterPlotRoundedIcon from "@mui/icons-material/ScatterPlotRounded";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <Paper
        className="App-paper"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={12}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} />
          <BottomNavigationAction
            label="Billiards"
            icon={<ScatterPlotRoundedIcon />}
          />
          {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
          <BottomNavigationAction label="Team" icon={<PeopleRoundedIcon />} />
          <BottomNavigationAction
            label="Profile"
            icon={<AccountCircleRoundedIcon />}
          />
          <BottomNavigationAction
            label="More"
            icon={<MoreHorizRoundedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
