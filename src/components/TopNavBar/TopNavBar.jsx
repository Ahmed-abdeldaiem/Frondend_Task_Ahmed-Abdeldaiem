import customStyle from "./TopNavBar.module.css";

import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Divider, { dividerClasses } from "@mui/material/Divider";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { Avatar, Drawer, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MenuDat1 from "../menuDat1/menuDat1";
import MenuDat2 from "../menuDat2/menuDat2";

// search section in NavBar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "999px",
  backgroundColor: "#fff",
  transition: "background-color 0.5s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
    padding: 6,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  width: "40px",
  height: "40px",

  backgroundColor: "#3d8e41",
  borderRadius: "100%",
  position: "absolute",
  left: "10px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "auto",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
// input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "28ch",
    },
  },
}));

export default function TopNavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);

  const toggleMobileDrawer = (open) => () => {
    setMobileDrawerOpen(open);
  };
  


  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      PaperProps={{
        sx: {
          mt: 1,
          borderRadius: "10px",
          border: "var(--Grid-borderWidth) solid",
        },
      }}
    >
    
    <MenuDat1/>   
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Drawer
    anchor="right"
    open={mobileDrawerOpen}
    onClose={toggleMobileDrawer(false)}
  >
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleMobileDrawer(false)}
      onKeyDown={toggleMobileDrawer(false)}
    >

    
      <MenuDat1/>  
    </Box>
  </Drawer>
  );










  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static" color="primary">
        <Toolbar
        
        >
          <Box sx={{display:"flex" , width:"100%" , justifyContent:{xs:"space-between" , md:"start"} , alignItems:"center"}}>
          {/* mobile navBar Icon ====> photo profile */}
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={toggleMobileDrawer(true)}
            sx={{ mr: 2, display: { md: "none", sm: "block" }, position:'relative' }}
          >
            <ListItemAvatar>
            <Avatar
              alt="Profile photo"
              src="https://github.com/Ahmed-abdeldaiem/Frontend-Task-API/blob/main/Ahmed%20Abdeldaiem.JPG?raw=true"
              sx={{ width: "55px", height: "55px" , marginRight:1 }}
            />
          </ListItemAvatar>
            <MenuIcon  sx={{position:"absolute" , bottom:"5%" , right:"15%", fontSize:"20px" , color:"gray" , backgroundColor:"#eee" , borderRadius:"50%" , padding:.4 }} />

          </IconButton>

          {/* Logo */}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ display: {  fontWeight: "bold" } }}
          >
            i<span className={customStyle.secondColor}>Z</span>AM
          </Typography>

  {/* search section in NavBar */}
  <Search sx={{
            display:{
              xs:"none",
              md:"flex"
            }
          }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by name, jop title, ..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          </Box>


        
          <Box sx={{ flexGrow: 1 }} />
         {/* First Box Home, jobs, employers */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                gap: 25,
                justifyContent: "space-evenly",
              },
            }}
          >
            {/* Home Icon */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              {/* badgeContent={4} */}

              <HomeOutlinedIcon />

              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Home
              </Typography>
            </IconButton>

            {/* job Icon  BusinessCenterIcon */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              <BusinessCenterIcon />
              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Jops
              </Typography>
            </IconButton>
            {/* employers icon  GroupsOutlinedIcon*/}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              <GroupsOutlinedIcon />

              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Employers
              </Typography>
            </IconButton>
          </Box>
          {/* divider between icons */}

          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              display:{
                xs: "none",
                md:"block"
              },
              borderColor: "gray",
              marginX: "1rem",
            }}
            flexItem
          />
{/* second Box notification , message , profile  */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
                gap: 25,
                justifyContent: "space-evenly",
              },
            }}
          >
            {/* notification Icon */}

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              <NotificationsOutlinedIcon />

              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Notifications
              </Typography>
            </IconButton>
            {/* message icon */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              <Badge badgeContent={1} color="error">
                <ChatBubbleOutlineOutlinedIcon />
              </Badge>

              <Typography
                variant="caption"
                gutterBottom
                sx={{ display: "block" }}
              >
                Messaging
              </Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              sx={{ dispay: "flex", flexDirection: "column", paddingY: "10px" }}
            >
              {/* <ListItemAvatar> */}
              <Avatar
                alt="Profile photo"
                src="https://github.com/Ahmed-abdeldaiem/Frontend-Task-API/blob/main/Ahmed%20Abdeldaiem.JPG?raw=true"
                sx={{ width: "28px", height: "28px", margin: 0, padding: 0 }}
              />

              {/* </ListItemAvatar> */}

              <Typography
                variant="caption"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Profile <ArrowDropDownIcon />
              </Typography>
            </IconButton>
          </Box>

       
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
