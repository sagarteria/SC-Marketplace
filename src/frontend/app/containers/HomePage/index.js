/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

export default function HomePage() {
  return (
    <Grid container spacing={1}>
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
          <Grid item xs={8}>
            <Grid container item xs={12} spacing={1}>
              <Grid item xs={8}>
                {/* <Grid container item xs={8} spacing={1}> */}
                  <div>Few nudges for you</div>
              </Grid>
                {/* </Grid> */}
              <Grid item xs={4}>
                <div>Mark all done</div>
              </Grid>

              <Grid item xs={8}>
                {/* <Grid container item xs={8} spacing={1}> */}
                <div>LCC Cost is increasing for the last 3 periods in Mexico</div>
              </Grid>
                {/* </Grid> */}
              <Grid item xs={4}>
                <div>Dismiss</div>
              </Grid>

              <Grid item xs={8}>
                {/* <Grid container item xs={8} spacing={1}> */}
                <div>Service level for Pouch is on a downward trend fro the last 3 periods in France.</div>
              </Grid>
                {/* </Grid> */}
              <Grid item xs={4}>
                <div>Dismiss</div>
              </Grid>

              <Grid item xs={8}>
                {/* <Grid container item xs={8} spacing={1}> */}
                <div>Inventory in Days is on a upward trend for Cans for last 3 periods in Germany.</div>
              </Grid>
                {/* </Grid> */}
              <Grid item xs={4}>
                <div>Dismiss</div>
              </Grid>

              <Grid item xs={8}>
                {/* <Grid container item xs={8} spacing={1}> */}
                <div>Show all</div>
              </Grid>
                {/* </Grid> */}
              <Grid item xs={4}>
                <div></div>
              </Grid>
              
              {/* <Grid container item xs={12} spacing={1}>
                <Grid container item xs={12} spacing={1}>
                  <div>LCC Cost is increasing for the last 3 periods in Mexico</div>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  <div>Service level for Pouch is on a downward trend fro the last 3 periods in France.</div>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  <div>Inventory in Days is on a upward trend for Cans for last 3 periods in Germany.</div>
                </Grid>
                <Grid container item xs={12} spacing={1}>
                  <div>Show all</div>
                </Grid>
              </Grid> */}
            
            </Grid>
          </Grid>
        </Grid>
      
    
    </Grid>
  );
}
