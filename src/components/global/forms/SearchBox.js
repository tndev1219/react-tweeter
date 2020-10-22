import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import config from '../../../constants/AppConfig';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [key, handleChange] = React.useState('');
    const handleClick = () => {
        if (key.length !== 0) {
            window.open(`${config.appURL}/tweets/${key}`, '_blank')
        }
    }

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search tweets"
                inputProps={{ 'aria-label': 'search tweets' }}
                value={key}
                onKeyPress={(e) => e.key === "Enter" ? handleClick() : null}
                onChange={(e) => handleChange(e.target.value)}
            />
            <IconButton className={classes.iconButton} aria-label="search" onClick={() => handleClick()}>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}
