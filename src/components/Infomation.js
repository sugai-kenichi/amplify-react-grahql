import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Drawer, Grid2, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import { MoveToInbox as InboxIcon, Mail as MailIcon,  ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon, Menu as MenuIcon } from "@mui/icons-material";
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react';


const infos = [
    {postDate: '2025-03-26', postUserName: '事業企画部システム推進課', title: '【タレントパレット】メンテナンスのお知らせ（4/1（火）実施）', text: '日々業務お疲れ様です。事業企画部システム推進課です。表題のとおり、タレントパレット各種申請につきましてメンテナンスを実施いたします。' },
    {postDate: '2025-03-26', postUserName: '社長室', title: '人事発令および組織変更について', text: '人事発令および組織変更についてお知らせいたします。' },
    {postDate: '2025-03-25', postUserName: '事業企画部', title: '2025年度グループ安全衛生方針', text: 'お疲れ様です。グループの安全衛星方針が周知されましたので、各自ご確認をお願いいたします。' },
    {postDate: '2025-03-25', postUserName: '有料紹介事業　転職エージェント', title: '有料紹介事業実績紹介（転職エージェント）', text: '社員各位　お疲れ様です。有料紹介事業（転職エージェント）です。表題、転職エージェントサービスの実績' },
    {postDate: '2025-03-24', postUserName: '事業企画部', title: '【重要】2025年度健康診断の実施につきまして', text: '標記について、下記のとおりご連絡いたします。年1回の健康診断は会社としての実施義務があり、社員には受診義務がありますので必ず受診してください。' },
    {postDate: '2025-03-23', postUserName: '事業企画部企画総務担当部長', title: '他社における引抜行為に関するお知らせとお願い', text: '各位　　　　他社における引抜行為に関するお知らせとお願いについて元社員による引抜行為が確認されました。弁護士を通じて対応していますが、勧誘・不審な行を見聞きした場合は速やかに下記資料にある連絡先に連絡をお願い致します。' },
    {postDate: '2025-03-22', postUserName: '人材ビジネス部　営業企画課', title: 'Win-Winボーナスプログラム(案件共有施策)の途中経過報告（2月版）', text: 'モバイルコミュニケーションズ社員　各位お疲れ様です。人材ビジネス部　営業企画課です。表題、Win-Winボーナスプログラムの途中経過を報告いたします。' },
    {postDate: '2025-03-21', postUserName: '事業企画部システム推進課', title: '【追記：2025/3/25 11:00】【STAFF EXPRESS NEO】メンテナンスのお知らせ（3/25(火)実施）', text: 'メンテナンス実施のお知らせ【追記：2025/3/25 11:00】本日0:00-4:00にメンテナンスを実施しておりましたが、現時点でSTAFF EXPRESS NEOにてログイン・勤怠申請が行えることを確認しております。ご協力ありがとうございました。' },
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
    typography: {
        paddingRight: "36px",
        color: "#000000",
    },
    textField: {
        height: "20px",
        marginLeft: "36px",
    },
    headerTitle: {
      fontSize: "20px" ,
    },
    headerUser: {
      marginLeft: "10px",
    },

    cardHeader: {
      fontSize: "10px" ,
      textAlign: "left",
    },
    cardContentDateAndName: {
      textAlign: "left",
    },
    
    cardContent: {
        fontSize: "20px" ,
        textAlign: "left",
      },

}));



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
            return false
        });
        includesKeywordInfos.sort((a, b) =>
            a.postDate > b.postDate ? -1 : 1
        );
        setFilteredInfos(includesKeywordInfos);
    };
    
    const [openDrawer, setOpenDrawer] = useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
      };

    const LinkComponent = ({info}) => {
        const classes = useStyle();
        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
            setExpanded(!expanded);
        };
        return (
            <Grid2 item xs={12} sm={6} md={4}>
                <Card variant="outlined" sx={{ width: 400, minHeight: 200 }}>
                    <CardContent>
                        <Typography className={classes.cardContentDateAndName}>{info.postDate + ' ' + info.postUserName}</Typography>
                    </CardContent>
                    <CardHeader className={classes.cardHeader} title={info.title} />
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>
                                {info.text}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    <CardActions>
                        <Button 
                            expand={expanded}
                            onClick={handleExpandClick}
                            startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        >
                            {expanded ? "LESS" : "MORE"}
                        </Button>
                    </CardActions>
                </Card>
            </Grid2>
        )
    };
    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    return (
        <>
            <div className={classes.header}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar className={classes.toolbar}>
                            <IconButton 
                                onClick={toggleDrawer(true)}
                                size="small"
                                edge="start"
                                color="#000000"
                                aria-label="menu"
                                sx={{ mr: 2 }} >
                                <MenuIcon />
                            </IconButton>
                            <Typography className={classes.typography}>インフォメーション</Typography>
                            <TextField
                                label="検索キーワード"

                                onChange={(event) => filtereInfos(event.target.value)} 
                            />
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
            <Box>
                
            </Box>
            <Box sx={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}>
                <Grid2 container spacing={4} mt={0} justifyContent="center">
                    {filteredInfos.map((info) => (
                        <LinkComponent info={info} key={info.title}/>
                    ))}
                </Grid2>
            </Box>
            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </>
        
    );
};

export default Infomation;