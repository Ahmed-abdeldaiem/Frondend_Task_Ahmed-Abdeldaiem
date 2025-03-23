import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import style from "./SideMenu.module.css";
import DescriptionIcon from "@mui/icons-material/Description";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { SideMenuContext } from "../../Context/SideMenuContext";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import EditMode from "../EditMode/EditMode";
import EditMode2 from "../EditMode2/EditMode2";




export default function SideMenu() {
  
  const { getMenuItems } = useContext(SideMenuContext);
  const [menuList, setMenuList] = useState([]);
  const [openItems, setOpenItems] = useState({});
  const [openSettings, setOpenSettings] = useState(false);
  const [eyeStates, setEyeStates] = useState(false);
  const handleToggle = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleEye = (id) => {
    setEyeStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  async function getMenuData() {
    // setLoading(true);
    let data = await getMenuItems();

    console.log(data);
    setMenuList(data);

    // setLoading(false);
  }

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <>
      <div>
        <List>
          <Box sx={{ padding: "15px" }}>
            <ListItemButton component={Link} to="/applications">
              <ListItemText primary="Menu" />
              <ListItemIcon onClick={() => setOpenSettings(!openSettings)}>
                {!openSettings ? (
                  <SettingsSuggestOutlinedIcon
                    sx={{ transition: "all .5s ease-in-out" }}
                  />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      transition: "all .5s ease-in-out",
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        border: "solid 2px",
                        borderColor: "#f44336",
                        color: "#f44336",
                      }}
                    >
                      <ClearIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        border: "solid 2px",
                        borderColor: "#4caf50",
                        color: "#4caf50",
                      }}
                    >
                      <CheckIcon fontSize="small" />
                    </IconButton>
                  </Box>
                )}
              </ListItemIcon>
            </ListItemButton>
          </Box>
          <Divider></Divider>

          {!openSettings ? (
            <Box sx={{ padding: "10px", transition: "all .5s ease-in-out" }}>
              {menuList?.length>0 ? menuList?.map((title, index) => {
                return (
                  <div key={index}>
                    {/* first logical condithon if visible = false  not render the item */}
                    {/*  // second logical condition if the item not visble and have cheldren then render it in list */}
                    {/* third logica condition not visble and not have children then render normally */}
                    {title?.visible === false ? null : "children" in title ? (
                      <List
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                      >
                        <ListItemButton
                          component={Link}
                          to={title?.target}
                          onClick={() => handleToggle(title.id)}
                        >
                          <ListItemText primary={title?.title} />
                          {openItems[title.id] ? (
                            <ExpandLess />
                          ) : (
                            <ExpandMore />
                          )}
                        </ListItemButton>
                        <Collapse
                          in={openItems[title.id]}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {title?.children?.map((child, index) =>
                              child?.visible === false ? null : (
                                <ListItemButton key={index} sx={{ pl: 4 }}>
                                  <ListItemText primary={child.title} />
                                </ListItemButton>
                              )
                            )}
                          </List>
                        </Collapse>
                      </List>
                    ) : (
                      <ListItemButton component={Link} to={title?.target}>
                        <ListItemText primary={title?.title} />
                        <ListItemIcon></ListItemIcon>
                      </ListItemButton>
                    )}
                  </div>
                );
              }): <><h6>Error fetch refresh</h6></>}
            </Box>
          ) : (


<EditMode2/>



       
           
          )}
        </List>
      </div>
    </>
  );
}
