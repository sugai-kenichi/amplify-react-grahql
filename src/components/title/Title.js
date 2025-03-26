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
      backgroundColor: "#FFFFFF",
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
    {title: 'Top', to: '/', text: 'Top' },
    {title: 'Infomation', to: '/Infomation', text: 'Infomation' },
    {title: 'Job', to: '/contact', text: 'Job' },
    {title: 'Blog', to: '/contact', text: 'Blog' },
    {title: 'Contact', to: '/contact', text: 'Contact' },
];

const LinkComponent = ({page}) => {
    return (
        <Grid2 item>
            <Card sx={{ minWidth: 400 }}>
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
            <Box>
                <Toolbar />{/* 高さ確保用 */}
                <div>左側</div>
            </Box>
            <Box sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}>
                <Toolbar />{/* 高さ確保用 */}
                <Grid2 container Spacing={20}>
                    {filteredPages.map((page) => (
                        <LinkComponent page={page} key={page.title}/>
                    ))}
                </Grid2>
            </Box>
        </>
        
    );
};