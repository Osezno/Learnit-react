import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//barra
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
//barra
import {fade, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Icon from '@material-ui/core/Icon';
import logo from './logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Courses from './json/courses.json';
import UserData from './json/user.json';
import './App.css';


const useStyles = makeStyles(theme => ({
  //barra
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5028cb',
    zIndex: 1,
  },
  inputRoot: {
    color: 'inherit',
    background: '#f9f9fb',
    borderRadius: 26,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  sectionRight:{
    right: '8%',
    position: 'absolute',
    color: '#5028cb',
  },
  //barra
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
  recomendados: {
    height: '58px',
    display: 'flex',
    paddingLeft: '19px',
    paddingRight: '19px',
    flexDirection: 'column',
    marginBottom: '20px',
    background: '#3f51b514',
    boxShadow: 'none !important',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardMedia2: {
    display: 'none', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },



}));

const cards = [];
const misCursos = [];

Object.keys(Courses).forEach(key => cards.push(Courses[key]));
for(let i = 0; i < cards.length; i++){
  cards[i]["class"]="hidden"
  cards[i]["progress"]= 0
}

Object.keys(UserData.content.courses).forEach(key =>
 misCursos.push([key])
);

for(let i = 0; i < cards.length; i++){
  for(let j = 0; j < misCursos.length; j++){
    if(cards[i].name.replace('.', "").toLowerCase() === misCursos[j][0]){
      cards[i]["class"]="visible"
      cards[i]["progress"]= UserData.content.courses[misCursos[j]].progress
    }
  }

}
console.log(cards);
export default function Album() {
  const classes = useStyles();
   const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function BelowHeader() {
    return (
        <div  className="belowHeaderContainer">
          <img src="https://fakeimg.pl/1200x200/" className="belowHeaderImg" alt="" />
          <h1 className="belowHeaderText"> Mis cursos</h1>

        </div>
    );
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
   const [anchorEl, setAnchorEl] = React.useState(null);
   const isMenuOpen = Boolean(anchorEl);

   function handleProfileMenuOpen(event) {
     setAnchorEl(event.currentTarget);
   }

   function handleMenuClose() {
     setAnchorEl(null);

   }
   const menuId = 'primary-search-account-menu';
   const [values, setValues] = React.useState({
     age: '',
     name: 'hai',
    });
  function handleChange2(event) {
     setValues(oldValues => ({
       ...oldValues,
       [event.target.name]: event.target.value,
     }));
   }
   const renderMenu = (
       <Menu
         anchorEl={anchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={menuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isMenuOpen}
         onClose={handleMenuClose}
       >
         <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
         <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
       </Menu>
     );



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
           <IconButton  color="inherit"  style={{'marginLeft':'2%','marginRight':'2%'}}>
              <Icon style={{'color':'#5028cb'}}>language</Icon>
           </IconButton>

          <div className={classes.search}>
           <div className={classes.searchIcon}>
             <Icon >search</Icon>
           </div>
           <div className={classes.searchIcon} style={{'right':0}} >
             <Icon  >settings_voice</Icon>
           </div>
           <InputBase

             classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
             }}
             inputProps={{ 'aria-label': 'search' }}
           />

         </div>

         <div className={classes.sectionRight}>
           <IconButton aria-label="show 4 new mails" onClick={handleProfileMenuOpen} color="inherit">
             <Typography >Mis cursos</Typography>
           </IconButton>
           <IconButton aria-label="show 4 new mails" color="inherit">
             <Badge badgeContent={1} color="secondary">
               <Icon>chat_bubble</Icon>
             </Badge>
           </IconButton>
           <IconButton aria-label="show 17 new notifications" color="inherit">
             <Badge badgeContent={2} color="secondary">

               <Icon>notifications</Icon>
             </Badge>
           </IconButton>
           <IconButton
             edge="end"
             aria-label="account of current user"
             aria-controls={menuId}
             aria-haspopup="true"
             onClick={handleProfileMenuOpen}
             color="inherit"
           >
             <Icon>account_circle</Icon>
           </IconButton>
         </div>
         {renderMenu}


        </Toolbar>


      </AppBar>
      <BelowHeader></BelowHeader>
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
             <Card className={classes.recomendados}>
             <FormControl className={classes.formControl}>
               <InputLabel htmlFor="age-helper">Recomendados</InputLabel>
               <Select value={values.age}  onChange={handleChange2} inputProps={{ name: 'age', id: 'age-simple', }}>
                 <MenuItem value={10}>Lorem ipsum</MenuItem>
                 <MenuItem value={20}>Lorem ipsum</MenuItem>
                 <MenuItem value={30}>Lorem ipsum</MenuItem>
               </Select>
             </FormControl>
             </Card>



            <Grid container spacing={4}>
            {cards.map(card => (
              <Grid className={card.class} item key={card.name} xs={4} sm={4} md={4}>
                <Card className={classes.card}>
                  <CardMedia

                    className={classes.cardMedia}
                    image={card.imageUrl}
                    title="Image title"
                  />
                  <CardContent >
                  <LinearProgress variant="determinate"  value={card.progress} />
                    <Typography className="cardTitle">
                      {card.name}
                    </Typography>
                    <Typography className="cardSubTitle">
                     <Icon className="iconHover" >play_arrow</Icon>
                     {card.description.substring(0, 80)} ...
                    </Typography>
                  </CardContent>

                </Card>
              </Grid>
            ))}
          </Grid>
            </TabPanel>
           <TabPanel value={value} index={1}>
              Vacio <Icon  style={{'color':'#5028cb'}}>insert_emoticon</Icon>
            </TabPanel>
            <TabPanel value={value} index={2}>
               Vacio <Icon style={{'color':'#f50057'}} >insert_emoticon</Icon>
            </TabPanel>
           <TabPanel value={value} index={3}>
               Vacio <Icon style={{'color':'#f18363'}} >insert_emoticon</Icon>
            </TabPanel>

        </Container>
      </main>

    </React.Fragment>
  );
}
