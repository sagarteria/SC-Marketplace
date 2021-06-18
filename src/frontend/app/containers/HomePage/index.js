/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import MaterialUiCard from "../../components/MaterialUiCard";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import BorderColor from '@material-ui/icons/BorderColor';
import CancelIcon from '@material-ui/icons/Cancel';
import AddIcon from '@material-ui/icons/Add';
import ShareIcon from '@material-ui/icons/Share';

export default function HomePage() {

  return (
    <Grid container spacing={1} style={{ backgroundColor: 'white' }}>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
            <div>Grid 1</div>
        </Grid>
        <Grid item xs={4}>
          <div>Grid 2</div>
        </Grid>
        <Grid item xs={4}>
            <div>My Feed Boards</div>
        </Grid>
      </Grid>

      {/* middle section - greetings, nudges */}
      <Grid container item xs={12} spacing={1}>
          <Grid item xs={4}>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <div>Good Morning, Reinu</div>
          </Grid>
          
          {/* Nudges Section */}
          <Grid item xs={8}>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={8}>
                <div>Few nudges for you</div>
              </Grid>
              <Grid item xs={4}>
                <div>Mark all done</div>
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
