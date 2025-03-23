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
import style from "./EditMode.module.css";
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




export default function EditMode() {


  const { getMenuItems } = useContext(SideMenuContext);
  const [menuList, setMenuList] = useState([]);
  
  const [openSettings, setOpenSettings] = useState(false);
  const [eyeStates, setEyeStates] = useState({});

  

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

  return <>
  
            <Box sx={{ padding: "10px", transition: "all .5s ease-in-out" }}>
              {menuList?.length>0 ? menuList?.map((title, index) => {
                return (
                  <div key={index}>
                    {/* first logical condithon if visible = false    render the item in diffrent way*/}
                    {/*  // second logical condition if the item not visble and have cheldren then render it in list */}
                    {/* third logica condition not visble and not have children then render normally */}
                    {title?.visible === false ? (
                      <>
                        <ListItemButton sx={{ color: "gray" }}>
                          <DragIndicatorIcon />

                          <ListItemText primary={title?.title} sx={{ ml: 1 }} />

                          <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />
                          {/* eye toggle visible  */}
                          <Box
                            onClick={(e) => {
                              e.stopPropagation(); 
                              toggleEye(title.id);
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            {eyeStates[title.id] ? (
                              <VisibilityOffOutlinedIcon color="action" />
                            ) : (
                              <RemoveRedEyeOutlinedIcon color="action" />
                            )}
                          </Box>
                        </ListItemButton>
                        
                      </>
                    ) : "children" in title ? (
                      <List
                        sx={{ width: "100%", bgcolor: "background.paper" }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                      >
                        <ListItemButton
                        >
                           <DragIndicatorIcon />
                          <ListItemText primary={title?.title} />
                        
                          <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />
                          {/* eye toggle visible  */}
                          <Box
                            onClick={(e) => {
                              e.stopPropagation(); 
                              toggleEye(title.id);
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            {eyeStates[title.id] ? (
                              <VisibilityOffOutlinedIcon color="action" />
                            ) : (
                              <RemoveRedEyeOutlinedIcon color="action" />
                            )}
                          </Box>
                        </ListItemButton>
                      
                          <List component="div" disablePadding>
                            {title?.children?.map((child, index) =>
                              child?.visible === false ? (
                                <>
                                  <ListItemButton
                                    key={index}
                                    sx={{ pl: 4, color: "gray" }}
                                  >
                                     <DragIndicatorIcon />
                                    <ListItemText primary={child.title} />
                                    <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />
                          {/* eye toggle visible  */}
                          <Box
                            onClick={(e) => {
                              e.stopPropagation(); 
                              toggleEye(child.id);
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            {eyeStates[child.id] ? (
                              <VisibilityOffOutlinedIcon color="action" />
                            ) : (
                              <RemoveRedEyeOutlinedIcon color="action" />
                            )}
                          </Box>
                                  </ListItemButton>
                                  
                                </>
                              ) : (
                                <ListItemButton key={index} sx={{ pl: 4 }}>
                                   <DragIndicatorIcon />
                                  <ListItemText primary={child.title} />
                                  
                          <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />
                          {/* eye toggle visible  */}
                          <Box
                            onClick={(e) => {
                              e.stopPropagation(); 
                              toggleEye(child.id);
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            {eyeStates[child.id] ? (
                              <VisibilityOffOutlinedIcon color="action" />
                            ) : (
                              <RemoveRedEyeOutlinedIcon color="action" />
                            )}
                          </Box>
                                </ListItemButton>
                              )
                            )}
                          </List>
                      
                      </List>
                    ) : (
                      <ListItemButton>
                         <DragIndicatorIcon />
                        <ListItemText primary={title?.title} />
                       
                        <ListItemIcon></ListItemIcon>
                        
                        <EditOutlinedIcon sx={{ ml: "auto", mr: 1 }} />
                          {/* eye toggle visible  */}
                          <Box
                            onClick={(e) => {
                              e.stopPropagation(); 
                              toggleEye(title.id);
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            {eyeStates[title.id] ? (
                              <VisibilityOffOutlinedIcon color="action" />
                            ) : (
                              <RemoveRedEyeOutlinedIcon color="action" />
                            )}
                          </Box>
                      </ListItemButton>
                    )}
                  </div>
                );
              }): <><h6>Error fetch refresh</h6></>}
            </Box>
  </>
}
