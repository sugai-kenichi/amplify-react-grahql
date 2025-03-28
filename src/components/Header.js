import { Apps as AppsIcon, MoveToInbox as InboxIcon, Mail as MailIcon } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React, { useState } from "react";
import SidebarDataTopMenu from "./navigation/SidebarDataTopMenu";

const useStyle = makeStyles(({theme}) => ({
    header: {
      },
      appBar: {
        
      },
      toolbar: {
        backgroundColor: "#e63200",
        minHeight: "36px",
      },
      headerTitle: {
        fontSize: "20px" ,
        paddingRight: "20px",
      },
      headerUser: {
        marginLeft: "10px",
      },
}));

export const Header = () => {
    const classes = useStyle();
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
      };
    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {SidebarDataTopMenu.map((menuItem, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton href={menuItem.link}>
                <ListItemIcon>
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* <Divider />
        <List>
          {SidebarDataTopMenu.map((text, index) => (
            <ListItem key={text} disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Box>
    );
  
    return (
        <div className={classes.header}>
            <AppBar className={classes.appBar} backgroundColor="inherit"  position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.headerTitle}>BREXA</Typography>
                    <IconButton 
                      onClick={toggleDrawer(true)}
                      backgroundColor="#ffffff"
                      size="large"
                      edge="start"
                      color="#000000"
                      aria-label="menu"
                      sx={{ mr: 2, color: "#ffffff" }} >
                      <AppsIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button className={classes.headerUser} color="inherit" href="#">ユーザー名</Button>
                    <Button className={classes.headerUser} color="inherit" href="#">設定</Button>
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </Box>
        </div>
    )
};