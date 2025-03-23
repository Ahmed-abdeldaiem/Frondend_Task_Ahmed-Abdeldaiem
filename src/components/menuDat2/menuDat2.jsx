import React, { useState } from "react";
import {
  Avatar,
  Badge,
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
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import style from "./MenuDat2.module.css";

// MenuDat2 is the secont part of mobile and small screen list

export default function MenuDat2() {
  const [counter, setCounter] = useState(0);

  const menuData = (
    <>
      <Box sx={{ flexGrow: 1 }} />
      {/* First Box Home, jobs, employers */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          flexDirection:"column",
          alignItems:"start"
        }}
      >
        {/* Home Icon */}
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ dispay: "flex", flexDirection: "row" , paddingY: "10px" , color:"gray" }}
        >
          <HomeOutlinedIcon />

          <Typography variant="subtitle1" gutterBottom sx={{ display: "block" , marginLeft:"10px"   }}>
            Home
          </Typography>
        </IconButton>

        {/* job Icon  BusinessCenterIcon */}
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ dispay: "flex", flexDirection: "row" , paddingY: "10px" , color:"gray" }}
        >
          <BusinessCenterIcon />
          <Typography variant="subtitle1" gutterBottom sx={{ display: "block"  , marginLeft:"10px" , } }>
            Jops
          </Typography>
        </IconButton>
        {/* employers icon  GroupsOutlinedIcon*/}
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ dispay: "flex", flexDirection: "row" , paddingY: "10px" , color:"gray" }}
        >
          <GroupsOutlinedIcon />

          <Typography variant="subtitle1" gutterBottom sx={{ display: "block" , marginLeft:"10px"   }}>
            Employers
          </Typography>
        </IconButton>

        {/* divider between icons */}

        {/* notification Icon */}

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          sx={{ dispay: "flex", flexDirection: "row" , paddingY: "10px" , color:"gray" }}
        >
          <NotificationsOutlinedIcon />

          <Typography variant="subtitle1" gutterBottom sx={{ display: "block" , marginLeft:"10px"   }}>
            Notifications
          </Typography>
        </IconButton>
        {/* message icon */}
        <IconButton
          size="large"
          aria-label="show 4 new mails"
          color="inherit"
          sx={{ dispay: "flex", flexDirection: "row" , paddingY: "10px" , color:"gray" }}
        >
          <Badge badgeContent={1} color="error">
            <ChatBubbleOutlineOutlinedIcon />
          </Badge>

          <Typography variant="subtitle1" gutterBottom sx={{ display: "block" , marginLeft:"10px"   }}>
            Messaging
          </Typography>
        </IconButton>
      </Box>
    </>
  );

  return <>{menuData}</>;
}
