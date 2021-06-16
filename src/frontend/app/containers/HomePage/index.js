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
            <div>Good morning</div>text
          </Grid>
          <Grid item xs={8}>
            <Grid container item spacing={1}>
              <Grid item xs={8}>
                <div>Few nudges for you</div>
              </Grid>
              <Grid item xs={4}>
                <div>Mark all done</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      
    
    </Grid>
  );
}
