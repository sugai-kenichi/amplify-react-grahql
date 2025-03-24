import { Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";

const useStyle = makeStyles((theme) => ({
    titleName: {
        textAlign: "center",
        marginTop: "40px",
        fontSize: "60px",
    },
}));

export const Title = () => {
    const classes = useStyle();
    return (
        <div className="title">
            <Typography className={classes.titleName}>Track Fortnite Status...</Typography>
        </div>
    );
};