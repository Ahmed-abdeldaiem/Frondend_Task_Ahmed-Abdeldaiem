import * as React from 'react';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DescriptionIcon from '@mui/icons-material/Description';
import SideMenu from '../SideMenu/SideMenu';
import HomeContent from '../HomeContent/HomeContent';
import { Outlet } from 'react-router-dom';
import Applications from '../Applications/Applications';
import { useTheme } from '@emotion/react';
import CloseIcon from '@mui/icons-material/Close';



function Home() {
 
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down("md")); // md and smaller



  return (



    <>
    <Grid container spacing={0} sx={{ backgroundColor: "#f5f5f5" }}>
      {/* Sidebar (only visible on mdUp) */}
      {!isMdDown && (
        <Grid item md={3}>
          <Box
            sx={{
              backgroundColor: "#fff",
              height: "100vh",
            }}
          >
            <SideMenu />
          </Box>
        </Grid>
      )}

      {/* Main Content (11 columns on mdDown, 9 on mdUp) */}
      <Grid item xs={11} md={9}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Outlet />
        </Box>
      </Grid>

      {/* Menu Button (only on mdDown) */}
      {isMdDown && (
        <Grid item xs={1}>
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              pt: 2,
            }}
          >
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Grid>
      )}
    </Grid>

    <Drawer
  anchor="left"
  open={drawerOpen}
  onClose={() => setDrawerOpen(false)}
  PaperProps={{
    sx: {
      width: "100%",
      backgroundColor: "#fff",
      position: "relative",
    },
  }}
>
  <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
    <IconButton onClick={() => setDrawerOpen(false)}>
      <CloseIcon />
    </IconButton>
  </Box>
  <SideMenu />
</Drawer>

  </>

  );
}

export default Home;
