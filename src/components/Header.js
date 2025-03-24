import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";

const useStyle = makeStyles(({theme}) => ({
    header: {
        display: "flex",
      },
      appBar: {
        padding: "8px",
        background: "#39284f",
        marginBottom: "104px",
      },
      headerTitle: {
        fontSize: "34px" ,
        flexGrow: 1,
        marginLeft: "8px",
      },
}));

export const Header = () => {
    const classes = useStyle();
    return (
        <div className={classes.header}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    <Typography className={classes.headerTitle}>Test Title</Typography>
                    <Button color="inherit" href="#">Github</Button>
                    <Button color="inherit" href="#">Twitter</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};