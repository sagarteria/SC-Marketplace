/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BorderColor from '@material-ui/icons/BorderColor';
import CancelIcon from '@material-ui/icons/Cancel';
import ShareIcon from '@material-ui/icons/Share';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import MaterialUiCard from '../../components/MaterialUiCard';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: 'black',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(11),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  textFields: {
    // marginLeft: '-330px',
    // marginTop: '30px',
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container spacing={1} style={{ backgroundColor: 'white'}}>
      <Grid container item xs={12} spacing={1} style={{ minHeight: 150 }}>
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid item xs={4}>
          <div></div>
        </Grid>
        <Grid item xs={4}>
          <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
            <StyledTab label="My Feed" />
            <StyledTab label="Boards" />
          </StyledTabs>
        </Grid>
      </Grid>

      {/* middle section - greetings, nudges */}
      <Grid container item xs={12} spacing={1} alignItems="center">
      <Grid item xs={12}>
      <TextField id="outlined-basic" label="Search" variant="outlined" className={classes.textFields} />
      </Grid>
        <Grid item xs={4}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item xs={4} />
          </Grid>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" gutterBottom>
                  Good Morning, Reinu
              </Typography>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Grid>

        {/* Nudges Section */}
        <Grid item xs={8}>
          <Grid container item xs={12} spacing={1}>
            <Grid item xs={8}>
              <Typography variant="h5" gutterBottom>
                  Few nudges for you
              </Typography>
              <br />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                    Mark all done
              </Typography>
            </Grid>

            <Grid item xs={8}>
              <div>LCC Cost is increasing for the last 3 periods in Mexico</div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <IconButton aria-label="settings">
                  <CancelIcon />
                </IconButton>
                  Dismiss
              </div>
            </Grid>

            <Grid item xs={8}>
              <div>Service level for Pouch is on a downward trend fro the last 3 periods in France.</div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <IconButton aria-label="settings">
                  <CancelIcon />
                </IconButton>
                  Dismiss
              </div>
            </Grid>

            <Grid item xs={8}>
              <div>Inventory in Days is on a upward trend for Cans for last 3 periods in Germany.</div>
            </Grid>
            <Grid item xs={4}>
              <div>
                <IconButton aria-label="settings">
                  <CancelIcon />
                </IconButton>
                  Dismiss
              </div>
            </Grid>

            <Grid item xs={8}>
              <div>Show all</div>
            </Grid>
            <Grid item xs={4}>
              <div></div>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>
         
      {/* Pin Section */}
      <Grid item xs={2}>
        <div>Pinned by you
          <IconButton aria-label="settings">
            <BorderColor />
          </IconButton>
        </div>
      </Grid>
      {/* Empty Grid */}
      <Grid item xs={10}>
        <div></div>
      </Grid>
          
      {/* Pinned KPIs */}
      <Grid item xs={2}>
        <MaterialUiCard />  
      </Grid>
      <Grid item xs={2}>
        <MaterialUiCard />  
      </Grid>
      <Grid item xs={2}>
        <MaterialUiCard />  
      </Grid>

      <Grid item xs={3}>
            
      </Grid>

      <Grid item xs={3}>
        <Grid container item xs={12} spacing={1} style={{ minHeight: 80}}></Grid>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={6}>
            <Button variant="outlined" size='small'>
              <IconButton aria-label="ask" size='small'>
                <ShareIcon />Ask
              </IconButton>
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" size='small'>
              <IconButton aria-label="ask" size='small'>
                <CancelIcon />Share
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Grid>

    </Grid>
  );
}
