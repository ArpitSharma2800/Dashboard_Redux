import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  barGrpah: {
    margin: theme.spacing(2),
    
  },
}))
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default  function DougnetBar(){
    const classes = useStyles()
    return (
      <div className={classes.barGrpah}>
        <Doughnut data={data} 
		width={100}
          height={50}
          options={{
            maintainAspectRatio: true
          }} />
      </div>
    );
  }