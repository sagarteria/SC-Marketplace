/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function HomePage() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <div>Grid 1</div>
      </Grid>
      <Grid item xs={4}>
        <div>Grid 2</div>
      </Grid>
      <Grid item xs={4}>
        <div>Grid 3</div>
      </Grid>
    </Grid>
  );
}
