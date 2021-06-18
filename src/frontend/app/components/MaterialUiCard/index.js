/**
 *
 * MaterialUiCard
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles({
  root: {
    minWidth: 70,
    backgroundColor: '#E5E5E5',
    maxHeight: 120,
  },
  title: {
    fontSize: 18,
  },
});

function MaterialUiCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography className={classes.title} variant="h3" component="h3">
          Service level (CP)
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          96%
        </Typography>
        <IconButton aria-label="settings" style={{ float: 'right' }}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

MaterialUiCard.propTypes = {};

export default memo(MaterialUiCard);
