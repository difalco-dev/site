import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';
import {AiFillLinkedin} from 'react-icons/ai';
import {IconContext} from 'react-icons';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';


const drawerWidth = 80;

const initState = { locator: 0, prev: 0 };
const initSlide = { slide: true, direction : "down" };

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        background:'#d5ddde',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink:0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#03ecfc',
        justifyContent: 'space-between',
        alignItems: 'space-between',
    },
    toolbar: theme.mixins.toolbar,
    listItem: {
        display: 'flex',
        flexDirection: 'column',
        textDecoration: "none",
        "&:hover, &:focus": {
            backgroundColor: theme.palette.background.yellow
        },
    },
    content: {
        flexGrow: 1,
        backgroundColor: '#d5ddde',
        padding: theme.spacing(3),
    },
    linkActive: {
        backgroundColor: theme.palette.background.light
    },
    linkIcon: {
        marginRight: theme.spacing(1),
        color: theme.palette.text.secondary + "99",
        transition: theme.transitions.create("color"),
        display: "flex",
        justifyContent: "center"
    },
    linkText: {
        marginBottom: theme.spacing(2),
        color: theme.palette.text.secondary + "CC",
        transition: theme.transitions.create(["opacity", "color"]),
        fontSize: 13,
        display: "flex",
        justifyContent: "flex-end"
    }
}));

export default function SideNav() {
    const [ state, setLocator ] = useState(initState);
    const [slideOne, setSlideOne] = useState(initSlide);
    const classes = useStyles();

    const directions = ["up","left","down"];
    const mainDiv = [<Home />]//, <Work />, <Contact />];

    const openLinkedIn = () => {
        window.open("https://www.linkedin.com/in/anthony-difalco-22a6b7172/", "_blank");
        window.focus();
    };

    const tabs = [['About', <PersonIcon />]];//, ['Work', <BusinessIcon />], ['Contact', <MailIcon />]];

    const handleClick = (index) => {
        setSlideOne({ slide: false });
        setTimeout(()=>{
            setLocator({ locator: index, prev: state.locator  });
            setSlideOne({ slide: true });
        },520);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}} anchor="left" >
                <List>
                    {tabs.map((item, index) => (
                            <ListItem button key={item[0]} className={classes.listItem} onClick={() => handleClick(index)}>
                            <ListItemIcon className={classes.linkIcon}>{item[1]}</ListItemIcon>
                                <ListItemText primary={item[0]} className={classes.linkText}/>
                            </ListItem> ))}
                </List>
                <IconContext.Provider value={{ color: "gray", size: 56 }}>
                    <div onClick={() => { openLinkedIn() }} style={{ backgroundColor:'#03ecfc'}}>
                        <AiFillLinkedin />
                    </div>
                </IconContext.Provider>
            </Drawer>
            <main className={classes.content}>                
                <Slide direction={directions[state.locator]} timeout={500} in={slideOne.slide} mountOnEnter unmountOnExit>
                    <div>{mainDiv[state.locator]}</div>
                </Slide>
            </main>
        </div>
    );
}