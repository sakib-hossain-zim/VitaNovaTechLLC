import React from 'react'





import clsx from 'clsx';
import { makeStyles, useTheme, withStyles} from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Container from '@material-ui/core/Container'





  const styles = makeStyles(theme => ({


    root: {
      display: 'flex',
     
      
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
      
    },
   
  }));


  const theme1 = createMuiTheme({
    palette: {
      primary:  {
        main: '#673ab7'} 
      
    },
      
    
  });






export default  withStyles(styles) (class extends React.Component {


    render(){

        const{children,classes} = this.props
        return(

          <ThemeProvider theme={theme1}>

          <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
      >
        <Toolbar>
        
          <Typography variant="h6" noWrap>
            Vita Nova Technologies LLC
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <Container maxWidth="sm">
      <main className={classes.content}>
      
        <div className={classes.toolbar} />
          {children}
          
      </main>
      </Container>
    </div>
    </ThemeProvider>

        )
    }
}
)