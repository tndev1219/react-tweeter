import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import moment from 'moment';
import * as actions from '../../redux/reducer/action';

const useStyles = makeStyles((theme) => ({
    avatar: {
        width: 50, 
        height: 50
    },
    border: {
        border: '1px solid #ddd'
    },
    cursor: {
        cursor: 'pointer'
    },
    bold: {
        fontWeight: 'bold'
    },
    gray: {
        color: '#666'
    },
    text: {
        lineHeight: 1.5, fontSize: 20
    }
}));

export default function TweetBox(props) {
    const { data } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Grid container spacing={3} direction="column" className={`mt-20 m-0 ${classes.border}`}>
            <Grid item className="mt-10">
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    alignItems="center"
                    onClick={() => { 
                        dispatch(actions.modalOpen(true));
                        dispatch(actions.setUserInfo(data.user));
                    }}
                    className={classes.cursor}
                >
                    <Grid item>
                        <Avatar alt={data.user.id_str} src={data.user.profile_image_url} className={classes.avatar} />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={1} direction="column" justify="center">
                            <Grid item>
                                <Box component="span" className={classes.bold}>
                                    {data.user.name}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box component="span" className={classes.gray}>
                                    @{data.user.screen_name}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Box component="span" className={classes.text}>
                    {data.text}
                </Box>
            </Grid>
            <Grid item className="mb-10">
                <Box component="a" className={classes.gray}>
                    {moment(new Date(data.created_at)).format('hh:mm A[ · ]MMM DD, YYYY')}  ·
                </Box>
                <Box component="span" dangerouslySetInnerHTML={{ __html: data.source }} />
            </Grid>
        </Grid>
    );
}
