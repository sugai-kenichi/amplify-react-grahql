import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";

const useStyle = makeStyles(({theme}) => ({
    header: {
      },
      appBar: {
        background: "#39284f",
      },
      toolbar: {
      },
      headerTitle: {
        fontSize: "34px" ,
      },
      headerUser: {
        marginLeft: "10px",
      },
}));

export const Header = () => {
    const classes = useStyle();
    return (
        <div className={classes.header}>
            <AppBar className={classes.appBar}  position="static">
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.headerTitle}>Majestic</Typography>
                    <div style={{ flexGrow: 1 }}></div>
                    <Button className={classes.headerUser} color="inherit" href="#">ユーザー名</Button>
                    <Button className={classes.headerUser} color="inherit" href="#">設定</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};