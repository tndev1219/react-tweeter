import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import * as actions from '../../redux/reducer/action';

const useStyles = makeStyles((theme) => ({
    userName: {
        fontWeight: 'bold',
        fontSize: 20
    },
    label: {
        color: '#666',
        fontSize: 15
    },
    boldLabel: {
        fontWeight: 'bold',
        fontSize: 15
    },
    tweetCount: {
        fontSize: 14,
        color: '#666',
        fontWeight: 'lighter'
    },
    margin: {
        marginTop: -20
    },
    avatar: {
        width: 120,
        height: 120,
        border: '5px solid #fff',
        marginTop: -60
    },
    fontSize: {
        fontSize: 20
    }
}));

export default function ProfileModal(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.reducer.userInfo);
    const modalOpen = useSelector((state) => state.reducer.modalOpen);

    return (
        userInfo &&
        <Dialog scroll={'body'} open={modalOpen} onClose={() => dispatch(actions.modalOpen(false))}>
            <DialogContent>
                <Grid container spacing={0} direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <Grid container spacing={0} direction="column">
                            <Grid item>
                                <Box component="span" className={classes.userName}>
                                    {userInfo.name}
                                </Box>
                            </Grid>
                            <Grid item className="mt-5 mb-20">
                                <Box component="span" className={classes.tweetCount}>
                                    {userInfo.statuses_count > 9999 ?
                                        `${(userInfo.statuses_count / 1000).toFixed(1)}K`
                                        :
                                        userInfo.statuses_count} Tweets
                                       </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.margin}>
                        <IconButton aria-label="close" onClick={() => dispatch(actions.modalOpen(false))}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <img alt="banner" src={userInfo.profile_banner_url}></img>
                <Avatar alt={userInfo.id_str} src={userInfo.profile_image_url} className={`ml-15 ${classes.avatar}`} />
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item className="mt-10">
                                <Box component="span" className={classes.userName}>
                                    {userInfo.name}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box component="span" className={classes.label}>
                                    @{userInfo.screen_name}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box component="span">
                            {userInfo.description}
                        </Box>
                    </Grid>
                    <Grid item>
                        {userInfo.location.length !== 0 &&
                            <Box component="span" className={`mr-10 ${classes.label}`}>
                                <LocationOnOutlinedIcon />
                                {userInfo.location}
                            </Box>
                        }
                        {userInfo.entities.url &&
                            <a href={userInfo.entities.url.urls[0].expanded_url} className={`mr-10 ${classes.label}`}>
                                <LinkOutlinedIcon />
                                {userInfo.entities.url.urls[0].display_url}
                            </a>
                        }
                        <Box component="span" className={classes.label}>
                            <CalendarTodayOutlinedIcon className={classes.fontSize} />
                                    &nbsp;Joined {moment(new Date(userInfo.created_at)).format('MMMM YYYY')}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={3} direction="row" className="mb-10">
                            <Grid item>
                                <Box component="span" className={classes.boldLabel}>
                                    {userInfo.friends_count > 9999 ?
                                        `${(userInfo.friends_count / 1000).toFixed(1)}K`
                                        :
                                        userInfo.friends_count}
                                </Box>
                                <Box component="span" className={classes.label}>
                                    &nbsp;Following
                                       </Box>
                            </Grid>
                            <Grid item>
                                <Box component="span" className={classes.boldLabel}>
                                    {userInfo.followers_count > 9999 ?
                                        `${(userInfo.followers_count / 1000).toFixed(1)}K`
                                        :
                                        userInfo.followers_count}
                                </Box>
                                <Box component="span" className={classes.label}>
                                    &nbsp;Followers
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
