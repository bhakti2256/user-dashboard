import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Hidden,
  Divider,
  Icon,
  Avatar
} from "@material-ui/core";
import { FormControl, NativeSelect } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import InfoPage from "./InfoPage";
import { Dashboard } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth }
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  title: {
    margin: "auto 0",
    fontWeight: 'bold',
    marginLeft: '5px'
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(179deg, rgba(31,31,31,1) 0%, rgba(180,53,101,1) 2%, rgba(34,38,113,1) 100%)',
    color: 'white'
  },
  content: {
    padding: theme.spacing(0, 3),
    backgroundColor: '#f4f4f7'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    backgroundColor: 'white',
    color: 'black',
  },
  devices: {
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    margin: '0 -16px',
    width: '100%',
    padding: '5px',
    backgroundColor: 'white',
    color: 'black',
    fontSize: '14px',
    cursor: 'pointer'
  },
  number: {
    color: 'white',
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const drawer = (
    <>
      <List disablePadding>

        {/* Profile Pic */}
        <ListItem>
          <IconButton>
            <Avatar>M</Avatar>
          </IconButton>
        </ListItem>

        {/* Name */}
        <ListItem>
          <Typography>Mahesh Chauhan</Typography>
        </ListItem>

        {/* Number */}
        <ListItem>
          <FormControl fullWidth>
            <NativeSelect
              defaultValue={1}
              style={{ color: 'white' }}
            >
              <option value={1} style={{ color: 'black' }}>1234567891</option>
              <option value={2} style={{ color: 'black' }}>Settings</option>
              <option value={3} style={{ color: 'black' }}>Change Profile</option>
            </NativeSelect>
          </FormControl>
        </ListItem>

        <Divider />

        {/* Devices */}
        <ListItem>
          <Typography variant='button'>Your Devices</Typography>
        </ListItem>

        {/* Device 1 */}
        <ListItem>
          <Typography className={classes.devices}>UNITLINK_Maheshbhai_Home</Typography>
        </ListItem>
      </List>
    </>
  );

  return (
    <div className={classes.root}>

      {/* Drawer for small devices */}
      <Hidden smUp implementation="css">
        <Drawer open={open} onClose={() => setOpen(false)} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
          {drawer}
        </Drawer>
      </Hidden>

      {/* Drawer for large devices */}
      <Hidden xsDown implementation="css">
        <Drawer open={open} variant="permanent" onClose={() => setOpen(false)} className={classes.drawer} classes={{ paper: classes.drawerPaper }}>
          {drawer}
        </Drawer>
      </Hidden>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>

          {/* Sidebar menu icon for small devices */}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Icon fontSize='large'>
            <Dashboard fontSize="large" />
          </Icon>

          <Typography variant="h4" className={classes.title}>
            UnitGrid
          </Typography>

        </Toolbar>
      </AppBar>

      <main className={classes.content}>
        {/* To avoid hiding of content by appbar */}
        <div className={classes.toolbar}></div> 

        {/* Information Page Component */}
        <InfoPage />
      </main>
    </div>
  );
};

export default Sidebar;