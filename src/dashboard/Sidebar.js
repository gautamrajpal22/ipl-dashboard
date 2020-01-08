import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupIcon from '@material-ui/icons/Group';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '../styling/Homepage.css';
import {NavLink} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import Season from "./Season";
import Team from "./Team";
import Batsmen from './Batsmen';
import Bowlers from './Bowlers';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import MenuIcon from '@material-ui/icons/SportsCricket';
import HdrStrongIcon from '@material-ui/icons/HdrStrong';
import HdrWeakIcon from '@material-ui/icons/HdrWeak';
import SportsIcon from '@material-ui/icons/Sports';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  }
}));

const navLink = {
  textDecoration: 'none',
  color: 'black',
  alignContent: 'center',

}

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon><SportsIcon /></ListItemIcon>
          <ListItemText primary="Seasons" />
        </ListItem>
          {['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016',].map((text, index) => (
              <NavLink style = {navLink} to={`/seasonDetails${text}`}>
                <ListItem button key={text}>
                  <ListItemIcon>{ index%2 ===0 ? <HdrStrongIcon /> : <HdrWeakIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
          ))}
      </List>
      <Divider />
      <List>
        {['Teams','Batsmen', 'Bowlers'].map((text, index) => (
          <NavLink style = {navLink} to={`/${text}`}>
              <ListItem button key={text}>
                <ListItemIcon>
                {
                  {
                    "Teams": <GroupIcon />,
                    "Batsmen": <SportsCricketIcon />,
                    "Bowlers": <SportsBaseballIcon />,
                  }[text]
                }
            </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <NavLink style = {navLink} to="/" >
            <Typography variant="h6" noWrap>
              IPL Dashboard
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, 
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main >
        <Switch>
          <Route path = "/" component = {Homepage} exact />
          <Route path = "/Batsmen" component = {Batsmen} exact />          
          <Route path = "/Bowlers" component = {Bowlers} exact />          
          <Route path = "/Teams" component = {Team} exact />
          <Route path={`/seasonDetails2008`} component={() => <Season year={2008} exact/>}/>
          <Route path={`/seasonDetails2009`} component={() => <Season year={2009} />}/>
          <Route path={`/seasonDetails2010`} component={() => <Season year={2010} />}/>
          <Route path={`/seasonDetails2011`} component={() => <Season year={2011} />}/>
          <Route path={`/seasonDetails2012`} component={() => <Season year={2012} />}/>
          <Route path={`/seasonDetails2013`} component={() => <Season year={2013} />}/>
          <Route path={`/seasonDetails2014`} component={() => <Season year={2014} />}/>
          <Route path={`/seasonDetails2015`} component={() => <Season year={2015} />}/>
          <Route path={`/seasonDetails2016`} component={() => <Season year={2016} />}/>
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default ResponsiveDrawer;