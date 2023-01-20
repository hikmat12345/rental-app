import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 13,
    border: '1px solid #BDBDBD',
  },
  colorPrimary: {
    backgroundColor: '#ffffff',
  },
  bar: {
    borderRadius: 13,
    backgroundColor: '#00C2CB',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({ value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress variant='determinate' value={value} />
    </div>
  );
}
