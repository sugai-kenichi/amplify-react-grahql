import { Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid2, TextField, Typography } from "@mui/material";
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
        <>
            <div className="title">
                <Typography className={classes.titleName}>abcdefg</Typography>
                <TextField label="検索キーワード"></TextField>
            </div>
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid2 item xs={6}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardActionArea>
                            <CardHeader title="インフォメーション" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                周知事項はこちら
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">button</Button>
                        </CardActions>
                    </Card>
                </Grid2>
                
                <Grid2 item xs={6}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardActionArea>
                            <CardHeader title="NEO勤怠" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Staff Express NEOはこちらから
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">button</Button>
                        </CardActions>
                    </Card>
                </Grid2>
                
                <Grid2 item xs={6}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardActionArea>
                            <CardHeader title="NEO勤怠" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                ここに内容が入ります。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">button</Button>
                        </CardActions>
                    </Card>
                </Grid2>
                
                <Grid2 item xs={6}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }} >
                        <CardActionArea>
                            <CardHeader title="NEO勤怠" />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                ここに内容が入ります。ここに内容が入ります。ここに内容が入ります。<br />
                                ここに内容が入ります。ここに内容が入ります。ここに内容が入ります。ここに内容が入ります。ここに内容が入ります。
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small">button</Button>
                        </CardActions>
                    </Card>
                </Grid2>
                
                
            </Grid2>
        </>
        
    );
};