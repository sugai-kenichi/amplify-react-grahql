import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid2, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React, { useState } from "react";

const useStyle = makeStyles((theme) => ({

    header: {
    },
    appBar: {
      
    },
    toolbar: {
      backgroundColor: "#e0e1e2",
      minHeight: "36px",
    },
    headerTitle: {
      fontSize: "20px" ,
    },
    headerUser: {
      marginLeft: "10px",
    },
}));

const pages = [
    {title: 'インフォメーション', to: '/Infomation', text: '各種周知事項はこちら' },
    {title: '各種申請', to: '/contact', text: '各種申請はこちら' },
    {title: '社員情報', to: '/contact', text: '社員情報はこちら' },
    {title: '社内規定', to: '/contact', text: '社内規定はこちら' },
];

const LinkComponent = ({page}) => {
    return (
        <Grid2 item xs={12} sm={6} md={4}>
            <Card variant="outlined" sx={{ width: 400, minHeight: 200 }}>
                <CardActionArea href={page.to}>
                    <CardHeader title={page.title} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {page.text}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>button</Button>
                </CardActions>
            </Card>
        </Grid2>
    )
}


export const Title = () => {
    const classes = useStyle();
    // 検索キーワードで絞り込み
    const [filteredPages, setFilteredPages] = useState(pages)
    const filterPages = (keyword) => {
        const includesKeywordPages = pages.filter((page) => page.title.includes(keyword));
        setFilteredPages(includesKeywordPages);
    };
    return (
        <>
            <div className={classes.header}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar className={classes.toolbar}>
                            <IconButton 
                                size="large"
                                edge="start"
                                color="#000000"
                                aria-label="menu"
                                sx={{ mr: 2 }} >
                                <MenuIcon />
                            </IconButton>
                            <TextField className={classes.headerTitle} label="検索キーワード" onChange={(event) => filterPages(event.target.value)}></TextField>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <Box sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}>
                <Grid2 container Spacing={20} justifyContent="center">
                    {filteredPages.map((page) => (
                        <LinkComponent page={page} key={page.title}/>
                    ))}
                </Grid2>
            </Box>
        </>
        
    );
};