import { Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";
import React from "react"
import MenuAppBar from './components/navBar/navbar';
import { makeStyles } from '@material-ui/core/styles';
import AltCard from "./components/cards/card";
import Grid from '@material-ui/core/Grid';
import VerticalBar from "./Graphs/barGraph";
import DougnetBar from "./Graphs/dougnet";
const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  barGrpah: {
    marginLeft: theme.spacing(2),
  },
  DougGrpah:{
    marginRight:theme.spacing(2)
  },
  DougGrpah2:{
    marginRight:theme.spacing(1)
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div >
      <MenuAppBar/>
      <Typography variant="h5" className={classes.title}>
        Dashboard
      </Typography>
      <Divider variant="middle" />
      <AltCard/>
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined" className={classes.barGrpah}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                <VerticalBar />
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12}  md={6}>
        <Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined"  className={classes.DougGrpah2}>
            <CardContent>
                <Typography variant="h5" gutterBottom >
                <DougnetBar />
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined" className={classes.DougGrpah} >
            <CardContent>
                <Typography variant="h5" gutterBottom>
                <DougnetBar />
                </Typography>
            </CardContent>
        </Card>
        </Grid>
      </Grid>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
