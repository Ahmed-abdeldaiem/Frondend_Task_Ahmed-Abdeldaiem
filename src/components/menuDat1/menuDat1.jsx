import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import style from "./MenuDat1.module.css";
import MenuDat2 from "../menuDat2/menuDat2";

// MenuDat1 is a repeated part in many screen and many function so I make it as a Sepereted component

export default function MenuDat1() {
  const [counter, setCounter] = useState(0);

  const menuData = (
    <>
      <MenuItem>
        <ListItem sx={{ marginRight: 0 }}>
          <ListItemAvatar>
            <Avatar
              alt="Profile photo"
              src="https://github.com/Ahmed-abdeldaiem/Frontend-Task-API/blob/main/Ahmed%20Abdeldaiem.JPG?raw=true"
              sx={{ width: "65px", height: "65px", marginRight: 1 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Ahmed Abdeldaiem"
            secondary="Frontend Developer"
          />
        </ListItem>
        <IconButton edge="end" aria-label="forward">
          <ArrowForwardIosIcon sx={{ fontSize: "small" }} />
        </IconButton>
      </MenuItem>
      <Divider
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
        }}
      />
      <MenuDat2 />
      <Divider />

      <Box sx={{ paddingY: 2  , color:"gray"}}>
        <MenuItem>Setting and privacy</MenuItem>
        <MenuItem>Language</MenuItem>
        <MenuItem>Help</MenuItem>
      </Box>

      <Divider />
      <MenuItem>
        {" "}
        <Typography sx={{ color: "red", paddingY: 2 }}>Logout</Typography>
      </MenuItem>
    </>
  );

  return <>{menuData}</>;
}
