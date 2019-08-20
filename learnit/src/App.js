import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import logo from './logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import './App.css';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
 
}));



const cards = [1, 2, 3, 4 ];

export default function Album() {
  const classes = useStyles();
   const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
        </Toolbar>
       

      </AppBar>
      <main>
        {/* Hero unit */}
        
        <Container className={classes.cardGrid} maxWidth="md">
         <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          
         >
          <Tab label="Cursos"  {...a11yProps(0)} />
          <Tab label="Programas"   {...a11yProps(1)}/>
          <Tab label="Learning paths"   {...a11yProps(2)}/>
          <Tab label="Cursos finalizados"  {...a11yProps(3)} />
         </Tabs>

          {/* End hero unit */}
           <TabPanel value={value} index={0}>
            <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={3} sm={3} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent >
                  <LinearProgress variant="determinate" color="#f18363" value="30" />
                    <Typography className="cardTitle">
                      Design thinking
                    </Typography>
                    <Typography className="cardSubTitle">
                     <Icon className="iconHover" >play_arrow</Icon>
                     Estrategias de trabajo en equipo.
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
            </TabPanel>
           <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
             Item Three
            </TabPanel>
           <TabPanel value={value} index={3}>
             Item Four
            </TabPanel>
         
        </Container>
      </main>
     
    </React.Fragment>
  );
}