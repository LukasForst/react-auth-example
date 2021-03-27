import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Routing from './modules/Routing';


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Routing/>
    </div>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      fontFamily: theme.typography.fontFamily,
      display: 'flex',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      width: '100vw',
      height: '100vh'
    }
  })
);
