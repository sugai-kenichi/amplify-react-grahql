import { AppBar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid2, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import { Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react';

const infos = [
    {postDate: '2025-03-26', postUserName: '事業企画部システム推進課', title: '【タレントパレット】メンテナンスのお知らせ（4/1（火）実施）', text: '日々業務お疲れ様です。事業企画部システム推進課です。表題のとおり、タレントパレット各種申請につきましてメンテナンスを実施いたします。' },
    {postDate: '2025-03-26', postUserName: '社長室', title: '人事発令および組織変更について', text: '人事発令および組織変更についてお知らせいたします。' },
    {postDate: '2025-03-25', postUserName: '事業企画部', title: '2025年度グループ安全衛生方針', text: 'お疲れ様です。グループの安全衛星方針が周知されましたので、各自ご確認をお願いいたします。' },
    {postDate: '2025-03-25', postUserName: '有料紹介事業　転職エージェント', title: '有料紹介事業実績紹介（転職エージェント）', text: '社員各位　お疲れ様です。有料紹介事業（転職エージェント）です。表題、転職エージェントサービスの実績' },
    {postDate: '2025-03-24', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-23', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-22', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-21', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-20', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-19', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-18', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-17', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-16', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-16', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-16', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-15', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-13', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-13', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-12', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-11', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-10', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-09', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-08', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-07', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-06', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-05', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
    {postDate: '2025-03-04', postUserName: '事業企画部システム推進課', title: '【】', text: 'Top' },
];
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

const LinkComponent = ({info}) => {
    return (
        <Grid2 item>
            <Card sx={{ minWidth: "100%" }}>
                <CardActionArea>
                    <CardHeader title={info.title} />
                    <CardContent>
                        <Typography>{info.postDate + ' ' + info.postUserName}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {info.text}
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

const  Infomation = () => {
    const classes = useStyle();
    // 検索キーワードで絞り込み
    const [filteredInfos, setFilteredInfos] = useState(infos)
    const filtereInfos = (keyword) => {
        // const includesKeywordInfos = infos.filter((info) => info.title.includes(keyword) || info.postUserName.includes(keyword));
        const includesKeywordInfos = infos.filter((info) => {
            if(info.title.match(keyword) || info.postUserName.match(keyword) || info.postDate.match(keyword)){
                return true
            }
        });
        includesKeywordInfos.sort((a, b) =>
            a.postDate > b.postDate ? -1 : 1
        );
        setFilteredInfos(includesKeywordInfos);
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
                            <TextField className={classes.headerTitle} label="検索キーワード" onChange={(event) => filtereInfos(event.target.value)}></TextField>
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
                    {filteredInfos.map((info) => (
                        <LinkComponent info={info} key={info.title}/>
                    ))}
                </Grid2>
            </Box>
        </>
        
    );
};

export default Infomation;