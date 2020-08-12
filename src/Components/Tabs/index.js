import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '../Card';
import styled from 'styled-components'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>

          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // background:'blue'
  },indicador: {
      background: 'purple'
  }
}));

export default function () {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
        // style={{alignSelf:'center'}}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          aria-label="scrollable  "
          scrollButtons="on"
        >
          <Tab label="FrontEnd" {...a11yProps(0)} />
          <Tab label="BackEnd" {...a11yProps(1)} />
          <Tab label="Movil" {...a11yProps(2)} />
          <Tab label="Frameworks" {...a11yProps(3)} />
          <Tab label="Base de datos" {...a11yProps(4)} />
          <Tab label="Otros" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}
        <TabPanelMOd value={value} index={0} dir={theme.direction}>

            <Card imgPanel="./../icons/React.png" titleDescription="React" />
            <Card imgPanel="./../icons/angular.png" titleDescription="Angular" />
            <Card imgPanel="./../icons/mint.png" titleDescription="Mint" />
        
            <Card imgPanel="./../icons/html.png" titleDescription="HTML 5" />
            <Card imgPanel="./../../icons/haml.png" titleDescription="Haml" />
            <Card imgPanel="./../icons/js.png" titleDescription="Javascript" />
            <Card imgPanel="./../icons/ts.png" titleDescription="Typescript" />
            <Card imgPanel="./../icons/css.png" titleDescription="CSS 3" />
            <Card imgPanel="./../icons/less.png" titleDescription="Less" />
            <Card imgPanel="./../icons/sass.png" titleDescription="Sass" />

            <Card imgPanel="./../../icons/materialize.png" titleDescription="Materialize" />
            <Card imgPanel="./../../icons/bootstrap.png" titleDescription="Bootstrap" />
            <Card imgPanel="./../../icons/bulma.png" titleDescription="Bulma" />
            <Card imgPanel="./../../icons/rbx.png" titleDescription="Rbx" />
            <Card imgPanel="./../../icons/material-ui.png" titleDescription="Material UI" />
            <Card imgPanel="./../../icons/ant.png" titleDescription="Ant Design" />
            <Card imgPanel="./../../icons/rsuitejs.png" titleDescription="rsuitejs" />


          <Card imgPanel="./../icons/apexcharts.png" titleDescription="Apexcharts" />
          


          <Card imgPanel="./../icons/parcel.png" titleDescription="Parcel" />
          <Card imgPanel="./../icons/webpack.png" titleDescription="Webpack" />
        </TabPanelMOd>
        <TabPanelMOd value={value} index={1} dir={theme.direction}>
          <Card imgPanel="./../icons/crystal.png" titleDescription="Crystal" />
          <Card imgPanel="./../icons/java.png" titleDescription="Java" />
          <Card imgPanel="./../icons/kotlin.png" titleDescription="Kotlin" />
          <Card imgPanel="./../icons/ruby.png" titleDescription="Ruby" />
          <Card imgPanel="./../icons/mongoid.png" titleDescription="Mongoid" />
     
          
        </TabPanelMOd>
        
        <TabPanelMOd value={value} index={2} dir={theme.direction}>
          <Card imgPanel="./../icons/java.png" titleDescription="Java" />
          <Card imgPanel="./../icons/kotlin.png" titleDescription="Kotlin" />
        </TabPanelMOd>
        <TabPanelMOd value={value} index={3} dir={theme.direction}>
          <Card imgPanel="./../icons/spring.png" titleDescription="Spring" />
          <Card imgPanel="./../icons/amber.jpg" titleDescription="Amber" />
          <Card imgPanel="./../icons/rails.png" titleDescription="Rails" />
          <Card imgPanel="./../icons/kemal.png" titleDescription="Kemal" />
          <Card imgPanel="./../icons/grip.png" titleDescription="Grip" />
          <Card imgPanel="./../icons/lucky.png" titleDescription="Lucky" />
          <Card imgPanel="./../icons/express.png" titleDescription="Express" />
          <Card imgPanel="./../icons/raze.png" titleDescription="Raze" />
          <Card imgPanel="./../icons/spidergazelle.png" titleDescription="Spider-Gazelle" />
          <Card imgPanel="./../icons/Onyx.png" titleDescription="Onyx" />
          <Card imgPanel="./../icons/Runcobo.png" titleDescription="Runcobo" />
        </TabPanelMOd>
        <TabPanelMOd value={value} index={4} dir={theme.direction}>
        <Card imgPanel="./../icons/sqlite3.png" titleDescription="SQLite 3" />
        <Card imgPanel="./../icons/postgres.png" titleDescription="Postgres" />
        <Card imgPanel="./../icons/sqlserve.png" titleDescription="Sql Server" />
        <Card imgPanel="./../icons/oracle.png" titleDescription="Oracle" />
        <Card imgPanel="./../icons/mongodb.png" titleDescription="Mongo" />
        <Card imgPanel="./../icons/mysql.png" titleDescription="MySQL" />
        <Card imgPanel="./../icons/mariadb.png" titleDescription="Maria DB" />
        
        
        </TabPanelMOd>
        <TabPanelMOd value={value} index={5} dir={theme.direction}>
        <Card imgPanel="./../icons/scrum.png" titleDescription="Metodología Scrum" />
          <Card imgPanel="./../icons/jasper.png" titleDescription="Jasper Studio" />
          <Card imgPanel="./../icons/xd.png" titleDescription="Adobe XD" />
          <Card imgPanel="./../icons/netlify.png" titleDescription="Netliy" />
          <Card imgPanel="./../icons/heroku.png" titleDescription="Heroku" />
          <Card imgPanel="./../icons/reactiveX.png" titleDescription="Reactive X" />
          <Card imgPanel="./../icons/jwt.png" titleDescription="JSON Web Token" />
          <Card imgPanel="./../icons/redux.png" titleDescription="Redux" />
          <Card imgPanel="./../icons/awss3.png" titleDescription="AWS S3" />

        </TabPanelMOd>
      {/* </SwipeableViews> */}
    </div>
  );
}


const TabPanel0 =styled(TabPanel)`
   
    & > div{
      display: flex; 
      flex:1;
      height: 56vh;   
    }
`

const TabPanelMOd = styled(TabPanel)`
    width: 100%;
    overflow: overlay;
    & > header {
        place-content: center;
    }
    & > div{
      display: flex; 
      flex:1;
      height: 56vh;
      flex-wrap: wrap;
      flex-direction: column;
    }
`



//https://github.com/grip-framework/grip/blob/master/DOCUMENTATION.md