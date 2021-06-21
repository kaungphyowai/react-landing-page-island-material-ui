import React from 'react'
import { useState, useEffect } from 'react'
import { AppBar, IconButton, makeStyles, Toolbar, Collapse } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh",

        fontFamily: "Nunito",

    },
    appbar: {
        background: "none",
    },
    icon: {
        color: "#fff",
        fontSize: "2rem",

    },
    appbarWrapper: {
        width: "80%",
        margin: "0 auto"
    },
    appbarTitle: {
        flexGrow: "1",
    },
    colorText: {
        color: "#9CFB78",

    },
    title: {
        color: '#fff',
        fontSize: "4.5rem",

    },
    container: {
        textAlign: "center",
    },
    goDown: {
        color: "#9CFB78",
        fontSize: "4rem"
    }

}))
const Header = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
    }, [])
    return (
        <div className={classes.root} id="header">

            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>

                    <h1 className={classes.appbarTitle}>My
                        <span className={classes.colorText}>Island</span> </h1>
                    <IconButton>
                        <SortIcon className={classes.icon} />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <Collapse in={checked} 
            {...(checked ? { timeout: 1000 } : {})}
            collapsedHeight={50}
            >

                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Welcome to <br /> My <span className={classes.colorText}>Island</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
                </div>
            </Collapse>
        </div>
    )
}

export default Header
