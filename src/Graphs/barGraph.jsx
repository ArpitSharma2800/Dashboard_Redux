import React from 'react';
import {Bar} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  barGrpah: {
    margin: theme.spacing(2),
  },
}))
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#b3e5fc',
      borderColor: '#b3e5fc',
      borderWidth: 1,
      hoverBackgroundColor: '#b3e5fc',
      hoverBorderColor: '#b3e5fc',
      data: [65, 59, 80, 81, 56, 55, 40,29]
    }
  ]
};


export default  function VerticalBar(){
  const classes = useStyles()
    return (
      <div className={classes.barGrpah}>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }}
        />
      </div>
    );
  }